import React, {useState} from "react";
import Form from "./Form";
import "../stylesheets/TaskList.css"
import Task from "./Task";

const TaskList = () => {
    const [tasks, setTask] = useState([]);

    const addTask = (task) => {
        console.log(task);
        if (task.text.trim()) {
            task.text = task.text.trim();
            const allTasks = [task, ...tasks];
            setTask(allTasks);
        }
    }

    const deleteTask = (id) => {
        const updateTask = tasks.filter(task => task.id !== id);
        setTask(updateTask);
    }

    const doneTask = (id) => {
        const updateTasks = tasks.map((task) => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return task;
        }) 
        setTask(updateTasks);
    }
    
    return (
        <>
            <Form onSubmit={addTask}/>
            <div className="task-list-container">
                {
                    tasks.map((task) => {
                        return <Task text={task.text} done={task.done} key={task.id} id={task.id} deleteTask={deleteTask} doneTask={doneTask}/>
                    })
                }
            </div>
        </>
    )
}

export default TaskList;