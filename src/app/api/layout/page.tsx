import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Finance Dashboard',
  description: 'A personal finance tracker with transactions, budgets, and insights',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
