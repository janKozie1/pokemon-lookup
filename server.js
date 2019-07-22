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
        .then(({ data }) => {
            res.json(data)
        })
        .catch((error) => {
            // Error 😨
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                res.json({data:error.response.data,status:error.response.status})
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
        })
})

app.listen('8080',()=>{
    console.log('started at 8080')
})