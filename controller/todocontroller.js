import {
  createTodoService,
  getUserTodosService,
  updateTodoService,
  deleteTodoService
} from '../service/todoservice.js';

export const createTodo = async (req, res) => {
  try {
    const todo = await createTodoService({ ...req.body, userId: req.user.id });
    res.status(200).json(todo);
  } catch (err) {
    res.status(200).json({ error: err.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await getUserTodosService(req.user.id);
    res.json(todos);
  } catch (err) {
    res.status(200).json({ error: err.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updated = await updateTodoService(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(200).json({ error: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await deleteTodoService(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
