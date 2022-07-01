
import axios from "axios";
import { useState, useEffect } from "react";
import "./main.scss";
import TodoCard from "./components/TodoCard";
function App() {
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

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
