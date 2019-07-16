import React, { useState } from 'react';
import SingleInput from './SingleInput'
import * as S from './styledComponents'

const FIELDS_COUNT = 16;

const Form = ({ onFormSubmit }) => {
    let [userInput, setUserInput] = useState(" ".repeat(FIELDS_COUNT));
    let [currentIndex, setCurrentIndex] = useState(0);

    let handleSpecialKey = (key) => {
        
        switch (key.toLowerCase()) {
            case 'tab':
            case 'arrowup':
            case 'arrowright':
                handleIndexChange(currentIndex + 1)
                break;
            case 'arrowleft':
            case 'arrowdown':
                handleIndexChange(currentIndex - 1);
                break;
            case 'enter':
                onFormSubmit(userInput)
                break;
            default:
                break;
        }

    }

    let replaceCharUserInput = (char, index) => {
        console.log(char)
        if (char) {
            
            setUserInput(changeCharAtIndex(userInput,char,index))
            handleIndexChange(index + 1)
        } else {
            if (currentIndex === FIELDS_COUNT - 1 && userInput[FIELDS_COUNT - 1] !== ' ') {
                setUserInput(changeCharAtIndex(userInput,' ',index))
            } else {
                setUserInput(changeCharAtIndex(userInput,' ',index - 1 ))
                handleIndexChange(index - 1);
            }
        }
    }

    let handleIndexChange = (newIndex) => {
        if (newIndex < 0) {
            setCurrentIndex(0)
        } else if (newIndex > FIELDS_COUNT - 1) {
            setCurrentIndex(FIELDS_COUNT - 1)
        } else {
            setCurrentIndex(newIndex)
        }
    }

    let changeCharAtIndex = (text,char,index) => {
        return text.split("").map((e, i) => i === index ? char : e).join("")
    }

    return (
        <S.InputContainer onSubmit={() => onFormSubmit(userInput)}>
            {
                new Array(FIELDS_COUNT).fill('').map((e, index) => {
                    return <SingleInput
                        key={index}
                        handleIndexChange={handleIndexChange}
                        index={index}
                        currentIndex={currentIndex}
                        replaceCharUserInput={replaceCharUserInput}
                        userInput={userInput}
                        handleSpecialKey={handleSpecialKey}
                    />
                })
            }
        </S.InputContainer>
    );
}

export default Form;