const peleadores = [
    {
        nombre: "Jon Jones",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Jon_Jones_2023.png",
        division: "Heavyweight"
    },
    {
        nombre: "Islam Makhachev",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/0/06/Islam_Makhachev_2023.png",
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