"use client";

import { useEffect, useState } from 'react';

export function DashboardCards() {
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    const fetchSummary = async () => {
      const res = await fetch('/api/dashboard/summary'); 
      const data = await res.json();
      setSummary(data);
    };

    fetchSummary();
  }, []);

  if (!summary) return <p>Loading summary...</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="card">
        <h3>Total Expenses</h3>
        <p>${summary.totalExpenses}</p>
      </div>
      <div className="card">
        <h3>Total Income</h3>
        <p>${summary.totalIncome}</p>
      </div>
      <div className="card">
        <h3>Remaining Budget</h3>
        <p>${summary.remainingBudget}</p>
      </div>
    </div>
  );
}
