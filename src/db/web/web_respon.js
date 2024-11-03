class WebResponse {
    constructor(code, status, message, data) {
        this.code = code;
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

function responseToClient(code, status, message, data) {
    return new WebResponse(code, status, message, data);
}


module.exports = responseToClient; // Mengekspor kelas
