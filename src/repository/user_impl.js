const { User } = require('../models'); // Pastikan jalurnya benar
const bcrypt = require('bcrypt');

class UserRepositoryImpl {
    async register(userData) {
        if (!userData.name || !userData.email || !userData.password) {
            throw new Error('Name, email, and password are required');
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);

        // Mempersiapkan data user baru untuk disimpan
        const newUser = {
            name: userData.name,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            role: userData.role,
            password: hashedPassword,
        };

        try {
            console.log('Creating new user in the database...');
            const savedUser = await User.create(newUser); // Menyimpan user baru
            console.log('User successfully created:', savedUser);
            return savedUser;
        } catch (error) {
            console.error('Detailed error while saving user:', error);
            throw new Error('Failed to register user');
        }
    }
}

module.exports = new UserRepositoryImpl();
