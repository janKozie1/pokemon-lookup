import React, {useState} from 'react'
import SearchBox from './SearchBox/SearchBox';
import PokemonShowcase from './PokemonShowcase/PokemonShowcase'

import * as S from './styledComponents'

let Main = () => {
    let [pokemon, setPokemon] = useState(null) 
    return (
        <S.Main>
            <SearchBox />
            {
                pokemon && <PokemonShowcase pokemon={pokemon} />
            }
        </S.Main>
    )
}

export default Main;