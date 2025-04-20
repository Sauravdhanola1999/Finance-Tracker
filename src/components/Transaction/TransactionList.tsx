import { useEffect, useState } from 'react';

export function TransactionList() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await fetch('/api/transactions');
      const data = await res.json();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            <p>{transaction.description}</p>
            <p>${transaction.amount}</p>
            <p>Category: {transaction.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
