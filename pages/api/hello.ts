import type { NextApiRequest, NextApiResponse } from 'next';

export type ApiHelloResponse = { text: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiHelloResponse>,
) {
  res.status(200).json({ text: 'Hello' });
}
