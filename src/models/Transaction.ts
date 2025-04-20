import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  category: String,
});

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);

export default Transaction;
