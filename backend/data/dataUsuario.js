const {pool} = require('../db.js');
const {Usuario} = require('../entities/Usuario.js');

//CRUD USUARIO - no hay delete, ver si es necesario borrar un usuario

    async function getAll(){
        const conn = await pool.getConnection();
        const [rows] = await conn.query('SELECT * FROM usuario');
        conn.release();
        return rows;
    }

    //para crear un usuario
    async function newUser(usuario){
        try{
        const conn = await pool.getConnection();
        //el rol y el id se autogeneran en la bd
        const [rows] = await conn.query('INSERT INTO usuario (dni, nombre, apellido, email, password, telefono) VALUES (?, ?, ?, ?, ?, ?)', [usuario.dni, usuario.nombre, usuario.apellido, usuario.email, usuario.password, usuario.telefono]);
        conn.release();
        return rows;
        }catch(err){
            throw err;
        }
    }

    //para verificar que el dni o el mail no existan en la bd
    async function getRegistrado(usuario){
        try{
            const conn = await pool.getConnection();
            const [rows] = await conn.query('SELECT id_usuario FROM usuario WHERE dni= ? or email=?', [usuario.dni, usuario.email]);
            conn.release();
            if( rows.length > 0){
                return true;
            } else {
                return false;
            }
        }catch (err){
            throw err;
        }
    }

    //para obtener un usuario por id
    async function getUserByPass(usuario){
        try {
            let user = new Usuario();
            const conn = await pool.getConnection();
            const [rows] = await conn.query('SELECT id_usuario, nombre, apellido, email,dni,rol, telefono FROM usuario WHERE email= ? and password=?', [usuario.email, usuario.password]);
            console.log(rows)
            if (rows.length > 0) {
                user.id_usuario = rows[0].id_usuario;
                user.nombre = rows[0].nombre;
                user.apellido = rows[0].apellido;
                user.email = rows[0].email;
                user.dni = rows[0].dni;
                user.rol = rows[0].rol;
                user.telefono = rows[0].telefono;
                console.log(user)
                conn.release();
                return user;
            }
        } catch (err) {
            throw err;
        }
    }

    //para actualizar un usuario (ver que campos se van a poder actualizar)
    async function updateUser(usuario){
        const conn = await pool.getConnection();
        const [rows] = await conn.query('UPDATE usuario SET nombre=?, apellido=?, email=?, telefono=? WHERE dni=?', [usuario.nombre, usuario.apellido, usuario.email, usuario.telefono, usuario.dni]);
        conn.release();
        return rows;
    }

module.exports={
    getAll,
    newUser,
    getUserByPass,
    updateUser,
    getRegistrado
}