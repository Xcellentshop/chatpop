// API para receber respostas do chat
const express = require('express');
const router = express.Router();

// Middleware para permitir CORS
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST');
    next();
});

// Endpoint para receber respostas do chat
router.post('/responderChat', (req, res) => {
    try {
        // Obtém a URL base dinamicamente
        const protocol = req.protocol;
        const host = req.get('host');
        const baseUrl = `${protocol}://${host}`;
        
        // URLs disponíveis para a API
        const urls = {
            dynamic: `${baseUrl}/api/responderChat`,
            netlify: 'https://chatpop.netlify.app/api/responderChat'
        };
        
        // Processa a resposta recebida
        const chatResponse = req.body;
        
        // Aqui você pode adicionar a lógica para processar a resposta
        console.log('Resposta recebida:', chatResponse);
        console.log('URLs disponíveis:', urls);

        // Retorna sucesso com ambas as URLs
        res.status(200).json({
            success: true,
            message: 'Resposta recebida com sucesso',
            urls: urls
        });
    } catch (error) {
        console.error('Erro ao processar resposta:', error);
        res.status(500).json({
            success: false,
            message: 'Erro ao processar resposta',
            error: error.message
        });
    }
});

module.exports = router;
