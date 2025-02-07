//Levantamos nuestro servidor y conectamos todo.

const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./config/config');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar datos JSON
app.use(express.json());

// Rutas
app.use('/tasks', taskRoutes);

// Conectar a la base de datos
dbConnection();


// Configuración del puerto y ejecución del servidor
app.listen(PORT, () => {
    console.log(`Listening server on http://localhost:${PORT}`);
    })