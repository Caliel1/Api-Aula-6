const express = require('express');

const produtosRoutes = require('./src/routes/produtosRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const pedidosRoutes = require('./src/routes/pedidosRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensagem: "Bem-vindo à API de Vendas - Projeto UNAMA",
        desenvolvedor: "Caliel Souza",
        status: "Online",
        endpoints_disponiveis: [
            { rota: "/produtos", descricao: "Gestão do catálogo de produtos" },
            { rota: "/clientes", descricao: "Gestão de cadastro de clientes" },
            { rota: "/pedidos",  descricao: "Gestão de pedidos e vendas" }
        ]
    });
});


app.use('/produtos', produtosRoutes);
app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`==========================================`);
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`==========================================`);
});