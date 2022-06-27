const exporess = require('express');

const router = exporess.Router();

const allTodos = require('../controllers/todos');

router.get('/', allTodos.findAll);
router.get('/:id', allTodos.getById);

module.exports = router;
