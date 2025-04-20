import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import BudgetModel from '@/models/Budget'; // Mongoose model

// GET all budgets
export async function GET() {
  await dbConnect();

  try {
    const budgets = await BudgetModel.find({});
    return NextResponse.json(budgets);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch budgets' }, { status: 500 });
  }
}

// POST new budget
export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    const newBudget = new BudgetModel(body);
    const savedBudget = await newBudget.save();
    return NextResponse.json(savedBudget, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create budget' }, { status: 500 });
  }
}
