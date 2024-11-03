const UserService = require('../service/service'); // Mengimpor UserService
const responseToClient = require('../db/web/web_respon'); // Mengimpor fungsi responseToClient

class UserController {
    static async register(req, res) {
        try {
            const userData = req.body; // Mengambil data dari body
            const newUser = await UserService.register(userData); // Panggil metode dari service
            
            // Mengembalikan respons menggunakan WebResponse
            return res.status(200).json(responseToClient(201, true, "User registered successfully", newUser)); 
        } catch (error) {
            // Mengembalikan respons kesalahan menggunakan WebResponse
            return res.status(400).json(responseToClient(400, false, error.message, null)); 
        }
    }
}

module.exports = UserController;
