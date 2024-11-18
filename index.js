const sequelize = require('./config/db');

// Sinkronisasi model dengan database
sequelize.sync()
    .then(() => console.log("Database & tables created!"))
    .catch((error) => console.error("Error creating database tables:", error));

const express = require('express');
const app = express();
const quizRoutes = require('./routes/quizRoutes');
const dotenv = require('dotenv');
const path = require('path');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const aksaraRoutes = require('./routes/aksaraRoutes'); // Import rute aksara
const cors = require('cors')
dotenv.config();

// Konfigurasi swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Quiz API for Aksara Sunda',
            version: '1.0.0',
            description: 'API documentation for Aksara Sunda & Dictionary application',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'], // Tentukan lokasi file routes untuk membaca komentar Swagger
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json()); // Parsing JSON body
app.use(express.urlencoded({ extended: true }));

// Routes untuk API Quiz

app.use('/api/quiz', quizRoutes);

// Routes untuk API aksara
app.use('/api/aksara', aksaraRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});
