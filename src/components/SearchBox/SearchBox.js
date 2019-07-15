import React from 'react';
import Form from './Form/Form'
import * as S from './styledComponents'
let SearchBox = () =>{
    let onFormSubmit = (value) =>{
        console.log(value)
    }
    return (
        <S.SearchBox>
            <h1>Find that <span>Pokémon</span>!</h1>
            <Form onFormSubmit={onFormSubmit} />
        </S.SearchBox>
    )
}

export default SearchBox;