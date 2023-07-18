import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query);
  res.status(200).json({ name: 'Hello folks', params: { req.query } })
}
