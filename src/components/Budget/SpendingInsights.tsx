// components/Budget/SpendingInsights.tsx
import React from 'react';
import type { BudgetData } from '@/models/Budget';

type Props = {
  budgets: BudgetData[];
};

export const SpendingInsights: React.FC<Props> = ({ budgets }) => {
  const totalBudget = budgets.reduce((sum, b) => sum + b.amount, 0);
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0);
  const remainingBudget = totalBudget - totalSpent;

  return (
    <div>
      <h2>Spending Insights</h2>
      <p>Total Budget: ${totalBudget}</p>
      <p>Total Spent: ${totalSpent}</p>
      <p>Remaining Budget: ${remainingBudget}</p>
    </div>
  );
};
