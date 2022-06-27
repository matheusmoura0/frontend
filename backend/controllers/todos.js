const { Todos } = require('../models');

const findAll = async (_req, res) => { 
    try {
    const alltodos = await Todos.findAll();


      return  res.status(200).json(alltodos);

    } catch (error) {
      return  res.status(500).json({ message: error.message });
    }
}

const getById = async (req, res) => { 
    try {
    const todoById = await Todos.findByPk(req.params.id);
        return res.status(200).json(todoById);

    } catch (error) {
      return  res.status(500).json({ message: error.message });
    }
}

module.exports = {
    findAll,
    getById
}