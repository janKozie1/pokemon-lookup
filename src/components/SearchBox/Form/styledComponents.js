import styled,{keyframes, css} from 'styled-components'
import pokeball from '../../../assets/images/pokeball.png'
export let Form = styled.form`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    font-family:'Press Start 2P';
    display:flex;
    align-items:center;
    justify-content:space-around;
    position:relative;
    flex-direction:column;
    flex:1;
    width:100vw;
    height:300px;
    transition:height 0.5s ease-in-out;
    @media only screen and (max-width:577px) {
        width:70%;
        height:600px;
    }
`

export let FormHeader = styled.h1`

    text-align:center;
    font-size:2em;
    margin:0;
    transition:margin-bottom 0.5s ease-in-out;
    @media only screen and (max-width:577px) {
        line-height:50px;
        
    }
    span{
        color:#F44336;
    }
    
`

export let SubmitWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:200px;
    background:white;
  
`

export let Submit = styled.button`
    font-family:inherit;
    background:white;
    border:5px solid black;
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:0.8rem;
    position:relative;
    cursor:pointer;
    
    

    &::before, &::after{
        position:absolute;
        content:'';
        height:24px;
        width:24px;
        background:url(${pokeball});
        background-size:contain;
        top:50%;
        transition:transform 0.5s ease-in;
        
    }
    &::before{
        left:0%;
        transform:translate(-380%,-50%) rotate(180deg);
        
    }
    &::after{
        right:0%;
        transform:translate(380%,-50%) rotate(-180deg);
    }
    &:active{
        transform:translateY(10px);
    }
    &:hover{
        &::before{
            opacity:1;
            transform:translate(-190%,-50%) rotate(360deg)
        }
        &::after{
            opacity:1;
            transform:translate(190%,-50%)  rotate(-360deg)
        }
    }

`
