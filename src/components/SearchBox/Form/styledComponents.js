import styled, {keyframes} from 'styled-components'

export let Form = styled.form`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    
    position:relative;
    margin-top:10px;
    /* &::after{
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
    } */
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
export let HiddenInput = styled.input`
    position:absolute;
    z-index:1;
    bottom:0;
    transform:scale(0);
`
export let OneChar = styled.p`
    background:white;
    height:50px;
    width:30px;
    margin:0;
    margin-right:10px;
    font-size:25px;
    border:0;
    border-bottom:5px solid rgba(0,0,0,1);
    padding-bottom:5px;
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
`

