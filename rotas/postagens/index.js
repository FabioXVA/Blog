const express = require('express');
const router = express.Router();

router.get('/postagens', (req, res) => {
	res.json({
		titulo: 'Meu primeiro post',
		conteudo: 'Conteudo do seu porst deve estar aqui.',
		autor: 'Fábio Xavier'
	});

})
module.exports = router;