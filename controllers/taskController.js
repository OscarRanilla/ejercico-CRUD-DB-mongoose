// Aquí vamos a organizar la lógica de cada endpoint 

const Task = require('../models/Task');

// Crear una nueva tarea
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea', error });
    }
};

// Obtener todas las tareas
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tareas', error });
    }
};

// Obtener tarea por ID
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params._id);
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarea', error });
    }
};

// Marcar como completada
const markCompleted = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params._id, { completed: true }, { new: true });
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error al marcar la tarea como completada', error });
    }
};

// Actualizar solo el título de la tarea
const updateTaskTitle = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params._id, { title: req.body.title }, { new: true });
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea', error });
    }
};

// Eliminar una tarea
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params._id);
        if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
        res.json({ message: 'Tarea eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea', error });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    markCompleted,
    updateTaskTitle,
    deleteTask
};
