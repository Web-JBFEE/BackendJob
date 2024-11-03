const { User } = require('../models'); // Impor dari index.js, pastikan jalurnya benar
const bcrypt = require('bcrypt');

class UserRepositoryImpl {
    async register(userData) {
        if (!userData.name || !userData.email || !userData.password) {
            throw new Error('Name, email, and password are required');
        }

        const existingUser = await this.findByEmail(userData.email);
        if (existingUser) {
            throw new Error('Email already exists');
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);
        try {
            const newUser = {
                name: userData.name,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                role: userData.role,
                password: hashedPassword,
            };

            const savedUser = await User.create(newUser);
            return savedUser;
        } catch (error) {
            console.error('Error saving user:', error);
            throw new Error('Failed to register user');
        }
    }

    async findByEmail(email) {
        console.log('User model:', User); // Untuk debugging
        return await User.findOne({ where: { email } });
    }
}

module.exports = new UserRepositoryImpl();
