//Levantamos nuestro servidor y conectamos todo.

const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./config/config');
const router = require('./routes/tasksRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar datos JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enrutado
app.use('/', router);

// Conectar a la base de datos
dbConnection();


// Configuración del puerto y ejecución del servidor
app.listen(PORT, () => {
    console.log(`Listening server on http://localhost:${PORT}`);
    })