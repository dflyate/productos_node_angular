const router = require('express').Router();
const productoController = require('../controller/productoController')

// rutas
router.get('/', productoController.listar);

router.get('/:id', productoController.obtenerPorId);

router.post('/', productoController.insertar)

router.delete('/:id', productoController.eliminar);

router.put('/:id', productoController.editar)




module.exports = router;