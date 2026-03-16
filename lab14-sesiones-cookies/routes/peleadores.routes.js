const express = require('express');
const router = express.Router();

const peleadoresController = require('../controllers/peleadores.controller');

router.get('/new', peleadoresController.get_new);
router.post('/new', peleadoresController.post_new);

router.use('/', peleadoresController.get_list);

module.exports = router;