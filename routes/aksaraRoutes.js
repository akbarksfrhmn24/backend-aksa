const express = require('express');
const router = express.Router();
const aksaraController = require('../controllers/aksaraController');

/**
 * GET /api/aksara
 * Mendapatkan data aksara berdasarkan tipe (Swara, Ngalagena, Angka, Rarangken)
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Aksara:
 *       type: object
 *       required:
 *         - aksara
 *         - arti
 *         - tipe
 *       properties:
 *         id:
 *           type: integer
 *           description: ID unik untuk aksara
 *         aksara:
 *           type: string
 *           description: Karakter Aksara Sunda
 *         arti:
 *           type: string
 *           description: Arti dari karakter aksara
 *         tipe:
 *           type: string
 *           enum: [Swara, Ngalagena, Angka, Rarangken]
 *           description: Tipe aksara
 *         image_path:
 *           type: string
 *           description: Path gambar statis untuk aksara
 *       example:
 *         id: 1
 *         aksara: "ᮃ"
 *         arti: "A"
 *         tipe: "Swara"
 *         image_path: "/public/images/Swara/a.jpg"
 */

/**
 * @swagger
 * /api/aksara:
 *   get:
 *     summary: Mendapatkan daftar aksara berdasarkan tipe
 *     tags: [Aksara]
 *     parameters:
 *       - in: query
 *         name: tipe
 *         schema:
 *           type: string
 *           enum: [Swara, Ngalagena, Angka, Rarangken]
 *         description: Filter aksara berdasarkan tipe
 *     responses:
 *       200:
 *         description: Daftar aksara
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Aksara'
 *       500:
 *         description: Terjadi kesalahan saat mendapatkan data aksara
 */

router.get('/', aksaraController.getAksaraByType);

/**
 * @swagger
 * /api/aksara:
 *   post:
 *     summary: Menambahkan data aksara baru
 *     tags: [Aksara]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aksara'
 *     responses:
 *       201:
 *         description: Aksara berhasil ditambahkan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Aksara'
 *       500:
 *         description: Terjadi kesalahan saat menambahkan aksara
 */

/**
 * POST /api/aksara
 * Menambahkan data aksara baru dengan path gambar statis
 */
router.post('/', aksaraController.createAksara);

module.exports = router;
