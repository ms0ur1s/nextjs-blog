import { NextApiRequest, NextApiResponse } from 'next';

// req = request data, res = response data
export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' });
};
