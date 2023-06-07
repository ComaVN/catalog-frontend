import { getHistory } from '@catalog-frontend/data-access';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  const token = await getToken({ req });
  const { slug } = req.query;

  if (req.method == 'GET' && slug?.length == 2) {
    const [catalogId, resourceId] = slug;

    getHistory(catalogId, resourceId, `${token?.access_token}`)
      .then((response) => {
        return res.status(200).send(response);
      })
      .catch(() => {
        return res.status(500).send('');
      });
  } else {
    return res.status(400).send('');
  }
}