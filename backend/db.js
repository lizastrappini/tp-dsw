const {createPool} = require('mysql2/promise');

 const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'tpdesarrollo'
})

module.exports= {
    pool
}

