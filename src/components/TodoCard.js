import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faFilePen, faBan, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

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
        <div  className={`todo ${todo.completed ? 'todo-completed' : ''}`}>
            <input className='checkbox' type="checkbox"  checked={todo.completed} onChange={ completed } />
            <input className='todo_text' onClick={ completed } type="text" ref={ input } value={content} readOnly={!edit} 
            onChange={(e) => setContent(e.target.value)}
            />
            <div className="todo__controls">
            {!edit ? (
            <>
            {!todo.completed && <FontAwesomeIcon className='button' icon={ faFilePen} onClick={handleEdit}></FontAwesomeIcon>}
            <FontAwesomeIcon className='button'  onClick={deleteTodo} icon={faTrash}></FontAwesomeIcon>
            </>
        ) : (
            <>
            
            <FontAwesomeIcon className='button' icon={faBan} onClick={stopEditing}> X </FontAwesomeIcon>
            <FontAwesomeIcon className='button' icon={faFloppyDisk} onClick={() => editTodo(todo.id, content, setEdit(false))}>Save</FontAwesomeIcon>
            </>
        )}
            </div>
        </div>
    );
}

export default TodoCard;

