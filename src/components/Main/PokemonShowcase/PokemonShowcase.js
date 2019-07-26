import React from 'react'

import * as S from './styledComponents'
import {dummy} from './dummyPokemon'
let PokemonShowcase = () => {
    let pokemon = dummy;
    console.log(pokemon)
    return (
        <S.Pokemon>
            <S.Loader />
            
        </S.Pokemon>
        
    )
}
export default PokemonShowcase;