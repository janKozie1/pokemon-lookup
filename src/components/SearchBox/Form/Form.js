import React, { useState, useEffect } from 'react';
import { usePrevious } from '../../../logic/hooks'
import Input from './Input/Input'
import * as S from './styledComponents'

const MAX_LENGTH = 14;

const Form = ({ onFormSubmit, isLoading }) => {
    let [userInput, setUserInput] = useState("");
    let [currentIndex, setCurrentIndex] = useState(0);
    let [indexUpdated, setIndexUpdated] = useState(true);
    let updateInput = (eventType, { value, key, index }) => {
        console.log(indexUpdated)
        if (eventType === 'user_input' && userInput.length < 14 && indexUpdated) {
            if (index <= userInput.length && value.length >= userInput.length) {
                let char = value[index - 1];
                setUserInput(replaceChar(userInput, char, index - 1))
            } else {
                setUserInput(value)

            }
            setCurrentIndex(index)
        } else if (eventType === 'user_keypress' && indexUpdated) {
            if (userInput.length === 14) {
                if (key.length === 1) {
                    if (index === 14) {
                        setUserInput(replaceChar(userInput, key, index - 1))
                    } else {
                        setUserInput(replaceChar(userInput, key, index))
                    }
                }
                setCurrentIndex(index)
                
            }
        }

    }
    let replaceChar = (string, char, index) => {
        let newValue =  string.slice(0, index) + char + string.slice(index + 1, string.length);
        if(newValue !== userInput)
            setIndexUpdated(false)
        return newValue
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
                setIndexUpdated={setIndexUpdated}
            />
            <S.SubmitWrapper >
                <S.Submit type='submit' isLoading={isLoading}>FIND</S.Submit>
            </S.SubmitWrapper>
        </S.Form>
    );
}

export default Form;