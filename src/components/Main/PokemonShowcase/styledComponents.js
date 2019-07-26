import styled from 'styled-components'
import borderImg from './border.png';

export let Pokemon = styled.div`
    height:300px;
    width:300px;
    font-family:'Press Start 2P';
    border-image-source:url(${borderImg});
    border-style: solid;
    border-width: 16px 16px;
    border-image: url(${borderImg}) 16 16 fill repeat;
    position:relative;
`

export let PokemonIcon = styled.div`
   filter:grayscale(1);
    width:100%;
    max-height:100%;
    width:96px;
    height:96px;
    border: 2px solid black;
`


