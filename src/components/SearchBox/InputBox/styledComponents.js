import styled from 'styled-components'

export let InputContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:40px;
    
`

export let OneChar = styled.input`
    width:2vw;
    text-align:center;
    font-size:2vw;
    font-family:inherit;
    padding:0 1px;
    border:0;
    border-bottom:5px solid black;
    margin-right:10px;
    &:focus{
        outline:none;
    }
`