const db = require('../util/database');

module.exports = class User {
    constructor(nombre, email, password) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    save() {
        return db.execute(
            'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
            [this.nombre, this.email, this.password]
        );
    }

    static findByEmail(email) {
        return db.execute(
            'SELECT * FROM usuarios WHERE email = ?',
            [email]
        );
    }
};