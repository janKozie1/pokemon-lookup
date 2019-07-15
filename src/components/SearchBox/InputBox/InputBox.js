import React, {useState} from 'react';
import SingleInput from './SingleInput'
import * as S from './styledComponents'

const InputBox = () => {
    let [userInput,setUserInput] = useState("")
    let handleCharChange = ({char, index}) =>{
        let temp = userInput;
        temp += ' '
        temp = temp.split("").map((e,i)=>i===index ? char : e).join("");
        setUserInput(temp);
    }
    return ( 
        <S.InputContainer>
            {
                new Array(16).fill('').map((e,index)=>{
                    return <SingleInput key={index} handleCharChange={handleCharChange} userInput={userInput} index={index}/>
                })
            }
        </S.InputContainer>
     );
}
 
export default InputBox;