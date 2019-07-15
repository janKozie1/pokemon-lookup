import React, { useState } from 'react';
import SingleInput from './SingleInput'
import * as S from './styledComponents'

const FIELDS_COUNT = 16;

const InputBox = () => {
    let [userInput, setUserInput] = useState(" ".repeat(FIELDS_COUNT));
    let [currentIndex, setCurrentIndex] = useState(0);
    let replaceCharUserInput = (char, index) => {
        console.log(currentIndex)
        if (char) {
            setUserInput(userInput.split("").map((e, i) => i === index ? char : e).join(""))
            if(index !== FIELDS_COUNT -1 )
                setCurrentIndex(index + 1)
        } else {
            if (currentIndex === FIELDS_COUNT - 1 && userInput[FIELDS_COUNT-1] !== ' '){
                setUserInput(userInput.split("").map((e, i) => i === index  ? ' ' : e).join(""))
            }else{
                setUserInput(userInput.split("").map((e, i) => i === index - 1 ? ' ' : e).join(""))
                if (index >= 1)
                    setCurrentIndex(index-1);
            }
        }
    }
    return (
        <S.InputContainer>
            {
                new Array(FIELDS_COUNT).fill('').map((e, index) => {
                    return <SingleInput
                        key={index}
                        setCurrentIndex={setCurrentIndex}
                        index={index}
                        currentIndex={currentIndex}
                        replaceCharUserInput={replaceCharUserInput}
                        userInput={userInput}
                    />
                })
            }
        </S.InputContainer>
    );
}

export default InputBox;