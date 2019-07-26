import React from 'react'

import * as S from './styledComponents'
import Spinner from '../../Spinner/Spinner'
import {dummy} from './dummyPokemon'
let PokemonShowcase = () => {
    let pokemon = dummy;
    console.log(pokemon)
    return (
        <S.Pokemon>
            <Spinner size={6} radius={2}/>    
        </S.Pokemon>
        
    )
}
export default PokemonShowcase;