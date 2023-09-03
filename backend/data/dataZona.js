const {pool} = require('../db.js');
const {Zona} = require('../entities/Zona.js');

//CRUD ZONA

    async function getAll(){
        try{
        const conn = await pool.getConnection();
        const [rows] = await conn.query('SELECT * FROM zona');
        conn.release();
        return rows;
        } catch{
            throw err;
        }
    }

    async function newZona(zona) {
        try {
            const conn = await pool.getConnection();
            const [rows] = await conn.query('INSERT INTO zona (descripcion) VALUES (?)', [zona.descripcion]);
            conn.release();
            return rows;
        } catch(err) {
            throw err;
        }
    }

    async function updateZona(zona) {
        try {
            const conn = await pool.getConnection();
            const [rows] = await conn.query('UPDATE zona SET nombre=?, descripcion=? WHERE id=?', [zona.nombre, zona.descripcion, zona.id]);
            conn.release();
            return rows;
        } catch (err){
            throw err;
        }
    }

    async function deleteZona(zona) {
        try {
            const conn = await pool.getConnection();
            const [rows] = await conn.query('DELETE FROM zona WHERE id=?', [zona.id]);
            conn.release();
            return rows;
        } catch {
            throw err;
        }
    }

module.exports= {
    getAll,
    newZona,
    updateZona,
    deleteZona

}