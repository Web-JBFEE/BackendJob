const UserRepository = require('../repository/user_impl'); // Mengimpor implementasi repositori
const RegisterRequest = require('../db/web/user'); // Mengimpor kelas RegisterRequest
const { generateAccessToken } = require('../helper/token'); // Mengimpor fungsi dari helper

class UserService {
    async register(userData) {
        // Mencetak data pengguna yang diterima untuk debug
        console.log('Received user data in UserService:', userData);

        // Buat instance dari RegisterRequest untuk validasi data
        const registerRequest = new RegisterRequest(
            userData.name,
            userData.firstName,
            userData.lastName,
            userData.role,
            userData.email,
            userData.password,
        );

        // Panggil metode register di repositori
        try {
            const newUser = await UserRepository.register(registerRequest);
            console.log('New user created successfully:', newUser);

            // Buat klaim untuk token
            const claims = {
                id: newUser.id, // ID pengguna yang baru dibuat
                name: newUser.name, // Nama pengguna
                role: newUser.role // Peran pengguna
            };

            // Generate JWT token menggunakan helper
            const token = generateAccessToken(claims);

            return {
                token: token // Mengembalikan token bersama dengan data pengguna
            };
        } catch (error) {
            console.error('Error in UserService register method:', error.message);
            throw new Error(error.message);
        }
    }

    async login(email, password) {
        console.log('Received login request for email:', email);

        try {
            const user = await UserRepository.login(email, password);
            console.log('User found for login:', user);

            // Buat klaim untuk token
            const claims = {
                id: user.id, // ID pengguna yang ditemukan
                name: user.name, // Nama pengguna
                role: user.role // Peran pengguna
            };

            // Generate JWT token menggunakan helper
            const token = generateAccessToken(claims);

            return {
                token: token // Mengembalikan token bersama dengan data pengguna
            };
        } catch (error) {
            console.error('Error in UserService login method:', error.message);
            throw new Error(error.message);
        }
    }
}

module.exports = new UserService();
