import React from 'react';
import { useState } from "react";
import { completeTodo } from '../helpers/requests';

const TodoCard = ({ todo, deleteTodo, updateTodo, editTodo }) => { 
    const [isEditing, setIsEditing] = useState(false);
    const [todoText, setTodoText] = useState(todo.todo);

    const handleEdit = () => { 
        setIsEditing(true);
        input.current.focus();
    }
    const stopEditing = () => { 
        setIsEditing(false);
        setTodoText(todo.todo);
    }

    const completeTodos = async () => {
        await completeTodo(todo.id);
    };

    return (
        <div className={`todo ${todo.completed ? 'todo-completed' : ''}`}>
            <input type="checkbox"  checked={todo.completed} onChange={ completeTodos } />
            <input type="text" ref={ input } value={todoText} readOnly={!isEditing} 
            onChange={(e) => setTodoText(e.target.value)}
            />
            <div className="todo__controls">
            {!isEditing ? (
            <>
            {!todo.completed && <button onClick={handleEdit}>Edit</button>}
            <button onClick={deleteTodo}>Delete</button>
            </>
        ) : (
            <>
            <button onClick={stopEditing}>Cancel</button>
            <button onClick={() => editTodo(todo.id, todoText, setIsEditing(false))}>Save</button>
            </>
        )}
            </div>
        </div>
    );
}

export default TodoCard;