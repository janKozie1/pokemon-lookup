import React, {useState} from 'react'
import SearchBox from './SearchBox/SearchBox';
import PokemonShowcase from './PokemonShowcase/PokemonShowcase'

import * as S from './styledComponents'

let Main = () => {
    let [pokemon, setPokemon] = useState(null) 
    let [error, setError] = useState(null) 
    return (
        <S.Main>
            <SearchBox setPokemon={setPokemon} setError={setError} />
            {
                // pokemon && <PokemonShowcase pokemon={pokemon} />
                <PokemonShowcase />
            }
        </S.Main>
    )
}

export default Main;