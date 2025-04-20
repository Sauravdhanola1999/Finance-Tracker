'use client';

import { useEffect, useState } from 'react';
import BudgetForm from '@/components/Budget/BudgetForm';
import { BudgetItem } from '@/components/Budget/BudgetItem';
import { SpendingInsights } from '@/components/Budget/SpendingInsights';
import type { BudgetData } from '@/models/Budget'; // ✅ Import type, not model

export default function BudgetingPage() {
  const [budgets, setBudgets] = useState<BudgetData[]>([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const res = await fetch('/api/budgets');
        if (!res.ok) throw new Error('Failed to fetch budgets');
        const data = await res.json();
        setBudgets(data);
      } catch (error) {
        console.error('Error fetching budgets:', error);
      }
    };

    fetchBudgets();
  }, []);

  const handleEdit = (id: string, updated: { name: string; amount: number }) => {
    setBudgets((prev) =>
      prev.map((b) => (b._id === id ? { ...b, ...updated } : b))
    );
  };

  const handleDelete = (id: string) => {
    setBudgets((prev) => prev.filter((b) => b._id !== id));
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Budget Planner</h1>

      <BudgetForm
        onBudgetAdded={(newBudget: BudgetData) => setBudgets((prev) => [...prev, newBudget])}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {budgets.length === 0 ? (
          <p>No budgets available</p>
        ) : (
          budgets.map((budget) => (
            <BudgetItem
              key={budget._id}
              id={budget._id}
              name={budget.name}
              amount={budget.amount}
              spent={budget.spent}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      <SpendingInsights budgets={budgets} />
    </div>
  );
}
