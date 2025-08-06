'use client';
import './globals.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) setDark(saved === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', dark);
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <html lang="en" className="transition duration-300">
      <body className={`min-h-screen font-sans ${dark ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 text-gray-800'}`}>
        <div className="min-h-screen flex flex-col">
          <header className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-md">
            <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-purple-700 dark:text-purple-300">✨ TodoApp</Link>
              <div className="space-x-4 text-sm font-medium">
                <Link href="/" className="hover:text-purple-500 dark:hover:text-purple-300">Home</Link>
                <Link href="/todos/new" className="hover:text-purple-500 dark:hover:text-purple-300">+ Add</Link>
                <button
                  onClick={() => setDark(!dark)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded transition text-xs"
                >
                  {dark ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          </header>

          <main className="flex-1 max-w-5xl mx-auto p-6">{children}</main>

          <footer className="text-center text-xs text-gray-500 dark:text-gray-400 py-4">
            &copy; {new Date().getFullYear()} Crafted with PD💜 using Next.js + Tailwind
          </footer>
        </div>
      </body>
    </html>
  );
}
