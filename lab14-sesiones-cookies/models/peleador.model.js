const peleadores = [
    {
        nombre: "Jon Jones",
        imagen: "/images/Jones.jpg",
        division: "Heavyweight"
    },
    {
        nombre: "Islam Makhachev",
        imagen: "/images/Islam.jpg",
        division: "Lightweight"
    }
];

module.exports = class Peleador {

    constructor(mi_nombre, mi_imagen, mi_division) {
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
        this.division = mi_division;
    }

    save() {
        peleadores.push(this);
    }

    static fetchAll() {
        return peleadores;
    }

}