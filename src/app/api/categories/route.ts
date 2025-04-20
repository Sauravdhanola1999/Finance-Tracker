import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Category from '@/models/Category';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const categories = await Category.find({});
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching categories' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
