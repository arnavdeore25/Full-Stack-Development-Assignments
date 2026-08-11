import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateTask() {
  const [task, setTask] = useState();
  const navigate = useNavigate();
  const Submit= (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/createTask", {name:task}).then(result => {
      console.log(result)
      navigate('/')
  }
).catch(e => console.log(e));

  }
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
         <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create Task</h2>
          <form onSubmit={Submit}>
            <label className="block text-gray-700 font-medium mb-2">Name of the Task:</label>
            <input type="text" name="tskName" id="taskName" onChange={(e) => setTask(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Submit</button>
          </form>
      </div>
    </div>
     
    </>
  )
}

export default CreateTask