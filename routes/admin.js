var express = require('express');
var router = express.Router();

const AdmController = require('../controllers/AdmController');

router.get('/admin/login', AdmController.login);
router.get('/admin/cadastro', AdmController.cadastro);
router.get('/admin/perfil', AdmController.perfil);
module.exports = router;