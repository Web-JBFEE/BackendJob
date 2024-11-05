// helper/token.js

const jwt = require('jsonwebtoken');
require('dotenv').config();

class JwtCustomClaims {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}

const generateAccessToken = (claims) => {
    const expirationTime = '1h'; // Token akan berlaku selama 1 jam
    return jwt.sign(claims, process.env.SECRET_KEY, { expiresIn: expirationTime });
};

const JWTProtection = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Mengambil token dari header Authorization

    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Forbidden' });
        }

        req.user = user; // Simpan informasi pengguna di objek permintaan
        next(); // Lanjutkan ke middleware berikutnya
    });
};

module.exports = { JwtCustomClaims, generateAccessToken, JWTProtection };
