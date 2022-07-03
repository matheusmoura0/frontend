const frisby = require('frisby');
// const shell = require('shelljs');

const api = 'http://localhost:3300';

it('should create a todo', () => {
  return frisby.post(`${api}/api/todos`, {
    todo: 'Test',
  })
  .expect('status', 201)
  .expect('json', 'todo', 'Test');
});