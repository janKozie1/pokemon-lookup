import React, {useEffect, useRef} from 'react';
import * as S from './styledComponents'

const SingleInput = ({handleCharChange, userInput, index}) => { 
    const inputRef = useRef();  
      useEffect(()=>{
         if(userInput.length === index){
            inputRef.current.focus();
         }
      },[userInput])
    return ( 
         <S.OneChar 
            ref={inputRef}
            disabled={!(userInput.length === index)}
            focused={(userInput.length === index)} 
            value={userInput[index] ? userInput[index] : '' } 
            onChange={({target:{value}}) => handleCharChange({char:value,index})}
         />
     );
}
 
export default SingleInput;