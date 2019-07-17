import React, { useRef, useEffect } from 'react';
import * as S from './styledComponents'

const SingleInput = ({ index, currentIndex, handleIndexChange, replaceCharUserInput, userInput, handleSpecialKey }) => {
   const inputRef = useRef();
   useEffect(() => {
      if (currentIndex === index){
         inputRef.current.focus();
      }
}, [currentIndex, index])
   return (
      <S.OneChar
         ref={inputRef}
         value={userInput[index]}         
         onKeyUp={({key})=>{
           handleSpecialKey(key)
         }}
         onChange={({target:{value}}) => {
            let temp = value.trim();
            temp = temp[temp.length-1]
            replaceCharUserInput(temp, index)
         }}
         onFocus={() => handleIndexChange(index)}
      />
   );
}

export default SingleInput;