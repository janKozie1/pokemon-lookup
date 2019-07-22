import React, { useRef, useEffect } from 'react';
import * as S from './styledComponents'

const Input = ({ userInput, updateInput, currentIndex, onKeyPressed }) => {
   const inputRef = useRef();
   useEffect(() => {
      inputRef.current.focus();
   }, [inputRef])
   useEffect(() => {
      inputRef.current.setSelectionRange(currentIndex, currentIndex)
   }, [currentIndex])
   return (
      <S.InputContainer>
         {
            userInput.split("").map((e, i) => {
               return <S.OneChar isFocused={currentIndex === i} key={i}>{e}</S.OneChar>
            })
         }
         <S.OneChar isFocused={currentIndex === userInput.length} />
         <S.HiddenInput
            maxLength='14'
            ref={inputRef}
            value={userInput}
            onChange={({ target: { value } }) => {
               updateInput('user_input', { value, index: inputRef.current.selectionStart })
            }}
            onKeyUp={({ key }) => updateInput('user_keypress', { key, index: inputRef.current.selectionStart})}
            onKeyDown={({ key }) => onKeyPressed(key)}
            onBlur={() => inputRef.current.focus()}

         />
      </S.InputContainer>
   );
}

export default Input;