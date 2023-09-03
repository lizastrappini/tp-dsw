class Reserva{
    nro_reserva;
    fecha_hora_turno;
    fecha_hora_reserva;
    estado;
    id_usuario;
    nro_cancha;

    constructor(nro_reserva, fecha_hora_turno, fecha_hora_reserva, estado, id_usuario, nro_cancha){
        this.nro_reserva = nro_reserva;
        this.fecha_hora_turno = fecha_hora_turno;
        this.fecha_hora_reserva = fecha_hora_reserva;
        this.estado = estado;
        this.id_usuario = id_usuario;
        this.nro_cancha = nro_cancha;
    }


    get nro_reserva() {
        return this._nro_reserva;
    }

    set nro_reserva(value) {
        this._nro_reserva = value;
    }

    get fecha_hora_turno() {
        return this._fecha_hora_turno;
    }

    set fecha_hora_turno(value) {
        this._fecha_hora_turno = value;
    }

    get estado() {
        return this._estado;
    }

    set estado(value) {
        this._estado = value;
    }

    get id_usuario() {
        return this._id_usuario;
    }

    set id_usuario(value) {
        this._id_usuario = value;
    }

    get nro_cancha() {
        return this._nro_cancha;
    }

    set nro_cancha(value) {
        this._nro_cancha = value;
    }
}

module.exports={
    Reserva
}