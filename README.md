Markdown

# 🛒 API de Vendas - Arquitetura MVC

Uma API RESTful desenvolvida em Node.js para gestão de vendas, aplicando os conceitos de Arquitetura Orientada a Serviços (SOA) e o padrão MVC (Model-View-Controller). 

Este projeto foi desenvolvido como atividade prática para a disciplina de Arquitetura de Software do curso de Ciência da Computação da Universidade da Amazônia (UNAMA).

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework web para construção das rotas e servidor.
* **File System (fs)**: Módulo nativo do Node.js utilizado para persistência de dados em ficheiros `.json` (simulando uma base de dados).

## 🏗️ Arquitetura do Projeto (MVC)

O projeto está organizado segundo o padrão Model-View-Controller para garantir a separação de responsabilidades e facilitar a manutenção do código:

```text
📦 api-vendas
 ┣ 📂 src
 ┃ ┣ 📂 controllers   # Lógica de negócio e tratamento de requisições
 ┃ ┣ 📂 data          # Ficheiros JSON para persistência de dados
 ┃ ┣ 📂 models        # Lógica de acesso e manipulação dos dados
 ┃ ┗ 📂 routes        # Definição dos endpoints da API
 ┣ 📜 app.js          # Ponto de entrada e configuração do servidor Express
 ┗ 📜 package.json    # Dependências do projeto

⚙️ Funcionalidades Implementadas

O sistema possui as seguintes funcionalidades (operações CRUD) divididas por entidades:

    📦 Produtos: Listagem e criação de produtos no catálogo.

    👥 Clientes: Registo e consulta de clientes.

    🛒 Pedidos: Registo de pedidos, realizando a associação lógica entre o clienteId e o produtoId.

💻 Como executar o projeto localmente

    Clona este repositório para a tua máquina:
    Bash

    git clone [https://github.com/teu-usuario/api-vendas.git](https://github.com/teu-usuario/api-vendas.git)

    Acede à pasta do projeto:
    Bash

    cd api-vendas

    Instala as dependências necessárias:
    Bash

    npm install

    Inicia o servidor:
    Bash

    node app.js

O servidor estará a correr em http://localhost:3000.
🔗 Endpoints da API

A documentação base e o estado da API podem ser acedidos na rota raiz (GET /). Abaixo estão os endpoints principais:
Produtos

    GET /produtos - Retorna a lista de todos os produtos.

    POST /produtos - Cria um novo produto.

Clientes

    GET /clientes - Retorna a lista de todos os clientes.

    POST /clientes - Cria um novo cliente.

Pedidos

    GET /pedidos - Retorna todos os pedidos realizados.

    POST /pedidos - Regista um novo pedido associando um cliente e um produto.
    (Exemplo de Body JSON para POST):
    JSON

    {
      "clienteId": 1715642345678,
      "produtoId": 1715642987654,
      "quantidade": 2,
      "observacao": "Entrega urgente"
    }
