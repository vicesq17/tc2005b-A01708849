const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'laboratorios 1-11', 'index.html'));
});

router.get('/about', (req, res) => { 
    res.send('Victor - referencia a profe eduardo por sus labs'); 
});

router.get('/lab12', (req, res) => {
    res.render('index', {
        motor: 'EJS',
        framework: 'Express',
        tecnologias: ['Node.js','Express','EJS','Tailwind']
    });
});

module.exports = router;