// server.js

const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./connection'); // Mengimpor koneksi sequelize
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Gunakan SECRET_KEY seperti ini
console.log(process.env.SECRET_KEY); // Ini akan menampilkan kunci rahasia Anda
