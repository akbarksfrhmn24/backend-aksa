const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Aksara = sequelize.define('Aksara', {
    aksara: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    arti: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipe: {
        type: DataTypes.ENUM('Swara', 'Ngalagena', 'Angka', 'Rarangken'),
        allowNull: false,
    },
    image_path: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Aksara;
