const express = require('express')
const router = express.Router()

const {
    getTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoControllers')

const protectTodoRoutes = require('../middleware/protectTodoRoutes')

router.use(protectTodoRoutes)

router.get('/', getTodos)

router.get('/:id', getTodo)

router.post('/', createTodo)

router.patch('/:id', updateTodo)

router.delete('/:id', deleteTodo)

module.exports = router