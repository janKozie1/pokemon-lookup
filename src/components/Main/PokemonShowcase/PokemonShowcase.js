import React from 'react'
import * as S from './styledComponents'
import Spinner from '../../Spinner/Spinner'

let PokemonShowcase = ({ pokemon, error, isLoading }) => {
    let getContent = () => {
        if (isLoading) {
            return <Spinner size={6} radius={2} />
        } else if (pokemon) {
            return createPokemon(pokemon)
        } else if (error) {
            return <S.Message>{error}</S.Message>
        }
    }

    let createPokemon = ({ data }) => {
        console.log(data)
        return (
            <S.Pokemon>
                <S.PokemonIcon image={data.sprites.front_default} />
                <S.PokemonHeader>
                    <h3>{data.name} <span>#{data.id}</span></h3>
                    <S.Types>
                        {data.types.map(({ type: { name } }) => {
                            return <S.Type key={name} type={name}>{name}</S.Type>
                        })}
                    </S.Types>

                </S.PokemonHeader>

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