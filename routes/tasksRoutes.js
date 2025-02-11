// Aquí definimos las rutas

const express = require('express');
const router = express.Router();
const TaskModel = require('../models/TaskModel');

//crear una taera

router.post('/create', async (req, res) => {
    // tomar el modelo para crear la tarea a partor de ese modelo
    // al usuario le pedimos el title por el req.body (title) y completed: lo ponemos por defecto en false
    // respuesta con la tarea
    try {
        const task = await TaskModel.create({...req.body, completed: false}) // al usarse le pedimos el title, el completed lo ponemos por defecto
        res.status(201).json(task)
    } catch (error) {
        console.log('Error al crear la tarea', error);
        
    }
});

// crear todas las tareas 
router.get('/', async (req, res) => {
    try {
        // usamos el método find para traer todo del modelo
        const tasks = await TaskModel.find()
        res.status(200).json(tasks)
    } catch (error) {
        console.log('Error al traer las tareas', error);      
    }
});

//buscar tareas por id
router.get('/id/:_id', async (req, res) => {
    try {
        const id = req.params._id;
        // const task = await TaskModel.findOne({ _id: id }) --> se puede hacer de esta forma o
        const task = await TaskModel.findById(id)

        if(!task) res.json({ mensaje : 'La tarea no ha sido encontrada' })

        res.status(200).json(task)
    } catch (error) {
        console.log('Error al encontrar la tarea', error);      
    }
});

// update - marcar una tarea como completada

router.put('/markAsCompleted/:_id:', async (req, res) => {
    try {
        const task = await TaskModel.findByIdAndUpdate(
            req.params._id, // id de la tarea que vamos a actualizar
            { completed : true }, // lo que vamos a actualizar
            { new : true } // se actualiza al momento de ejecutar el update
        )

        if(!task) {
            return res.status(404).json({ error: 'tarea no encontrada' })
        }

        res.status(200).json(task)
    } catch (error) {
        console.log('Error al actualizar la tarea', error);
    }

});

// actualizar una tarea y que solo se pueda cambiar el título de la tarea

router.put('/id/:_id:', async (req, res) => {
    try {
        const task = await TaskModel.findByIdAndUpdate(
            req.params._id, // id de la tarea que vamos a actualizar
            { title : req.body.title }, // por el req.body le pedimos al usuario el nuevo titulo
            { new : true } // se actualiza al momento de ejecutar el update
        )
        if(!task) {
            return res.status(404).json({ error: 'tarea no encontrada' })
        }

        res.status(200).json(task)
    } catch (error) {
        console.log('Error al actualizar la tarea', error);
    }

});

// borrar una tarea


router.delete('/id/:_id:', async (req, res) => {
    try {
        const task = await TaskModel.findByIdAndDelete(req.params._id)
        res.json({ mensaje : 'Task eliminado correctamente'})
    } catch (error) {
        console.log('Error al eliminar la tarea', error);
    }
});

module.exports = router;
