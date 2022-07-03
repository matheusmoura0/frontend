const frisby = require('frisby');
frisby.globalSetup({
    timeout: 10000
  });
 const shell = require('shelljs');

const api = 'http://localhost:3300';

describe('1- can sign a new todo and return others', () => { 
it('should create a todo', () => {
    return frisby.post(`${api}/api/todos`, {
    todo: 'Test',
    })
    .expect('status', 201)
    .expect('json', 'todo', 'Test')
    
}).timeout(60000)

it('should return a list of todos', () => {
    return frisby.get(`${api}/api/todos`)
    .expect('status', 200)
});
it('should return a todo by id', () => { 
    return frisby.get(`${api}/api/todos/1`)
    .expect('status', 200)
})
});