import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Tasks() {

    const [task, setTask] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/").then(result => setTask(result.data)).catch(err => console.log(err));
    }, [])


const completeTask = (id, completed) => {
    axios.put(`http://localhost:5000/completeTask/${id}`, {
        completed: !completed
    })
    .then(() => {
        setTask(task.map(item =>
            item._id === id
                ? { ...item, completed: !completed }
                : item
        ));
    })
    .catch(err => console.log(err));
};

const deleteTask = (id) => {

    axios.delete(`http://localhost:5000/deleteTask/${id}`)
        .then(() => {
            setTask(task.filter(item => item._id !== id));
        })
        .catch(err => console.log(err));

};

  return (
    <div className="p-6 max-w-4xl mx-auto">
        <Link to='/create' className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add</Link>
        <br/>
        <table className="w-full border-collapse border border-gray-300 shadow-sm">
            <thead className="bg-gray-100">
                <tr >
                    <th className="border border-gray-300 px-4 py-2 text-left">SrNo.</th>
                    <th  className="border border-gray-300 px-4 py-2">CheckList</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Name of Task</th>
                    <th  className="border border-gray-300 px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {task.map((taskItem, index) => {
                      console.log(taskItem);
                    return (
                    <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>    
                        <td className="border border-gray-300 px-4 py-2 text-center">
                        <input
                            type="checkbox"
                            checked={taskItem.completed}
                            onChange={() => completeTask(taskItem._id, taskItem.completed)}
                            className="w-4 h-4"
                        />
                        </td>
                        <td
                                className={`border border-gray-300 px-4 py-2 ${
                                    taskItem.completed
                                        ? "line-through text-gray-400"
                                        : "text-gray-800"
                                }`}
                            >
                                {taskItem.name}
                            </td>
                        <td className="border border-gray-300 px-4 py-2 text-center"> 
                            <button onClick={() => deleteTask(taskItem._id)} 
                                className="bg-red-500 text-white px-3 mr-2 py-1 rounded hover:bg-red-600">
                                Delete
                            </button>
                            <button className="bg-green-500 text-white px-3 ml-2 py-1 rounded hover:bg-green-600">
                                 <Link to={`/update/${taskItem._id}`}>Update</Link>
                            </button>
                            
                         </td>
                    </tr>
                    )
            })}
            </tbody>
        </table>
    </div>
  )
}

export default Tasks