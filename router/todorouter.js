import express from 'express';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controller/todocontroller.js';
import { authMiddleware } from '../middleware/middleware.js';

const router = express.Router();

router.use(authMiddleware);

router.post('/add', createTodo);
router.get('/get', getTodos);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

export default router;
