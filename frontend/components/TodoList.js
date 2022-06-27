import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        const response = await axios.get('http://localhost:3300/api/todos');
        setTodos(response.data);
    }

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:3300/api/todos/${id}`)
        getTodos();
    }

    return (
        <div>
            <Link to="/add" className="button is-primary mt-2"> Add Todo </Link>
        </div>
    )
}