import { useState, useEffect } from 'react';

export function CategorySelector({ onCategorySelect }: { onCategorySelect: (category: string) => void }) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('/api/categories');
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <select onChange={(e) => onCategorySelect(e.target.value)}>
      <option value="">Select Category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
