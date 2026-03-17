const db = require('../util/database');

module.exports = class Peleador {

    constructor(mi_nombre, mi_imagen, mi_division) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.division = mi_division;
    }

    save() {
        return db.execute(
            'INSERT INTO peleadores (nombre, imagen, division) VALUES (?, ?, ?)',
            [this.nombre, this.imagen, this.division]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM peleadores');
    }

    static fetchOne(id) {
        return db.execute(
            'SELECT * FROM peleadores WHERE id = ?',
            [id]
        );
    }

    static update(id, nombre, imagen, division) {
        return db.execute(
            'UPDATE peleadores SET nombre=?, imagen=?, division=? WHERE id=?',
            [nombre, imagen, division, id]
        );
    }

}