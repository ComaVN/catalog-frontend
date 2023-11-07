import { getUsers } from '@catalog-frontend/data-access';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || session?.accessTokenExpiresAt < Date.now() / 1000) {
    return res.status(401).send({ error: 'Unauthorized' });
  }

  res.status(200);

  const { slug } = req.query;
  const [catalogId] = slug;

  try {
    const response = await getUsers(catalogId, `${session?.accessToken}`);
    if (response.status !== 200) {
      return res.status(response.status).send({ error: 'Failed to get user list' });
    }

    res.send(await response.json());
  } catch (error) {
    res.status(500).send({ error: 'Failed to get user list' });
  }
}