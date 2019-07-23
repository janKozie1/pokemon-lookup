import React, { useState, useEffect } from 'react';
import { usePrevious } from '../../../logic/hooks'
import Input from './Input/Input'
import * as S from './styledComponents'

const MAX_LENGTH = 14;

const Form = ({ onFormSubmit, isLoading }) => {
    let [userInput, setUserInput] = useState("");
    let [currentIndex, setCurrentIndex] = useState(0);
    let updateInput = (eventType, payload) => {
        if (eventType === 'user_input' && userInput.length < 14) {
            if ( payload.index <= userInput.length && payload.value.length >= userInput.length) {
                let char = payload.value[payload.index - 1];
                setUserInput(replaceChar(userInput, char, payload.index - 1))
                setCurrentIndex(payload.index)
            } else {
                setUserInput(payload.value)
                setCurrentIndex(payload.index)
            }
        } else if (eventType === 'user_keypress') {
            if(payload.key.length === 1 && userInput.length === 14){
                if(payload.index === 14){
                    setUserInput(replaceChar(userInput, payload.key, payload.index - 1))
                }else{
                    setUserInput(replaceChar(userInput, payload.key, payload.index))
                }   
            }
            
            setCurrentIndex(payload.index)
          
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