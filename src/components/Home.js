import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import Navbar from "./Navbar";
import Banner from "./Banner";
import Task from "./Task";
import '../index.css';


function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(savedTasks);

    }, []);

    const toggleComplete = (id) => {
        const newStatus = tasks.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        setTasks(newStatus)
        localStorage.setItem('tasks', JSON.stringify(newStatus));
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <Navbar />
            <Banner />

            <div className='mt-6 w-full'>
                {
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                            toggleComplete={() => toggleComplete(task.id)}
                        />
                    ))
                }
            </div>

            <Link to="/form" className="nav-item">
                <button
                    className="button-shadow fixed bottom-3 right-10 bg-blue-secondary border-2 border-[#123EB1] text-white p-4 rounded-full shadow-lg"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </button>
            </Link>
        </div>
    );
}

export default Home;
