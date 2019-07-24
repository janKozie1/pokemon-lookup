import styled, { keyframes, css } from 'styled-components'

let blink = keyframes`
    0%, 49.9999%{
        border-color:white;
        box-shadow:0 0 0 white;
    }
    50%,99.9999%{
        border-color:black;
        box-shadow:0px 4px 0 #ddd;
    }
`

export let InputContainer = styled.div`
    position:relative;
    display:flex;
    align-content:space-around;
    justify-content:center;
    flex-wrap:wrap;
    max-width:70%;
    height:120px;
    
`
export let HiddenInput = styled.input`
    position:absolute;
    z-index:1;
    bottom:0;
    transform:scale(1);
`
export let OneChar = styled.p`
    transition:all 0.5s ease-in-out;
    background:white;
    height:30px;
    width:30px;
    margin:0;
    margin-right:10px;
    font-size:25px;
    border:0;
    border-bottom:5px solid rgba(0,0,0,1);
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    outline:none;
    box-shadow:0px 4px 0 #ddd;
    ${({isFocused}) => isFocused && css`
    
        animation: ${blink} 1s linear infinite -1s;
    `}
    ${({hidden}) => hidden && css`
        display:none;
    `}
    z-index:10;
    &:disabled{
        background:white;
    }
    &:first-of-type{
        &::before{
            content:'';
            width:25px;
            height:18px;
            position:absolute;
            background:black;
            left:0px;
            top:50%;
            clip-path:polygon(0% 0% , 50% 0% , 100% 50%, 50% 100% , 0% 100%);
            transform:translate(-150%,-50%);
        }
    }
    &:nth-of-type(16){
        display:none;
    }
`