const Todos = require('../models/TodosModels');

const findAll = async (_req, res) => { 
    const allTodos = await Todos.findAll();
    res.json(allTodos);
}

module.exports = {
    findAll
}