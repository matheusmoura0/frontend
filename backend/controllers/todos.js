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

const create = async (req, res) => { 
    try {
    const newTodo = await Todos.create(req.body);
        console.log(newTodo);
        return res.status(201).json(newTodo);

    } catch (error) {
      return  res.status(500).json({ message: error.message });
    }
}

const update = async (req, res) => { 
    try {
    const todoById = await Todos.findByPk(req.params.id);

      todoById.completed = !todoById.completed;
      await todoById.save();

        await todoById.update(req.body);
        return res.status(200).json(todoById);

        
    } catch (error) {
      return  res.status(500).json({ message: error.message });
    }
        
    }

    const deleteById = async (req, res) => { 
        try {
        const todoById = await Todos.findByPk(req.params.id);
            await todoById.destroy();
            return res.status(200).json(todoById);

        } catch (error) {
          return  res.status(500).json({ message: error.message });
        }
    }

    const updateTodo = async (req, res) => { 
        try {
        const todoById = await Todos.findByPk(req.params.id);
            await todoById.update(req.body);
            return res.status(200).json(todoById);

        } catch (error) {
          return  res.status(500).json({ message: error.message });
        }
    }

module.exports = {
    findAll,
    getById,
    create,
    update,
    deleteById,
    updateTodo
}