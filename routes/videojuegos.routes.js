const express = require('express');
const router = express.Router();

const videojuegosController = require('../controllers/videojuegos.controller');

router.get('/new', videojuegosController.get_new);
router.get('/nuevo', videojuegosController.get_new);
router.get('/add', videojuegosController.get_new);
router.post('/new', videojuegosController.post_new);
router.post('/nuevo', videojuegosController.post_new);
router.post('/add', videojuegosController.get_new);
router.get('/old', videojuegosController.get_old);
router.get('/old_labs', videojuegosController.get_old);
router.use(videojuegosController.get_list);

module.exports = router;