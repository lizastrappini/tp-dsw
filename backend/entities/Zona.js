class Zona {
    cod_zona;
    descripcion;

    constructor(cod_zona, descripcion) {
        this.cod_zona = cod_zona;
        this.descripcion = descripcion;
    }

    get cod_zona() {
        return this._cod_zona;
    }

    set cod_zona(value) {
        this._cod_zona = value;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
    }
}
module.exports={
    Zona
}