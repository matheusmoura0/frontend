const frisby = require('frisby');

const api = 'http://localhost:3300';

describe('1- can sign a new todo and return others', () => { 
it('should create a todo', async () => {
    await frisby.post(`${api}/api/todos`, {
    id: 1,
    todo: 'Test',
    completed: 'false'
    })
    .expect('status', 201)
    .expect('json', 'todo', 'Test')
    
})

it('should return a list of todos', async () => {
    await frisby.get(`${api}/api/todos`)
    .expect('status', 200)
});
it('should return a todo by id',  async () => { 
    await frisby.get(`${api}/api/todos/1`)
    .expect('status', 200)
})
});

describe('2- can update a todo by id', () => {
it('should update a todo',  async () => {
    await frisby.put(`${api}/api/todos/1`, {
        completed: 'true'
    })
    .expect('status', 200)
    .expect('json', 'completed', true)
}).timeout(60000)
});

describe(   '3- can delete a todo by id', () => { 

it('should delete a todo', async () => {
    await frisby.delete(`${api}/api/todos/1`)
    .expect('status', 200)
}).timeout(60000)
});