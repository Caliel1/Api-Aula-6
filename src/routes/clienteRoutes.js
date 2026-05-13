const { Router } = require('express');
const ClienteController = require('../controllers/ClienteController');
const router = Router();

router.get('/', ClienteController.index);
router.post('/', ClienteController.store);

// A linha abaixo é a que resolve o seu erro no terminal:
module.exports = router;