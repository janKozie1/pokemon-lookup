import React, { useState, useEffect } from 'react';
import { usePrevious } from '../../../logic/hooks'
import Input from './Input/Input'
import * as S from './styledComponents'


const Form = ({ onFormSubmit }) => {
    let [userInput, setUserInput] = useState("");
    let [currentIndex, setCurrentIndex] = useState(0);
    let [keyPressed, setKeyPressed] = useState('')
    let prev = usePrevious(userInput);
    useEffect(() => {
        console.log(keyPressed)
        if (prev ||  userInput) {
            prev.length < userInput.length ? setCurrentIndex(currentIndex + 1) : keyPressed === 'Delete' ?  setCurrentIndex(currentIndex) : setCurrentIndex(currentIndex - 1)
        }
    }, [userInput])

    let updateInput = (eventType, payload) => {
        console.log(payload)
        if (eventType === 'user_input') {
            setUserInput(payload.value)
        } else if (eventType === 'user_keypress') {
            switch (payload.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                    setCurrentIndex(getSafeNewIndex(currentIndex - 1))
                    break;
                case 'ArrowdDown':
                case 'ArrowRight':
                    setCurrentIndex(getSafeNewIndex(currentIndex + 1))
                    break;
                default:
                    break;
            }
        }
    }

    let getSafeNewIndex = (newIndex) => {
        if (newIndex > userInput.length) {
            return newIndex - 1;
        } else if (newIndex < 0) {
            return 0;
        } else {
            return newIndex;
        }
    }
    return (
        <S.Form onSubmit={(e) => onFormSubmit(e, userInput)}>
            <S.FormHeader>Find that <span>Pokémon</span>!</S.FormHeader>
            <Input
                currentIndex={currentIndex}
                userInput={userInput}
                updateInput={updateInput}
                onKeyPressed={setKeyPressed}
            />
            <S.SubmitWrapper >
                <S.Submit type='submit'>FIND</S.Submit>
            </S.SubmitWrapper>
        </S.Form>
    );
}

export default Form;