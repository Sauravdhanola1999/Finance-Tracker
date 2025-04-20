'use client';

import { useState } from 'react';
import { BudgetData } from '@/models/Budget';

type Props = {
    onBudgetAdded: (newBudget: BudgetData) => void;
  };

const BudgetForm = ({ onBudgetAdded }: Props) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    const newBudget: BudgetData = {
        _id: new Date().toISOString(), // Temporary ID
        name,
        amount,
        spent: 0,
      };
    onBudgetAdded(newBudget);
    setName('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Budget Name"
        className="border p-2 w-full rounded"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Amount"
        className="border p-2 w-full rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Budget
      </button>
    </form>
  );
};

export default BudgetForm;
