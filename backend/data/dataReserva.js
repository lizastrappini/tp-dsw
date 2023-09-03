const {pool} = require('../db.js');
const {Reserva} = require('../entities/Reserva.js');
const {Usuario} = require('../entities/Usuario.js');

//CRUD RESERVA

    async function getAll(){
        try{
        const conn = await pool.getConnection();
        const [rows] = await conn.query('SELECT * FROM reserva');
        conn.release();
        return rows;
        }catch(err){
            throw err;
        }
    }

    //para crear una reserva
    async function newReserva(reserva){
        try{
        const conn = await pool.getConnection();
        //el nro se autogenera en la bd
        const [rows] = await conn.query('INSERT INTO reserva (fecha_hora_turno, fecha_hora_reserva, estado, id_usuario, nro_cancha) VALUES (?, ?, ?, ?, ?)', [reserva.fecha_hora_turno, reserva.fecha_hora_reserva, reserva.estado, reserva.id_usuario, reserva.nro_cancha]);
        conn.release();
        return rows;
        }catch(err){
            throw err;
        }
    }

    //para obtener una reserva por dni de usuario
    async function getReservaByDni(user){
        try{
        const conn = await pool.getConnection();
        const [rows] = await conn.query('SELECT r.* FROM reserva r inner join usuario u on r.id_usuario=u.id_usuario WHERE u.dni=?', [user.dni]);
        conn.release();
        return rows;
        }catch(err){
            throw err;
        }
    }

    async function getTurnoReservado(reserva){
        try{
        const conn = await pool.getConnection();
        const [rows] = await conn.query('SELECT * FROM reserva WHERE fecha_hora_turno=?', [reserva.fecha_hora_turno]);
        conn.release();
        if(rows.length>0){
            return true;
        } else{
            return false;
        }
        }catch(err){
            throw err;
        }
}

    module.exports= {
        getAll,
        newReserva,
        getReservaByDni,
        getTurnoReservado

    }