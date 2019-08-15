import React from 'react'
import * as S from './styledComponents'
import Spinner from '../../Spinner/Spinner'
import { dummy } from './dummyPokemon'
let PokemonShowcase = ({ pokemon, error, isLoading }) => {
    //let pokemon = dummy;
    console.log(pokemon, error, isLoading)
    let getContent = () => {
        if (isLoading) {
            return <Spinner size={6} radius={2} />
        }else if(pokemon) {
            return createPokemon()
        } else if (error) {
            return <S.Message>{error}</S.Message>
        } 
    }

    let createPokemon = () => {
      
        return (
            <S.Pokemon>
                <S.PokemonIcon image={pokemon.data.sprites.front_default}/>
            </S.Pokemon>
        )
    }
    return (
        <S.Wrapper pokemon={pokemon} error={error} isLoading={isLoading}>
            {getContent()}
        </S.Wrapper>

    )
}
export default PokemonShowcase;