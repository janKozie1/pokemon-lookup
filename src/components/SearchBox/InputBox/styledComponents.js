import styled from 'styled-components'

export let InputContainer = styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:center;
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

export let OneChar = styled.input`
    width:30px;
    text-align:center;
    font-size:30px;
    font-family:inherit;
    padding:0 1px;
    border:0;
    color: transparent;
    text-shadow: 0 0 0 black;
    padding-bottom: ${props => props.focused ? '10px':'0px'};
    border-bottom:5px solid black;
    margin-right:10px;
    &:focus{
        outline:none;
    }
    &:disabled{
        background:white;
    }
`