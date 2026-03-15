const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'laboratorios 1-11', 'index.html'));
});

router.get('/about', (req, res) => { res.send('Victor - referencia a profe eduardo por sus labs'); });

module.exports = router;