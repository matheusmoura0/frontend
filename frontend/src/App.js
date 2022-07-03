
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
    setNewTodo("");
  }

  const editTodo = async (id, content) => { 
    await axios.put(`${API}${id}`, { todo: content });
    getTodos();
  }

  return (
    <div className="app">
      <div className="todos">
        <div className="tasks"> 
        <h2>Suas tarefas</h2>
        </div>
         { todos.map(todo => (
          <TodoCard key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={() => deleteTodo(todo.id)} editTodo={editTodo}/>
        ))}
      </div>

      <div  data-testid="popUpButton" className="add-popup" onClick={() => setpopUp( !popUp ? true:false )}>  + </div>
      {popUp ? (
        <div className="popup-conteiner">
          <div  className="add-close" onClick={() => setpopUp(false)}>  x </div>
          <div className="content">
            <h3> Add Task </h3>
            <input  className="addTodoInput" type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
            <div className="button" onClick={ addTodo } disabled={ todos.length}> Create Task </div>
          </div>
        </div>
      ): ''}


    </div>
  );
}

export default App;

