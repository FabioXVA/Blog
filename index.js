const express = require('express');
const bodyParcer = require('body-parser');

const app = express();


app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({ extended: false }))

app.get('/', (req, res) =>{
	res.send('funcionando...');
})

const rotas = require('./rotas');
app.use('/api', rotas);
app.use(express.static(__dirname + 'client'));


const port = 3001;

app.listen(port, () =>{
	console.log('O servidor está rodando em http://localhost:', port );
});



