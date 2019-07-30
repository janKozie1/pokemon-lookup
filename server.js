let express = require('express');
let axios = require('axios');
let cors = require('cors')
let app = express();

app.use(cors({ origin: '*' }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/getPokemon', (req,res)=>{
    console.log(req.body.query)
    axios.get(`http://pokeapi.co/api/v2/pokemon/${req.body.query}`)
        .then(({data}) => {
            res.json({data})
        })
        .catch((error) => {
            if (error.response) {
                res.sendStatus(error.response.status)
            }else{
                res.sendStatus(500)
            }
        })
})


app.listen('8080',()=>{
    console.log('started at 8080')
})