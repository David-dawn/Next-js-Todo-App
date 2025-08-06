"use client";
import { useState, useEffect } from "react";

export default function TodoForm({ initialData = {}, onSubmit }) {
  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (initialData.title) setTitle(initialData.title);
    if (typeof initialData.completed === "boolean")
      setCompleted(initialData.completed);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title can't be empty");
      return;
    }
    onSubmit({ title, completed, tag });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/40 backdrop-blur-lg border border-purple-300/40 p-6 rounded-xl shadow-xl space-y-6 transition-all duration-300 hover:shadow-2xl"
    >
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Tag
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 dark:bg-gray-700 dark:text-white"
          placeholder="e.g. Work"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Task Title
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 backdrop-blur placeholder-gray-400"
          placeholder="e.g. Build Todo App"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex items-center space-x-3">
        <input
          id="completed"
          type="checkbox"
          className="w-5 h-5 accent-purple-600"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <label
          htmlFor="completed"
          className="text-sm text-gray-700 font-medium"
        >
          Mark as Completed
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Save Task
      </button>
    </form>
  );
}
