
import axios from "axios";
import { useState, useEffect } from "react";
import "./main.scss";
import TodoCard from "./components/TodoCard";
function App() {
  const API = "http://localhost:3300/api/todos/";
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [popUp, setpopUp] = useState(false);

  useEffect(() => { 
    getTodos();

  }, []);


  const getTodos = async () => { 
    const todos = await axios.get(API);
    setTodos(todos.data);
  }

  const completeTodo = async (id) => { 
    await axios.put(`${API}${id}/complete`);
    getTodos();
  }

  const deleteTodo = async (id) => { 
    await axios.delete('http://localhost:3300/api/todos/' + id);
    getTodos();
  }
  
  const addTodo = async () => { 
    await axios.post(API, { todo: newTodo });
    getTodos();
    setpopUp(false);
  }

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
