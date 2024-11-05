// src/routes/routes.js

const express = require('express');
const UserController = require('../controllers/user_controller'); // Pastikan jalur ini benar
const { JWTProtection } = require('../helper/token'); // Mengimpor JWTProtection

const router = express.Router();

// Rute untuk pendaftaran pengguna
router.post('/register', (req, res) => UserController.register(req, res));
router.post('/login', (req, res) => UserController.login(req, res));

module.exports = router; // Mengekspor router
