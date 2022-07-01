import TodoCard from "./components/TodoCard";
import { useState, useEffect } from "react";
import {
  getTodosApi,
  createTodoApi,
  completeTodoApi,
  deleteTodoApi,
  editTodoApi
} from "./helpers/requests";

function App() {
  const [todos, setTodos] = useState([]);	
  const [newTodo, setNewTodo] = useState("");
  const [popUp, setPopUp] = useState(false);


  useEffect(() => { 
    getTodos();

  }, []);

  const getTodos = async () => { 
    const todos = await getTodosApi();
    setTodos(todos);
  }


  const completeTodo = async (id) => { 
    await completeTodoApi(id);
    getTodos();
  }

  const deleteTodo = async (id) => { 
    await deleteTodoApi(id);
    getTodos();
  }

  const AddTodo = async (todo) => { 
    await createTodoApi(todo);
    getTodos();
    setPopUp(false);
  }

  const editTodo = async (id, todo) => { 
    await editTodoApi(id, todo);
    getTodos();
  }


  return (
    <div className="app">
      <div className="todos">
        <div className="tasks"> 
        <h2> Suas tarefas </h2>
        </div>
        { todos.map(todo => (
          <TodoCard key={todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={() => deleteTodo(todo.id)} editTodo={editTodo}/>
        ))}
      </div>

      <div className="add-popup" onClick={() => setPopUp( !popUp ? true:false )}>  + </div>
      {popUp ? (
        <div className="popup-conteiner">
          <div className="add-close" onClick={() => setPopUp(false)}>  x </div>
          <div className="content">
            <h3> Add Task </h3>
            <input  className="addTodoInput" type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
            <div className="button" onClick={ AddTodo } disabled={ todos.length}> Create Task </div>
          </div>
        </div>
      ): ''}


    </div>
  );
}

export default App;
