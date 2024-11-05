const { User } = require('../models'); 
const bcrypt = require('bcrypt');

class UserRepositoryImpl {
    async register(userData) {
        console.log('Validating input data...');
        if (!userData.name || !userData.email || !userData.password) {
            throw new Error('Name, email, and password are required');
        }

        console.log('Checking if user already exists...');
        const existingUser = await this.findByEmail(userData.email);
        if (existingUser) {
            console.log('User with this email already exists');
            throw new Error('Email already exists');
        }

        console.log('Hashing password...');
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        
        try {
            console.log('Creating new user in the database...');
            const newUser = {
                name: userData.name,
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
                role: userData.role,
                password: hashedPassword,
            };

            const savedUser = await User.create(newUser);
            console.log('User successfully created:', savedUser);
            return savedUser;
        } catch (error) {
            console.error('Error saving user:', error);
            throw new Error('Failed to register user');
        }
    }

    async findByEmail(email) {
        console.log('Looking up user by email:', email);
        return await User.findOne({ where: { email } });
    }
}

module.exports = new UserRepositoryImpl();
