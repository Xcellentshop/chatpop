const express = require('express');
const bodyParser = require('body-parser');
const chatResponseRouter = require('./api/chatResponse');

const app = express();

// Middleware para processar JSON
app.use(bodyParser.json());

// Usar as rotas da API
app.use('/api', chatResponseRouter);

// Porta do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
