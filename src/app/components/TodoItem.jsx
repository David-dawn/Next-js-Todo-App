'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TodoItem({ todo, onDelete }) {
  const [checked, setChecked] = useState(todo.completed);

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      layout
      className={`flex items-center justify-between p-4 rounded-lg shadow text-[#fff] bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border ${checked ? 'border-green-400' : 'border-gray-300'} transition`}
    >
      <div className="flex flex-col gap-1 max-w-[75%]">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="accent-purple-600 w-5 h-5"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <Link
            href={`/todos/${todo.id}`}
            className={`text-lg font-medium break-words ${checked ? 'line-through text-gray-500' : ''} hover:underline`}
          >
            {todo.title}
          </Link>
        </div>

        
        {todo.tag && (
          <span className="ml-8 mt-1 inline-block bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-white text-xs px-2 py-1 rounded w-fit">
            {todo.tag}
          </span>
        )}
      </div>

      <div className="space-x-3 text-sm">
        <Link href={`/todos/edit/${todo.id}`} className="text-blue-600 hover:underline">Edit</Link>
        <button onClick={() => onDelete(todo.id)} className="text-red-500 hover:underline">Delete</button>
      </div>
    </motion.li>
  );
}
