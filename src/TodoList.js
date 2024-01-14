import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = todoObj => {
        setTodos(todos => [...todos, todoObj]);
    };
    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };
    const toggleTodo = id => {
        setTodos(todos => 
            todos.map(todo => 
                todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        );
    };

    const todoComponents = todos.map(todo => (
        <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            isComplete={todo.isComplete}
            handleRemove={removeTodo}
            handleToggle={toggleTodo}
        />
    ));

    return (
        <div className="TodoList">
            <NewTodoForm createTodo={addTodo} />
            {todoComponents}
        </div>
    );
}


export default TodoList;