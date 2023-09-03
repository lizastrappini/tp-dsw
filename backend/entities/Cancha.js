class Cancha{
    nro_cancha;
    descripcion;
    costo_por_turno;
    calle;
    nro_calle;
    horario_apertura;
    horario_cierre;
    cod_tipo;
    cod_zona;
constructor(nro_cancha, descripcion, costo_por_turno, calle, nro_calle, horario_apertura, horario_cierre, cod_tipo, cod_zona){
    this._nro_cancha = nro_cancha;
    this._descripcion = descripcion;
    this._costo_por_turno = costo_por_turno;
    this._calle = calle;
    this._nro_calle = nro_calle;
    this._horario_apertura = horario_apertura;
    this._horario_cierre = horario_cierre;
    this._cod_tipo = cod_tipo;
    this._cod_zona = cod_zona;

    }


    get nro_cancha() {
        return this._nro_cancha;
    }

    set nro_cancha(value) {
        this._nro_cancha = value;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
    }

    get costo_por_turno() {
        return this._costo_por_turno;
    }

    set costo_por_turno(value) {
        this._costo_por_turno = value;
    }

    get calle() {
        return this._calle;
    }

    set calle(value) {
        this._calle = value;
    }

    get nro_calle() {
        return this._nro_calle;
    }

    set nro_calle(value) {
        this._nro_calle = value;
    }

    get horario_apertura() {
        return this._horario_apertura;
    }

    set horario_apertura(value) {
        this._horario_apertura = value;
    }

    get horario_cierre() {
        return this._horario_cierre;
    }

    set horario_cierre(value) {
        this._horario_cierre = value;
    }

    get cod_tipo() {
        return this._cod_tipo;
    }

    set cod_tipo(value) {
        this._cod_tipo = value;
    }

    get cod_zona() {
        return this._cod_zona;
    }

    set cod_zona(value) {
        this._cod_zona = value;
    }
}

module.exports = {
    Cancha
};