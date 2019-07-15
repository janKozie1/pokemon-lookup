import React, { useRef, useEffect } from 'react';
import * as S from './styledComponents'

const SingleInput = ({ index, currentIndex, setCurrentIndex, replaceCharUserInput, userInput }) => {
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
         onChange={({target:{value}}) => {
            replaceCharUserInput(value[value.length - 1], index)
         } }
         onFocus={() => setCurrentIndex(index)}
      />
   );
}

export default SingleInput;