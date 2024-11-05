// src/service/user_service.js

const UserRepository = require('../repository/user_impl'); // Mengimpor implementasi repositori
const RegisterRequest = require('../db/web/user'); // Mengimpor kelas RegisterRequest

class UserService {
    async register(userData) {
        // Buat instance dari RegisterRequest untuk validasi data
        console.log('Received user data in UserService:', userData);
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
            return await UserRepository.register(registerRequest);
            const newUser = await UserRepository.register(registerRequest);
        } catch (error) {
            console.error('Error in UserService register method:', error.message); // Debug log untuk error
            throw new Error(error.message); // Lempar kembali error untuk penanganan lebih lanjut
        }
    }
    

    // Implementasi metode lain yang diperlukan...
}

module.exports = new UserService(); // Mengekspor instance dari UserService
