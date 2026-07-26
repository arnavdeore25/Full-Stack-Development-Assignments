import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([
    {
      text: "Learn React Hooks",
      completed: false,
    },
  ]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTodos([
      ...todos,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];

    updatedTodos[index].completed =
      !updatedTodos[index].completed;

    setTodos(updatedTodos);
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter(
      (_, i) => i !== index
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="bg-white text-black rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-5">
        Todo List
      </h2>

      <div className="flex gap-3 mb-5">

        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border p-3 rounded flex-1"
        />

        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-5 rounded hover:bg-blue-700"
        >
          Add
        </button>

      </div>

      <div className="space-y-3">

        {todos.map((todo, index) => (

          <div
            key={index}
            className="flex justify-between items-center border rounded p-3"
          >

            <span
              className={`cursor-pointer ${
                todo.completed
                  ? "line-through text-gray-500"
                  : ""
              }`}
              onClick={() => toggleComplete(index)}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Todo;