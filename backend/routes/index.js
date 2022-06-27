const exporess = require('express');

const router = exporess.Router();

const allTodos = require('../controllers/todos');

router.get('/', allTodos.findAll);

module.exports = router;
