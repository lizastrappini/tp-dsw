const express = require('express');
const {PORT} =  require('./config.js');
const app = express()
const cookieParser = require('cookie-parser');


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.use(express.json())
app.use(cookieParser());
app.use('/', require('./routes/usuarioRoutes.js'))
app.use('/', require('./routes/zonaRoutes.js'))
app.use('/', require('./routes/reservaRoutes.js'))

app.listen(PORT)
console.log(`sever runing in port ${PORT}`)