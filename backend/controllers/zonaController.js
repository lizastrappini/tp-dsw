const {Zona} = require('../entities/Zona.js');
const {getAll, newZona, updateZona, deleteZona} = require('../data/dataZona.js');


const listarZonasView = (req, res) => {
    getAll().then((zonas) => {
        res.send(zonas)
    }).catch((err) => {
        console.log("error: ", err)
        res.send("no se pudo cargar la zona")
    })
}

const agregarZonaView = (req, res) => {
    res.render('agregarZona')
}

const agregarZona = (req, res) => {
    const zona = new Zona(null, req.body.descripcion)
    newZona(zona).then(() => {
        res.send("zona agregada")
    }).catch((err) => {
        console.log("error: ", err)
        res.send("no se pudo agregar la zona")
    })
}

module.exports= {
    listarZonasView,
    agregarZonaView,
    agregarZona
}