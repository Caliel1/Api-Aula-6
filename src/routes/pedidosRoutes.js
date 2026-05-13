const { Router } = require('express');
const PedidoController = require('../controllers/PedidoController');
const router = Router();

router.get('/', PedidoController.index);
router.post('/', PedidoController.store);

module.exports = router;