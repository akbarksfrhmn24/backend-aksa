const { Sequelize } = require('sequelize'); // Import Sequelize
const Aksara = require('../models/aksara');


// Fungsi untuk menambahkan aksara baru dengan path gambar statis
const createAksara = async (req, res) => {
    try {
        const { aksara, arti, tipe, image_path } = req.body; // Ambil image_path dari request

        const newAksara = await Aksara.create({
            aksara,
            arti,
            tipe,
            image_path,
        });

        res.status(201).json({
            status: 'success',
            message: 'Aksara added successfully',
            data: newAksara,
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to add aksara',
            error: err.message,
        });
    }
};

// Fungsi untuk mendapatkan data aksara dengan URL gambar
const getAksaraByType = async (req, res) => {
    try {
        const { tipe } = req.query;
        const aksaraData = await Aksara.findAll({
            where: tipe ? { tipe } : {},
        });

        res.status(200).json({
            status: 'success',
            message: 'Aksara data retrieved successfully',
            data: aksaraData.map(item => ({
                id: item.id,
                aksara: item.aksara,
                arti: item.arti,
                tipe: item.tipe,
                image_url: item.image_path ? `https://optimal-composed-ape.ngrok-free.app${item.image_path}` : null,
            })),
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve aksara data',
            error: err.message,
        });
    }
};

module.exports = { createAksara, getAksaraByType };
