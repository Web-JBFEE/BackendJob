    const UserService = require('../service/service'); // Mengimpor UserService
    const LoginRequest = require('../db/web/user');
    const responseToClient = require('../db/web/web_respon'); // Mengimpor fungsi responseToClient

    class UserController {
        static async register(req, res) {
            try {
                const userData = req.body; // Mengambil data dari body
                const newUser = await UserService.register(userData); // Panggil metode dari service
                
                // Mengembalikan respons menggunakan WebResponse
                return res.status(200).json(responseToClient(200, true, "User registered successfully", newUser)); 
            } catch (error) {
                // Mengembalikan respons kesalahan menggunakan WebResponse
                return res.status(400).json(responseToClient(400, false, error.message, null)); 
            }
        }

        static async login(req, res) {
            try {
                const { email, password } = req.body; // Mengambil email dan password dari body
                const loginResponse = await UserService.login(email, password); // Panggil metode dari service dengan email dan password
                
                return res.status(200).json(responseToClient(200, true, "Login successful", loginResponse)); 
            } catch (error) {
                return res.status(400).json(responseToClient(400, false, error.message, null)); 
            }
        }
        
    }

    module.exports = UserController;
