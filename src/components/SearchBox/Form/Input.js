import React, { useRef, useEffect, useState } from 'react';
import * as S from './styledComponents'

const Input = () => {
   let [userInput, setUserInput] = useState('')
   const inputRef = useRef();
   useEffect(()=>{
      inputRef.current.focus();
   },[inputRef])
   return (
      <S.InputContainer>
         {
            userInput.split("").map((e,i)=><S.OneChar key={i}>{e}</S.OneChar>)
         }
         <S.OneChar />
         <S.HiddenInput maxLength='15' ref={inputRef} value={userInput} onChange={({ target: { value } }) => setUserInput(value)} onBlur={()=>inputRef.current.focus()} />
      </S.InputContainer>
   );
}

export default Input;