// src/service/user_service.js

const UserRepository = require('../repository/user_impl'); // Mengimpor implementasi repositori
const RegisterRequest = require('../db/web/user'); // Mengimpor kelas RegisterRequest

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
            return newUser;
        } catch (error) {
            console.error('Error in UserService register method:', error.message);
            throw new Error(error.message);
        }
    }
}

module.exports = new UserService();
