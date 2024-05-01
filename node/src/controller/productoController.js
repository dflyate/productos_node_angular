const conexion = require('../config/conexion')

const controller = {}

controller.listar = (req,res) => {
    let sql = 'SELECT * FROM PRODUCTO';
    conexion.query(sql, (err, rows) => {
        if(err){
            throw err;
        }else{
            res.json(rows)
        }
    })
}; 

controller.obtenerPorId = (req,res) => {
    const {id} = req.params;
    let sql = 'SELECT * FROM PRODUCTO WHERE idproducto = ?';
    conexion.query(sql,[id], (err, rows) => {
        if(err){
            throw err;
        }else{
            res.json(rows)
        }
    })
};

controller.insertar = (req,res) => {
    const{nombre,descripcion,precio,existencias,foto,fecharegistro} = req.body;
    let sql = `insert into producto(nombre,descripcion,precio,existencias,foto,fecharegistro) values('${nombre}','${descripcion}','${precio}','${existencias}','${foto}','${fecharegistro}')`
    conexion.query(sql, (err, rows) => {
        if(err){
            throw err;
        }else{
            res.json({status: 'producto agregado'})
        }
    })
}

controller.eliminar = (req,res) => {
    const {id} = req.params;
    let sql = `delete from producto where idproducto = '${id}'`;
    conexion.query(sql, (err, rows) => {
        if(err){
            throw err;
        }else{
            res.json({status: 'producto eliminado'})
        }
    })
}

controller.editar = (req,res) => {
    const {id} = req.params;
    const{nombre,descripcion,precio,existencias,foto,fecharegistro} = req.body;
    let sql = `update producto set 
            nombre = '${nombre}',
            descripcion = '${descripcion}',
            precio = '${precio}',
            existencias = '${existencias}',
            foto = '${foto}',
            fecharegistro = '${fecharegistro}'
            where idproducto = ${id}
    `;
    conexion.query(sql, (err, rows) => {
        if(err){
            throw err;
        }else{
            res.json({status: 'producto modificado'})
        }
    })
}




module.exports = controller;