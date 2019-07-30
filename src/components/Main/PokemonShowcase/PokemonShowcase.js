import React from 'react'
import * as S from './styledComponents'
import Spinner from '../../Spinner/Spinner'
import {dummy} from './dummyPokemon'
let PokemonShowcase = ({pokemon,error,isLoading}) => {
    //let pokemon = dummy;
    console.log(pokemon, error,isLoading)
    return (
        <S.Pokemon pokemon={pokemon} error={error} isLoading={isLoading}>
            {isLoading && <Spinner size={6} radius={2}/>}    
        </S.Pokemon>
        
    )
}
export default PokemonShowcase;