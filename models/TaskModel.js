// Este modelo define una tarea con un título y si está completada o no.

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
}, { timestamps: true });

const TaskModel = mongoose.model('TaskModel', TaskSchema);

module.exports = TaskModel;
