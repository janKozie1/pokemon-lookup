import React, { useRef, useEffect } from 'react';
import * as S from './styledComponents'

const Input = ({ userInput, updateInput, currentIndex,limit, setCurrentIndex }) => {
   const inputRef = useRef();
   //console.log(currentIndex)
   useEffect(() => {
      inputRef.current.focus();
   }, [inputRef])
   useEffect(() => {
      console.log(currentIndex + " zmiana")
      inputRef.current.setSelectionRange(currentIndex, currentIndex)
   }, [currentIndex])
   //letter changes -> index doesnt change -> above doesnt run
   return (
      <S.InputContainer>
         {
            userInput.split("").map((e, i) => {
               return <S.OneChar isFocused={currentIndex === i } onClick={() => setCurrentIndex(i)} key={i}>{e}</S.OneChar>
            })
         }
         <S.OneChar isFocused={currentIndex === userInput.length} hidden={userInput.length === limit}  />
         <S.HiddenInput
            maxLength={limit}
            ref={inputRef}
            value={userInput}
            onChange={({ target: { value } }) => {
               updateInput('user_input', { value, index: inputRef.current.selectionStart })
            }}
            onKeyUp={({ key }) => updateInput('user_keypress', { key, index: inputRef.current.selectionStart})}
            onBlur={() => inputRef.current.focus()}

         />
      </S.InputContainer>
   );
}

export default Input;