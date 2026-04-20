const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const isAuth = require('../middleware/is-auth');

router.get('/portal', isAuth, authController.getPortal);
router.get('/subir', isAuth, authController.getSubir);
router.post('/subir', isAuth, authController.postSubir);
router.post('/ajax/archivo-info', isAuth, authController.postArchivoInfoAjax);
router.get('/servicio-web', isAuth, authController.getServicioWeb);

module.exports = router;