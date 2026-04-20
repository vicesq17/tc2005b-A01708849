const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const isAuth = require('../middleware/is-auth');

router.get('/portal', isAuth, authController.getPortal);

module.exports = router;