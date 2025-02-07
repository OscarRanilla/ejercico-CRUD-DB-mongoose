// Aquí definimos los endpoints

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/create', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/id/:_id', taskController.getTaskById);
router.put('/markCompleted/:_id', taskController.markCompleted);
router.put('/id/:_id', taskController.updateTaskTitle);
router.delete('/id/:_id', taskController.deleteTask);

module.exports = router;
