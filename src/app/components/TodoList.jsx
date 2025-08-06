'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import TodoItem from './TodoItem';

export default function TodoList({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos || []);

  useEffect(() => {
    const newTodo = JSON.parse(localStorage.getItem('newTodo'));
    const editedTodo = JSON.parse(localStorage.getItem('editedTodo'));

    if (newTodo) {
      setTodos(prev => [newTodo, ...prev]);
      localStorage.removeItem('newTodo');
    }

    if (editedTodo) {
      setTodos(prev =>
        prev.map(todo => (todo.id === editedTodo.id ? editedTodo : todo))
      );
      localStorage.removeItem('editedTodo');
    }
  }, []);

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="space-y-6">
      <Link
        href="/todos/new"
        className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition"
      >
        + Add Task
      </Link>
      <ul className="space-y-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
