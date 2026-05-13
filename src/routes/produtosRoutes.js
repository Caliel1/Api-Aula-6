const { Router } = require('express');
const ProdutoController = require('../controllers/ProdutoController');
const router = Router();

router.get('/', ProdutoController.index);
router.post('/', ProdutoController.store);
router.put('/:id', ProdutoController.update);
router.delete('/:id', ProdutoController.delete);

module.exports = router;