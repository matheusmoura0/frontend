import axios from 'axios';

const API = "http://localhost:3300/api/todos/";

export const getTodos =  async () => { 
    return await axios.get(API);
}

export const createTodo = async (todo) => { 
    return await axios.post(API, todo);
}

export const completeTodo = async (id) => { 
    return await axios.put(API + id);
}

export const deleteTodo = async (id) => { 
    return await axios.delete(API + id);
}

export const editTodo =  async (id, todo) => { 
    return await axios.put(API + id, todo);
}