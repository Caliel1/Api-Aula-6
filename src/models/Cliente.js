const fs = require('fs');
const path = require('path');
const caminho = path.join(__dirname, '..', 'data', 'clientes.json');

const Cliente = {
    findAll: () => {
        try {
            return JSON.parse(fs.readFileSync(caminho, 'utf-8'));
        } catch (erro) {
            return []; // Retorna array vazio se o arquivo estiver vazio
        }
    },
    create: (dados) => {
        const clientes = Cliente.findAll();
        const novo = { id: Date.now(), ...dados };
        clientes.push(novo);
        fs.writeFileSync(caminho, JSON.stringify(clientes, null, 2));
        return novo;
    }
};
module.exports = Cliente;