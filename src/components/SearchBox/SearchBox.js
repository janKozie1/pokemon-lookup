import React from 'react';
import InputBox from './InputBox/InputBox'
import * as S from './styledComponents'
let SearchBox = () =>{
    return (
        <S.SearchBox>
            <h1>Find that <span>Pokémon</span>!</h1>
            <InputBox />
        </S.SearchBox>
    )
}

export default SearchBox;