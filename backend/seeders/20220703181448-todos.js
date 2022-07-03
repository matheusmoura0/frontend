module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('todos', 
    [
      {
        id: 1,
        todo: 'estudar ruby',
        completed: false,
        todotime: "2022-06-30T18:37:48.000Z"
      },
      
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('todos', null, {}),
}