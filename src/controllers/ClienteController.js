const Cliente = require('../models/Cliente');

module.exports = {
    index: (req, res) => res.json(Cliente.findAll()),
    store: (req, res) => res.status(201).json(Cliente.create(req.body))
};