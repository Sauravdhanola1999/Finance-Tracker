// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-black border-b mb-4 space-x-4">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/budgeting">Budgeting</Link>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
