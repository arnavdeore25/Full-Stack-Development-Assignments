"use client";

import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask(e: React.FormEvent) {
    e.preventDefault();

    if (!task.trim()) {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        My Study Tasks
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Plan what you want to study today.
      </p>

      <form onSubmit={addTask} className="mt-5 flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a study task"
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-pink-500"
        />

        <button
          type="submit"
          className="rounded-lg bg-pink-500 px-4 py-2 font-medium text-white hover:bg-pink-600"
        >
          Add
        </button>
      </form>

      <div className="mt-5 space-y-3">
        {tasks.length === 0 ? (
          <p className="rounded-lg bg-slate-50 p-4 text-center text-sm text-slate-500">
            No tasks added yet.
          </p>
        ) : (
          tasks.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-slate-50 p-3"
            >
              <span className="text-sm text-slate-700">
                {item}
              </span>

              <button
                onClick={() => deleteTask(index)}
                className="text-sm font-medium text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

    </section>
  );
}