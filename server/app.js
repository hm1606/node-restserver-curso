require('./config/config')
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
//parseamos aplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse aplication/json
app.use(bodyParser.json());

app.get('/usuario', (req, res) => res.json({msg:'get Usuario!'}));

app.post('/usuario', (req, res) => {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({msg:'El nombre es obligatorio'});
    } else {
        res.status(200).json({
            msg:'Successfull',
            persona: body
        })
    }

    res.json({persona:body})
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({msg:'put Usuario!', id})
});

app.delete('/usuario', (req, res) => res.json({msg:'delete Usuario!'}));


app.listen(process.env.PORT, () => console.log(`Escduchando en el puerto ${process.env.PORT}`));