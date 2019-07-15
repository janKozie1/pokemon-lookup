import React, {useState} from 'react';
import SingleInput from './SingleInput'
import * as S from './styledComponents'

const InputBox = () => {
    let [userInput,setUserInput] = useState('')
    return ( 
        <S.InputContainer>
            {
                new Array(16).fill('').map((e,index)=>{
                    return <SingleInput key={index} setUserInput={setUserInput} />
                })
            }
        </S.InputContainer>
     );
}
 
export default InputBox;