class RegisterRequest {
    constructor(name, firstName, lastName, role, email, password = null) {
        this.name = name;                   // Nama lengkap
        this.email = email;                         // Alamat email
        this.password = password;                   // Kata sandi
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
}

module.exports = RegisterRequest; // Mengekspor kelas
