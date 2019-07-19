import React, { useState } from 'react';
import Input from './Input/Input'
import * as S from './styledComponents'

const FIELDS_COUNT = 16;

const Form = ({ onFormSubmit }) => {
    let [userInput, setUserInput] = useState(" ".repeat(FIELDS_COUNT));
    let [currentIndex, setCurrentIndex] = useState(0);

    return (
        <S.Form onSubmit={(e) => onFormSubmit(e,userInput)}>
            <S.FormHeader>Find that <span>Pokémon</span>!</S.FormHeader>
            <Input />
            <S.Submit type='submit'>FIND</S.Submit>
        </S.Form>
    );
}

export default Form;