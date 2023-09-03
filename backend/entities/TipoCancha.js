class TipoCancha {
    constructor(cod_tipo, desc_tipo) {
        this.cod_tipo = cod_tipo;
        this.desc_tipo = desc_tipo;
    }

    get cod_tipo() {
        return this._cod_tipo;
    }

    set cod_tipo(value) {
        this._cod_tipo = value;
    }

    get desc_tipo() {
        return this._desc_tipo;
    }

    set desc_tipo(value) {
        this._desc_tipo = value;
    }
}

module.exports={
    TipoCancha
}