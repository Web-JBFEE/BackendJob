// Dalam file yang sama (misalnya, user.js)
class LoginRequest {
    constructor(email, password = null){
        this.email = email;  
        this.password = password;
    }
}

class RegisterRequest {
    constructor(name, email, password, firstName, lastName, role){
        this.name = name;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
}

// Ekspor kedua kelas
module.exports = {
    LoginRequest,
    RegisterRequest
};
