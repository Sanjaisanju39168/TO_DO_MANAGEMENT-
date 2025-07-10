import { todo } from "../models/todo.js";

export const createTodo = async (data) =>{
    await todo.create(data);
} 
export const getTodosByUserId = async (userId) => await todo.find({ userId });

export const updateTodoById = async (id, data) => await todo.findByIdAndUpdate(id, data, { new: true });

export const deleteTodoById = async (id) => await todo.findByIdAndDelete(id);
