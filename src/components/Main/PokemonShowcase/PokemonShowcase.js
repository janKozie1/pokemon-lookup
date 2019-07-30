import React from 'react'
import * as S from './styledComponents'
import Spinner from '../../Spinner/Spinner'
import {dummy} from './dummyPokemon'
let PokemonShowcase = ({pokemon,error}) => {
    //let pokemon = dummy;
    console.log(pokemon, error)
    return (
        <S.Pokemon>
            <Spinner size={6} radius={2}/>    
        </S.Pokemon>
        
    )
}
export default PokemonShowcase;