import React from "react";
import "../stylesheets/Task.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

const Task = ({id, text, done, doneTask, deleteTask}) => {
    return (
        <div className={done ? "task-main--container done" : "task-main--container"}>
            <div className="task-text" onClick={() => {doneTask(id)}}>{text}</div>
            <div className="task-icon-container" onClick={() => {deleteTask(id)}}><AiOutlineCloseCircle className="task-icon"/></div>
        </div>
    )
}

export default Task;