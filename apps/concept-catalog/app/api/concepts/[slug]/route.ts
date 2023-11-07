import { createConcept, importConcepts } from '@catalog-frontend/data-access';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { NextRequest } from 'next/server';

async function handler(req: NextRequest, { params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || session?.accessTokenExpiresAt < Date.now() / 1000) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { slug } = params;

  if (req.method === 'POST' && slug === 'import') {
    try {
      const concepts = JSON.parse(req.body);
      const response = await importConcepts(concepts, session?.accessToken);
      return new Response(JSON.stringify(response), { status: response.status });
    } catch (error) {
      console.error(error);
      return new Response('Failed to import concept', { status: 500 });
    }
  } else if (req.method === 'POST') {
    const drafConcept = {
      anbefaltTerm: {
        navn: { nb: '' },
      },
      ansvarligVirksomhet: {
        id: slug,
      },
    };

    try {
      const response = await createConcept(drafConcept, session?.accessToken);
      if (response.status !== 201) {
        return new Response('Failed to create concept', { status: response.status });
      }
      const conceptId = response?.headers?.get('location')?.split('/').pop();
      return new Response(JSON.stringify(conceptId), { status: 200 });
    } catch (err) {
      return new Response('Failed to create concept', { status: 500 });
    }
  }

  return new Response('Invalid request', { status: 400 });
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };