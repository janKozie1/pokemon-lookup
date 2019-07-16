import styled, {keyframes} from 'styled-components'

export let InputContainer = styled.form`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    width:50%;
    margin-top:40px;
    height:100px;
    position:relative;
    &::after{
        content:'';
        height:20px;
        width:10px;
        background:black;
        left:-30px;
        top:6px;
        position:absolute;
    }
    &::before{
        content:'';
        height:14px;
        width:15px;
        background:black;
        left:-27px;
        top:9px;
        transform:rotate(-45deg);
        position:absolute;
    }
`

let blink = keyframes`
    0%{
        border-color:black;
    }
    49.9999%{
        border-color:black;
    }
    50%{
        border-color:white;
    }
    99.9999%{
        border-color:white;
    }
`

export let OneChar = styled.input`
    width:10%;
    margin-right:10px;
    font-size:30px;
    text-align:center;
    font-family:inherit;
    padding:0 1px;
    border:0;
    color: transparent;
    text-shadow: 0 0 0 black;
    border-bottom:5px solid rgba(0,0,0,1);
    padding-bottom:5px;
    margin-right:10px;
    user-select:none;
    &:focus{
        outline:none;
        padding-bottom:15px;
        animation:${blink} 1s linear infinite;
    }
    &:disabled{
        background:white;
    }
`

