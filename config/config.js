const mongoose = require('mongoose'); // conectamos con la base de datos de mongo db
require('dotenv').config(); // accedemos a la mongo uri del .env para poder conectarnos

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('base de datos conectada');
    } catch (error) {
        console.error('Error al conectar la base de datos', error);
    }
};

module.exports = { dbConnection };
