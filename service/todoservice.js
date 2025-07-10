import {
  createTodo,
  getTodosByUserId,
  updateTodoById,
  deleteTodoById
} from '../dal/tododal.js';

export const createTodoService = async (data) => await createTodo(data);

export const getUserTodosService = async (userId) => await getTodosByUserId(userId);

export const updateTodoService = async (id, data) => await updateTodoById(id, data);

export const deleteTodoService = async (id) => await deleteTodoById(id);
