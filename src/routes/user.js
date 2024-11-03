// src/routes/routes.js

const express = require('express');
const UserController = require('../controllers/user_controller'); // Pastikan jalur ini benar

const router = express.Router();

// Rute untuk pendaftaran pengguna
router.post('/register', (req, res) => UserController.register(req, res));

module.exports = router; // Mengekspor router
