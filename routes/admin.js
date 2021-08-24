var express = require('express');
var router = express.Router();

const AdmController = require('../controllers/AdmController');

router.get('/login', AdmController.login);
router.get('/cadastro', AdmController.cadastro);
router.get('/perfil', AdmController.perfil);
router.get('/', AdmController.perfil);
module.exports = router;