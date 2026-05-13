const Produto = require('../models/Produto');

module.exports = {
    index: (req, res) => res.json(Produto.findAll()),
    store: (req, res) => res.status(201).json(Produto.create(req.body)),
    update: (req, res) => {
        const atualizado = Produto.update(req.params.id, req.body);
        return atualizado ? res.json(atualizado) : res.status(404).json({erro: "Não encontrado"});
    },
    delete: (req, res) => {
        Produto.delete(req.params.id);
        res.status(204).send();
    }
};