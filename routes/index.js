var express = require('express');
var router = express.Router();

const SiteController = require('../controllers/SiteController');

/* GET home page. */
router.get('/', SiteController.index);
router.get('/produto', SiteController.produto);
router.get('/cadastroproduto', SiteController.cadastroproduto);
router.get('/login', SiteController.login);
router.get('/cadastro', SiteController.cadastro);
router.get('/perfil', SiteController.perfil);
module.exports = router;
