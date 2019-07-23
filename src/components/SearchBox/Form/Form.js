import React, { useState, useEffect } from 'react';
import { usePrevious } from '../../../logic/hooks'
import Input from './Input/Input'
import * as S from './styledComponents'

const MAX_LENGTH = 14;

const Form = ({ onFormSubmit, isLoading }) => {
    let [userInput, setUserInput] = useState("");
    let [currentIndex, setCurrentIndex] = useState(0);
    let prev = usePrevious(userInput || '')
    let updateInput = (eventType, payload) => {
        if (eventType === 'user_input') {
            // if (payload.value.slice(0, prev.length) !== prev && payload.value.length > prev.length) {
            //     setUserInput(replaceChar(userInput, payload.value[payload.index - 1], payload.index - 1));
            //     setCurrentIndex(payload.index);
            // } else {
            // console.log(payload.index,userInput.length)

            if ( payload.index <= userInput.length && payload.value.length >= userInput.length) {
                let char = payload.value[payload.index - 1];
                setUserInput(replaceChar(userInput, char, payload.index - 1))
                setCurrentIndex(payload.index)

            } else {
                console.log("?")
                setUserInput(payload.value)
                setCurrentIndex(payload.index)
            }



            // }

        } else if (eventType === 'user_keypress') {
            // if(userInput.length >= MAX_LENGTH && payload.key.length === 1 ){
            //     console.log(currentIndex,payload.index)
            //     setUserInput(replaceChar(userInput, payload.key, currentIndex));

            // } else {
            setCurrentIndex(payload.index)
            // }

        }
    }

    let replaceChar = (string, char, index) => {

        return string.slice(0, index) + char + string.slice(index + 1, string.length)
    }
    return (
        <S.Form onSubmit={(e) => onFormSubmit(e, userInput)}>
            <S.FormHeader>Find that <span>Pokémon</span>!</S.FormHeader>
            <Input
                currentIndex={currentIndex}
                userInput={userInput}
                updateInput={updateInput}
                setCurrentIndex={setCurrentIndex}
                limit={MAX_LENGTH}
            />
            <S.SubmitWrapper >
                <S.Submit type='submit' isLoading={isLoading}>FIND</S.Submit>
            </S.SubmitWrapper>
        </S.Form>
    );
}

export default Form;