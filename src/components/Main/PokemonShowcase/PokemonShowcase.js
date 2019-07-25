import React from 'react'

import * as S from './styledComponents'

let PokemonShowcase = ({pokemon}) => {
    console.log(pokemon)
    return (
        pokemon && 
        <S.Pokemon>
            <S.PokemonIcon src={pokemon.sprites.front_default}  />
        </S.Pokemon>
        
    )
}
export default PokemonShowcase;