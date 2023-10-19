import { createChangeRequest, getChangeRequests } from '@catalog-frontend/data-access';
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
  const [catalogId, postType] = slug;

  if (req.method == 'GET') {
    try {
      const response = await getChangeRequests(`${catalogId}`, `${session?.accessToken}`);
      if (response.status !== 200) {
        return res.status(response.status).send({ error: 'Failed to get change requests' });
      }

      res.send(await response.json());
    } catch (error) {
      res.status(500).send({ error: 'Failed to get change requests' });
    }
  } else if (req.method == 'POST' && postType == 'createChangeRequest') {
    try {
      const response = await createChangeRequest(req.body, `${catalogId}`, `${session?.accessToken}`);
      if (response.status !== 201) {
        return res.status(response.status).send({ error: 'Failed to create change requests' });
      }
      const changeRequestId = response?.headers?.get('location').split('/').pop();
      res.status(200).send({ changeRequestId });
    } catch (error) {
      res.status(500).send({ error: 'Failed to create change request' });
    }
  } else if (req.method == 'POST' && postType == 'updateChangeRequest') {
    return res.status(404).send('Not implemented');
  } else {
    return res.status(400).send('');
  }
}