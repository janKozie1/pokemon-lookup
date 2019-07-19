import React from 'react';
import Form from './Form/Form'
import * as S from './styledComponents'
let SearchBox = () =>{
    let onFormSubmit = (e, value) =>{
        e.preventDefault();
        fetch(`http://127.0.0.1:8080/getPokemon`,{
           method:"POST",
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({query:value.trim()}) 
        }).then(e => e.json()).then(console.log)
    }
    return (
        <S.SearchBox>
            <h1>Find that <span>Pokémon</span>!</h1>
            <Form onFormSubmit={onFormSubmit} />
        </S.SearchBox>
    )
}

export default SearchBox;