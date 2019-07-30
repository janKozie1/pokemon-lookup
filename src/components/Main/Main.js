import React, {useState} from 'react'
import SearchBox from './SearchBox/SearchBox';
import PokemonShowcase from './PokemonShowcase/PokemonShowcase'

import * as S from './styledComponents'

import {useFetch} from '../../logic/hooks'

const URL = 'http://127.0.0.1:8080/getPokemon';
const PARAMS = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
}

let Main = () => {
    let [query, setQuery] = useState(null)
    let [pokemon,error,isLoading] = useFetch(URL,PARAMS,query) 
    return (
        <S.Main>
            <SearchBox setQuery={setQuery}/>
            {
                // pokemon && <PokemonShowcase pokemon={pokemon} />
                <PokemonShowcase pokemon={pokemon} error={error} isLoading={isLoading}/>
            }
        </S.Main>
    )
}

export default Main;