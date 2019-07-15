import React, { useRef, useEffect } from 'react';
import * as S from './styledComponents'

const SingleInput = ({ index, currentIndex, handleIndexChange, replaceCharUserInput, userInput, handleSpecialKey }) => {
   const inputRef = useRef();
   useEffect(() => {
      if (currentIndex === index){
         inputRef.current.focus();
      }
}, [currentIndex])
   return (
      <S.OneChar
         ref={inputRef}
         value={userInput[index]}
         onKeyUp={({key})=>{
           handleSpecialKey(key)
         }}
         onChange={({target:{value}}) => {
            replaceCharUserInput(value[value.length - 1], index)
         }}
         onFocus={() => handleIndexChange(index)}
      />
   );
}

export default SingleInput;