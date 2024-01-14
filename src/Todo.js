import React from "react";

const Todo = ({
    id,
    task,
    isComplete,
    handleRemove,
    handleToggle
}) => {
    const removeTodo = () => handleRemove(id);
    const toggleTodo = () => handleToggle(id);

    return (
        <div className="Todo">
            <span 
                className="Todo-task"
                style={{ textDecoration: isComplete ? "line-through" : "none"}}
            >
                {task}
            </span>
            <button className="Todo-remove-btn" onClick={removeTodo}>X</button>
            <button className="Todo-toggle-btn" onClick={toggleTodo}>Mark as complete</button>
        </div>
    );
}


export default Todo;