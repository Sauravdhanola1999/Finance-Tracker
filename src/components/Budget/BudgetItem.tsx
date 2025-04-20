import { useState } from 'react';

type BudgetItemProps = {
  id: string;
  name: string;
  amount: number;
  spent: number;
  onEdit: (id: string, updatedBudget: { name: string; amount: number }) => void;
  onDelete: (id: string) => void;
};

export function BudgetItem({ id, name, amount, spent, onEdit, onDelete }: BudgetItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedAmount, setUpdatedAmount] = useState(amount);

  const handleSave = () => {
    onEdit(id, { name: updatedName, amount: updatedAmount });
    setIsEditing(false);
  };

  return (
    <div className="border p-4 mb-4 rounded-md shadow-md">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className="border p-2 mb-2 w-full"
            placeholder="Budget Name"
          />
          <input
            type="number"
            value={updatedAmount}
            onChange={(e) => setUpdatedAmount(parseFloat(e.target.value))}
            className="border p-2 mb-2 w-full"
            placeholder="Budget Amount"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h3 className="font-bold text-xl">{name}</h3>
          <p>Budgeted: ${amount}</p>
          <p>Spent: ${spent}</p>
          <p>Remaining: ${amount - spent}</p>
          <div className="mt-2 flex justify-between">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
