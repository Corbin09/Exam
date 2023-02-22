import React from "react";
import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onTaskUpdate }) {
    function handleTaskUpdate(task, isCompleted) {
        onTaskUpdate({
            ...task,
            isCompleted,
        });
    }

    function handleTaskDelete(task) {
        onTaskUpdate(task, true);
    }

    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onTaskUpdate={handleTaskUpdate}
                    onTaskDelete={handleTaskDelete}
                />
            ))}
        </ul>
    );
}


export default TaskList;
