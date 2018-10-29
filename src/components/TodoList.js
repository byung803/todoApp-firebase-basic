import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo) => (
                <Todo
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    toggleTodo={() => props.toggleTodo(todo.id, todo.completed)}
                    removeTodo={() => props.removeTodo(todo.id)}
                />
            ))}
        </div>
    );
}

export default TodoList;