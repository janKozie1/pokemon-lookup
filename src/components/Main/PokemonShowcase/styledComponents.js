import styled, { css } from 'styled-components'
import borderImg from '../../../assets/images/border.png';

export let Pokemon = styled.div`
    max-width:80%;
    width:300px;
    height:0;
    position:relative;
    overflow:hidden;
    border-style: solid;
    border-width: 32px 32px;
    border-image: url(${borderImg}) 48 48 fill repeat;
    font-family:'Press Start 2P';
    opacity:0;
    transition:opacity 1s ease ,height  1s ease;
    ${props => (props.isLoading || props.error || props.pokemon) && css`
        height:200px;
        opacity:1;
       
    `}

`

export let PokemonIcon = styled.div`
    width:100%;
    max-height:100%;
    width:96px;
    height:96px;
    border: 2px solid black;
    filter:grayscale(1);
`


