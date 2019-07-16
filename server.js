let express = require('express');
let axios = require('axios');
let cors = require('cors')
let app = express();

app.use(cors({ origin: '*' }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/getPokemon', (req,res)=>{
    axios.get(`http://pokeapi.co/api/v2/pokemon/${req.body.query}`)
        .then(({ data }) => {
            res.json(data)
        })
        .catch(error => {
            res.json({err:error.statusText})
            console.log(error.statusText)
            //console.log(error);
        });
})

app.listen('8080',()=>{
    console.log('started at 8080')
})