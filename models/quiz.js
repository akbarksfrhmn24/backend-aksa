const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Quiz = sequelize.define('Quiz', {
    question_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    option_a: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    option_b: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    option_c: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    option_d: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correct_answer: {
        type: DataTypes.ENUM('a', 'b', 'c', 'd'),
        allowNull: false,
    },
    question_image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    option_image_a: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    option_image_b: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    option_image_c: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    option_image_d: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'questions', // Nama tabel di database
    timestamps: false,      // Nonaktifkan timestamps default
});

module.exports = Quiz;
