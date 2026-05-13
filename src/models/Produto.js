const fs = require('fs');
const path = require('path');
const caminho = path.join(__dirname, '..', 'data', 'produtos.json');

const Produto = {
    findAll: () => JSON.parse(fs.readFileSync(caminho, 'utf-8')),
    create: (dados) => {
        const produtos = Produto.findAll();
        const novo = { id: Date.now(), ...dados };
        produtos.push(novo);
        fs.writeFileSync(caminho, JSON.stringify(produtos, null, 2));
        return novo;
    },
    update: (id, dados) => {
        let produtos = Produto.findAll();
        const index = produtos.findIndex(p => p.id == id);
        if (index === -1) return null;
        produtos[index] = { ...produtos[index], ...dados };
        fs.writeFileSync(caminho, JSON.stringify(produtos, null, 2));
        return produtos[index];
    },
    delete: (id) => {
        const produtos = Produto.findAll();
        const filtrados = produtos.filter(p => p.id != id);
        fs.writeFileSync(caminho, JSON.stringify(filtrados, null, 2));
        return true;
    }
};
module.exports = Produto;