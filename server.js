let express = require('express');
let fetch = require('node-fetch');
let cors = require('cors')
let app = express();

app.use(cors({ origin: '*' }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


let getResponseBody = async(res) => {
        if (res.status === 200) {
            return res.json ? await res.json() : await res.text()
        } else {
            throw res.status
        }
   
    
}

app.post('/getPokemon', async (req, serverRes) => {
    try {
        let pokemon =  await getResponseBody(await fetch(`http://pokeapi.co/api/v2/pokemon/${req.body.query}`))

        let species = await getResponseBody(await fetch(pokemon.species.url))
        let evolutions = await getResponseBody(await fetch(species.evolution_chain.url))
        console.log(evolutions)
        console.log(JSON.stringify(evolutions.chain,null,4))
        serverRes.json({data:pokemon})
    } catch (err) {
        console.log(err)
        serverRes.sendStatus(err)
    }

    //serverRes.json(pokemon)

})


app.listen('8080', () => {
    console.log('started at 8080')
})