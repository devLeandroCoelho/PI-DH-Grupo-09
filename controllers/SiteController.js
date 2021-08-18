const produtos = require('../databases/produtos.json');
const fs = require("fs");
const path = require('path');


module.exports = {
	index: (req, res) => {
		res.render('index', { title: 'Desapega - Home' });
	},
    produto: (req, res) => {
		res.render('produto', { title: 'Desapega - Produto' });
	},
    cadastroproduto: (req, res) => {
		res.render('cadastroproduto', { title: 'Desapega - Cadastro Produto' });
	},
    login: (req, res) => {
		res.render('login', { title: 'Desapega - Login' });
	},
    cadastro: (req, res) => {
		res.render('cadastro', { title: 'Desapega - Cadastro' });
	},
    perfil: (req, res) => {
		res.render('perfil', { title: 'Desapega - Perfil' });
	},
	buscar: (req, res) => {
		res.render('buscar', { title: 'Desapega - Buscar' , id: req.params.id});
	}


}