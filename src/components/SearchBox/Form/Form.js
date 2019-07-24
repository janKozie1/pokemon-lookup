import React, { useState } from 'react';
import Input from './Input/Input'
import * as S from './styledComponents'

const MAX_LENGTH = 14;

const Form = ({ onFormSubmit, isLoading }) => {
    let [userInput, setUserInput] = useState("");
    let [currentIndex, setCurrentIndex] = useState(0);
    let [indexUpdated, setIndexUpdated] = useState(true);
    let [buttonPressed, setButtonPressed] = useState(false);
    let updateInput = (eventType, { value, key, index }) => {

        if (eventType === 'user_input' && indexUpdated) {
            if (userInput.length < 14) {
                if (index <= userInput.length && value.length >= userInput.length) {
                    let char = value[index - 1];
                    setUserInput(replaceChar(userInput, char, index - 1))
                } else {
                    setUserInput(value)
                }
            } else {
                setUserInput(value)
            }
            setCurrentIndex(index)
        } else if (eventType === 'user_keypress' && indexUpdated) {
            if (userInput.length === 14) {
                if (key.length === 1) {
                    if (index === 14) {
                        setUserInput(replaceChar(userInput, key, index - 1))
                        setCurrentIndex(index)
                    } else {
                        setUserInput(replaceChar(userInput, key, index))
                        setCurrentIndex(index + 1)
                    }
                } else {
                    setCurrentIndex(index)
                }
            } else {
                setCurrentIndex(index)
            }
        }
    }
    let replaceChar = (string, char, index) => {
        let newValue = string.slice(0, index) + char + string.slice(index + 1, string.length);
        if (newValue !== userInput)
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
            <S.Submit 
                type='submit'
                buttonPressed={buttonPressed} 
                onMouseDown={() =>{
                    console.log(buttonPressed)
                    setButtonPressed(true)
                } } 
                onMouseUp={() => setButtonPressed(false)}>
                    FIND
            </S.Submit>
        </S.Form>
    );
}

export default Form;