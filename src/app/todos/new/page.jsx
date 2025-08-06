'use client';
import { useRouter } from 'next/navigation';
import TodoForm from '@/app/components/TodoForm';

export default function NewTodoPage() {
  const router = useRouter();

  const handleCreate = (todo) => {
    const newTodo = {
      ...todo,
      id: Date.now(), 
    };

    
    localStorage.setItem('newTodo', JSON.stringify(newTodo));

    router.push('/');
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">Create New Task</h2>
      <TodoForm onSubmit={handleCreate} />
    </div>
  );
}
