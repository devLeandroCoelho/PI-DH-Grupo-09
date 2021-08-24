module.exports = {
	login: (req, res) => {
		res.render('login', { title: 'Desapega - Login' });
	},
    cadastro: (req, res) => {
		res.render('cadastro', { title: 'Desapega - Cadastro' });
	},
    perfil: (req, res) => {
		res.render('perfil', { title: 'Desapega - Perfil' });
	},
	carrinho: (req, res) => {
		res.render('carrinho', { title: 'Desapega - Carrinho' });
	}
}