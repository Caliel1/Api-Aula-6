const fs = require('fs');
const path = require('path');
const caminho = path.join(__dirname, '..', 'data', 'pedidos.json');

const Pedido = {
    findAll: () => {
        try {
            return JSON.parse(fs.readFileSync(caminho, 'utf-8'));
        } catch (erro) {
            return []; 
        }
    },
    create: (dados) => {
        const pedidos = Pedido.findAll();
        // Adicionamos a data atual automaticamente ao pedido
        const novo = { id: Date.now(), data: new Date().toISOString(), ...dados };
        pedidos.push(novo);
        fs.writeFileSync(caminho, JSON.stringify(pedidos, null, 2));
        return novo;
    }
};
module.exports = Pedido;