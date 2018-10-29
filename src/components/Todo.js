import React from 'react';

const Todo = ({ text, toggleTodo, removeTodo, completed }) => (
    <div>
        <li
            onClick={toggleTodo}
            style={
                {
                    textDecoration: completed ? 'line-through' : 'none'
                }
            }
        >
            {text}
        </li>
        <button onClick={removeTodo}>remove</button>
    </div>
)

export default Todo;