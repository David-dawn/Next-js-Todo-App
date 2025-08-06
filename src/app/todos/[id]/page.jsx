export default async function ViewTodo({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  const todo = await res.json();

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-2">{todo.title}</h1>
      <p>Status: <span className={todo.completed ? 'text-green-600' : 'text-red-600'}>{todo.completed ? 'Completed' : 'Not Completed'}</span></p>
    </div>
  );
}
