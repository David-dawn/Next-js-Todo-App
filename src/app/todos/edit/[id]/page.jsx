'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import TodoForm from '@/app/components/TodoForm';

export default function EditTodoPage({ params }) {
  const [todo, setTodo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
      .then(res => res.json())
      .then(data => setTodo(data));
  }, [params.id]);

  const handleUpdate = (updatedTodo) => {
    const updated = { ...todo, ...updatedTodo };
    localStorage.setItem('editedTodo', JSON.stringify(updated));
    router.push('/');
  };

  if (!todo) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">Edit Task</h2>
      <TodoForm initialData={todo} onSubmit={handleUpdate} />
    </div>
  );
}
