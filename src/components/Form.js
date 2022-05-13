import React, { useState } from "react";
import "../stylesheets/Form.css"
import {v4 as uuidv4} from "uuid";

const Form = (props) => {

    const [input, setInput] = useState();

    const handleSend = (event) => {
        event.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            done: false
        }

        props.onSubmit(newTask);
    }

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    return (
        <form className="task-form" onSubmit={handleSend}>
            <input type="text" className="task-input" placeholder="Give a task" name="text" onChange={handleChange}/>
            <button className="task-button">Add task</button>
        </form>
    )
}

export default Form;