import styled, { css } from 'styled-components'
import borderImg from '../../../assets/images/border.png';

export let Wrapper = styled.div`
    max-width:96px;
    width:96px;
    height:0;
    position:relative;
    overflow:hidden;
    border-style:solid;
    border-width: 20px 20px;
    border-image: url(${borderImg}) 48 48 fill repeat;
    
    opacity:0;
    transition:opacity 1s ease ,height  1s ease;
    ${props => (props.isLoading || props.error || props.pokemon) && css`
        height:96px;
        opacity:1;
       
    `}

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
    height:100%;
    width:100%;

`
export let PokemonIcon = styled.div`
    width:100%;
    max-height:100%;
    width:96px;
    height:96px;
    background:url(${props => props.image});
    background-size:cover;
    filter:grayscale(1);
    
`



