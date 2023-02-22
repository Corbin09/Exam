
function TaskItem({ task, onTaskUpdate, onTaskDelete }) {
    function handleCheckboxChange(event) {
        onTaskUpdate(task, event.target.checked);
    }
    function handleDeleteClick() {
        onTaskDelete([]);
    }



    const text = task["text"];

    return (
        <li className="list-group-item">
            <div className="d-flex container">
                <label >
                    <input
                        className="align-bottom"
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={handleCheckboxChange}
                    />
                    {task.description}
                </label>
                <p className="fs-3 align-middle">{text}</p>
                <button className="" onClick={handleDeleteClick}>Delete</button>
            </div>

        </li>
    );
}

export default TaskItem;