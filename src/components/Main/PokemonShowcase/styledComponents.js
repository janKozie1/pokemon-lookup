import styled, { css } from 'styled-components'
import borderImg from '../../../assets/images/border.png';

export let Wrapper = styled.div`
    width:500px;
    height:0;
    position:relative;
    z-index:1;
   margin-top:60px;
    opacity:0;
    transition:opacity 1s ease ,height  1s ease;
    ${props => (props.isLoading || props.error || props.pokemon) && css`
        height:300px;
        opacity:1;
       
    `}
    &::after{
        position:absolute;
        border-style:solid;
        border-width: 20px 20px;
        border-image: url(${borderImg}) 48 48  repeat;
        height:100%;
        width:100%;
        content:'';
        top:0;
        left:0;
        left:-20px;
        top:-20px;
        z-index:1;
    }
    & * {
        z-index:2;
    }
`

export let Message = styled.p`
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:100%;
    text-align:center;
    margin:0;
    font-size:1.1rem;
`

export let Pokemon = styled.div`
    height:calc(100% + 17px);
    width:calc(100% + 17px);
    top:-7px;
    left: -10px;
    display:flex;
    align-items:flex-start;
    /* box-shadow:0px 0px 0 8px black; */
   
    position:absolute;
   
`
export let PokemonIcon = styled.div`
    width:100%;
    max-height:100%;
    width:120px;
    height:120px;
    background:url(${props => props.image});
    background-size:cover;
    border-style:solid;
    border-width: 20px 20px;
    border-image: url(${borderImg}) 48 48  repeat;
    border-top:0;
    border-left:0;
    
`

export let PokemonHeader = styled.div`
    flex:1;
    margin-left:10px;
    >h3{
        font-weight:normal;
        font-size:1.4rem;
        text-transform:capitalize;
        margin:15px 0;
        >span{
            
            color:#bbb;
            font-size:1.4rem;
        }
    }
    >h4{
        font-size:0.7rem;
    }
`

export let Types = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
`
export let Type = styled.div`
    
`
