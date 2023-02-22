import React from "react";
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  function addTask(text) {
    const newTask = { text, completed: false };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function clearTasks() {
    setTasks([]);
  }

  function clearCompletedTasks() {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  }

  function filterTasks(tasks, filter) {
    switch (filter) {
      case 'All':
        return tasks;
      case 'Active':
        return tasks.filter((task) => !task.completed);
      case 'Completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }

  const filteredTasks = filterTasks(tasks, filter);

  return (
    <div className="app">
      <h1>#todo</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        onTaskDelete={deleteTask}
      />

      <button onClick={clearTasks}>delete all</button>
    </div>
  );
}

export default App;
