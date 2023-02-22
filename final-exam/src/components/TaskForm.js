import React from "react";
import { useState } from "react";

function TaskForm({ onAddTask }) {
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (text.trim() !== '') {
            onAddTask(text);
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add deatails"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;