const { Sequelize } = require('sequelize'); // Import Sequelize
const Quiz = require('../models/quiz');

// Mendapatkan soal-soal secara acak
const getRandomQuestions = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 5;
        const questions = await Quiz.findAll({
            order: Sequelize.fn('RAND'),
            limit: limit,
        });

        res.status(200).json({
            status: 'success',
            message: 'Random questions retrieved successfully',
            data: {
                total: questions.length,
                questions: questions.map(question => ({
                    id: question.id,
                    question_text: question.question_text,
                    options: {
                        a: question.option_a,
                        b: question.option_b,
                        c: question.option_c,
                        d: question.option_d,
                    },
                    images: {
                        question: `https://optimal-composed-ape.ngrok-free.app${question.question_image}`, // URL lengkap untuk akses gambar
                        option_a: `https://optimal-composed-ape.ngrok-free.app${question.option_image_a}`,
                        option_b: `https://optimal-composed-ape.ngrok-free.app${question.option_image_b}`,
                        option_c: `https://optimal-composed-ape.ngrok-free.app${question.option_image_c}`,
                        option_d: `https://optimal-composed-ape.ngrok-free.app${question.option_image_d}`,
                    },
                    correct_answer: question.correct_answer, // Hanya untuk keperluan backend
                }))
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to retrieve random questions',
            error: err.message,
        });
    }
};

// Fungsi untuk menambahkan soal baru
const createQuestion = async (req, res) => {
    try {
        const newQuestion = await Quiz.create(req.body);
        res.status(201).json({
            status: 'success',
            message: 'Question added successfully',
            id: newQuestion.id,
        });
    } catch (err) {
        res.status(500).json({ status: 'error', message: 'Failed to add question', error: err.message });
    }
};

// Pastikan kedua fungsi ini diekspor
module.exports = {
    getRandomQuestions,
    createQuestion,
};
