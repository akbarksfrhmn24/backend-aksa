const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController'); // Pastikan ini benar

/**
 * @swagger
 * /api/quiz/random-questions:
 *   get:
 *     summary: Retrieve random quiz questions
 *     description: Get a specified number of random quiz questions.
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 5
 *         description: Number of random questions to retrieve
 *     responses:
 *       200:
 *         description: A list of random quiz questions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     questions:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                           question_text:
 *                             type: string
 *                           options:
 *                             type: object
 *                             properties:
 *                               a:
 *                                 type: string
 *                               b:
 *                                 type: string
 *                               c:
 *                                 type: string
 *                               d:
 *                                 type: string
 *                           images:
 *                             type: object
 *                             properties:
 *                               question:
 *                                 type: string
 *                               option_a:
 *                                 type: string
 *                               option_b:
 *                                 type: string
 *                               option_c:
 *                                 type: string
 *                               option_d:
 *                                 type: string
 *                           correct_answer:
 *                             type: string
 */



// Endpoint untuk mendapatkan soal acak
router.get('/random-questions', quizController.getRandomQuestions);

/**
 * @swagger
 * /api/quiz/questions:
 *   post:
 *     summary: Create a new quiz question
 *     description: Add a new question with options and correct answer to the quiz database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question_text:
 *                 type: string
 *               option_a:
 *                 type: string
 *               option_b:
 *                 type: string
 *               option_c:
 *                 type: string
 *               option_d:
 *                 type: string
 *               correct_answer:
 *                 type: string
 *               question_image:
 *                 type: string
 *               option_image_a:
 *                 type: string
 *               option_image_b:
 *                 type: string
 *               option_image_c:
 *                 type: string
 *               option_image_d:
 *                 type: string
 *     responses:
 *       201:
 *         description: Question added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *                 id:
 *                   type: integer
 */

// Endpoint untuk menambahkan soal baru
router.post('/questions', quizController.createQuestion);

module.exports = router;
