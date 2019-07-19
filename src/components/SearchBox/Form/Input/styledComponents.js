import styled, { keyframes } from 'styled-components'

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

export let InputContainer = styled.div`
    position:relative;
    
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    max-width:70%;
   
    
`
export let HiddenInput = styled.input`
    position:absolute;
    z-index:1;
    bottom:0;
    transform:scale(0);
`
export let OneChar = styled.p`
    transition:all 0.5s ease-in-out;
    background:white;
    height:30px;
    width:30px;
    margin:10px 0;
    margin-right:10px;

    
    font-size:25px;
    border:0;
    border-bottom:5px solid rgba(0,0,0,1);
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;

    z-index:10;
    &:last-of-type{
        outline:none;
        animation:${blink} 1s linear infinite;
    }
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
`