const exporess = require('express');

const router = exporess.Router();

const allTodos = require('../controllers/todos');

router.get('/', allTodos.findAll);
router.get('/:id', allTodos.getById);
router.post('/', allTodos.create);
router.put('/:id', allTodos.update);
router.delete('/:id', allTodos.deleteById);

module.exports = router;
