// models/Budget.ts

import mongoose, { Schema, Document, model } from 'mongoose';

// Full mongoose document type
export interface IBudget extends Document {
  _id: string;
  name: string;
  amount: number;
  spent: number;
}

// Plain object type for usage in the app
export type BudgetData = {
  _id: string;
  name: string;
  amount: number;
  spent: number;
};

const BudgetSchema = new Schema<IBudget>({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  spent: { type: Number, default: 0 },
});

const Budget = model<IBudget>('Budget', BudgetSchema);
export default Budget;
