import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import '../index.css';
import { v4 as uuidv4 } from "uuid"

function Navbar() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTodos);
    }, []);

    const handleSubmit = () => {

    }

    const createTask = (e) => {
        e.preventDefault();

        const newTasks = [
            ...tasks, 
            {
                id: uuidv4(),
                task: taskName,
                isCompleted: false,
                isEditing: false
            }
        ];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        console.log(tasks)
        navigate("/")

    }

    // const editTask = (e) => {
    //     e.preventDefault();
    //     const newTasks = tasks.map(task => task.id === id? { ...task, isEditing: !task.isEditing} : task );
    //     setTasks(newTasks);
    //     localStorage.setItem('tasks', JSON.stringify(newTasks));
    // }

    return (
        <div className="">
            <div className="w-full max-w-md bg-[#3556AB] text-white px-6 py-10">
                <div className="text-center">
                    <h1 className="font-medium">Edit Task</h1>
                </div>
            </div>

            <div className="mx-4 mt-6">
                <label htmlFor="task_name" className="text-sm text-black">Task Name</label>
                <div className="pt-2">
                    <input
                        id="task_name"
                        value = {taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        type="text"
                        className="h-12 w-full bg-white text-[#0D2972] border-[1.5px] border-[#CBCBCB] text-xl rounded-lg"
                    />
                </div>
            </div>

            <div  className="fixed bottom-3 w-full text-white p-4">
                <div className="flex">
                    <button
                    type='button'
                        className="bg-[#AB3535] border-2 border-[#720D0D p-3 rounded-md shadow-lg"
                    >
                        Delete
                    </button>

                    <button
                        type="submit"
                        onClick={createTask}
                        className="flex-1 bg-[#3556AB] border-2 border-[#0D2972] p-3 rounded-md shadow-lg"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}


  
export default Navbar;
  