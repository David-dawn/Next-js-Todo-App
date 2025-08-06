import TodoList from './components/TodoList';

export default async function Home() {
  let todos = [];

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
      cache: 'no-store', // disables caching
    });

    if (!res.ok) throw new Error('Failed to fetch todos');

    todos = await res.json();
  } catch (error) {
    console.error('Error fetching todos:', error);
  }

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      {todos.length === 0 ? (
        <p className="text-red-500">Unable to load todos, refresh!</p>
      ) : (
        <TodoList initialTodos={todos} />
      )}
    </main>
  );
}
