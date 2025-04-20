import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Transaction from '@/models/Transaction';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const transactions = await Transaction.find({});
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching transactions' });
    }
  } else if (req.method === 'POST') {
    try {
      const transaction = new Transaction(req.body);
      await transaction.save();
      res.status(201).json(transaction);
    } catch (error) {
      res.status(500).json({ error: 'Error creating transaction' });
    }
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    try {
      const transaction = await Transaction.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ error: 'Error updating transaction' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    try {
      await Transaction.findByIdAndDelete(id);
      res.status(200).json({ message: 'Transaction deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting transaction' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
