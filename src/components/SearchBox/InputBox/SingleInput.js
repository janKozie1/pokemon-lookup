import React, {useState} from 'react';
import * as S from './styledComponents'

const SingleInput = () => {
    let [inputArray,setInputArray] = useState('')
    return ( 
        <S.OneChar />
     );
}
 
export default SingleInput;