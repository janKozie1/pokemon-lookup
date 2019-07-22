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
    }, [userInput])

    let updateInput = (eventType,payload) => {
        console.log(payload.index)
        if (eventType === 'user_input') {
            if(payload.value.slice(0,prev.length) !== prev){
                console.log(payload)
                console.log(userInput,payload.value[payload.index - 1],payload.index -1)
                setUserInput(replaceChar(userInput,payload.value[payload.index - 1 ] ,payload.index -1))
            }else{
                setUserInput(payload.value)
                setCurrentIndex(payload.index)
            }
            
        } else if (eventType === 'user_keypress') {
            setCurrentIndex(payload.index)
        }
    }

    // let getSafeNewIndex = (newIndex) => {
    //     if (newIndex > userInput.length) {
    //         return newIndex - 1;
    //     } else if (newIndex < 0) {
    //         return 0;
    //     } else {
    //         return newIndex;
    //     }
    // }
    let replaceChar = (string, char, index) => {
        return string.slice(0,index) + char + string.slice(index+1,string.length)
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