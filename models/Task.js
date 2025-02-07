// Este modelo define una tarea con un título y si está completada o no.

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
}, { timestamps: true });

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
