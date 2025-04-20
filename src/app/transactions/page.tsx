// src/app/transactions/page.tsx

import {TransactionForm} from '@/components/Transaction/TransactionForm';
import {TransactionList} from '@/components/Transaction/TransactionList';

export default function TransactionsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Transactions</h1> 
      <TransactionForm />
      <TransactionList />
    </div>
  );
}
