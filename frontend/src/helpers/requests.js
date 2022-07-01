import axios from 'axios';

const API = "http://localhost:3300/api/todos/";

export const getTodosApi =  async () => { 
    return await axios.get(API);
}

export const createTodoApi = async (todo) => { 
    return await axios.post(API, todo);
}

export const completeTodoApi = async (id) => { 
    return await axios.put(API + id);
}

export const deleteTodoApi = async (id) => { 
    return await axios.delete(API + id);
}

export const editTodoApi =  async (id, todo) => { 
    return await axios.put(API + id, todo);
}