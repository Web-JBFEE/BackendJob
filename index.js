// index.js

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/user'); // Pastikan jalur ini benar


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Menggunakan rute pengguna
app.use('/api', userRoutes); // Prefix untuk semua rute pengguna

// Rute dasar untuk pengujian
app.get('/', (req, res) => {
    res.send('Welcome to the User API!');
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
