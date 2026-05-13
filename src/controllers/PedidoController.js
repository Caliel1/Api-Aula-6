const Pedido = require('../models/Pedido');

module.exports = {
    index: (req, res) => res.json(Pedido.findAll()),
    store: (req, res) => res.status(201).json(Pedido.create(req.body))
};