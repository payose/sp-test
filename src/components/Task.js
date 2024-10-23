import React from "react";
import {Link} from "react-router-dom"
import '../index.css';

function Task({task, toggleComplete}) {

    return (
        <div className="rounded-md bg-white flex items-center justify-between py-6 px-6 mx-4 my-4 shadow-md">
            <label className="flex items-center gap-3" htmlFor="cp-checkbox">
                <input 
                    type="checkbox"
                    id="cp-checkbox"
                    onClick={toggleComplete}
                    className="form-checkbox h-7 w-7 text-green-500 border-[1.5px] border-blue-primary peer relative appearance-none 
                        rounded-full cursor-pointer checked:bg-[#49C25D] checked:border-gray-400"
                />

                <span 
                    className={`${task.isCompleted? "line-through text-[#8D8D8D]" : "text-blue-primary"}`}
                >{task.task}</span>
            </label>
            
            <Link to="/form" className="nav-item">
                <button className="text-blue-primary border border-blue-primary rounded-md p-3">Edit</button>
            </Link>

        </div>
    );
}

export default Task;
