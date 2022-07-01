import React from 'react';
import { useState } from "react";

const TodoCard = ({ todo, deleteTodo, completeTodo, editTodo }) => { 
    const input = React.useRef(null);
    const [edit, setEdit] = useState(false);
    const [content, setContent] = useState(todo.todo);

    const handleEdit = e => { 
        setEdit(true);

        input.current.focus();

    }

    const stopEditing = e => { 
        setEdit(false);
        setContent(todo.todo);
    }
    const completed = async () => { 
        await completeTodo(todo.id);
    }

    
    return (
        <div className={`todo ${todo.completed ? 'todo-completed' : ''}`}>
            <input type="checkbox"  checked={todo.completed} onChange={ completed } />
            <input type="text" ref={ input } value={content} readOnly={!edit} 
            onChange={(e) => setContent(e.target.value)}
            />
            <div className="todo__controls">
            {!edit ? (
            <>
            {!todo.completed && <button onClick={handleEdit}>Edit</button>}
            <button onClick={deleteTodo}>Delete</button>
            </>
        ) : (
            <>
            <button onClick={stopEditing}>Cancel</button>
            <button onClick={() => editTodo(todo.id, content, setEdit(false))}>Save</button>
            </>
        )}
            </div>
        </div>
    );
}

export default TodoCard;

