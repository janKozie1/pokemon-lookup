import styled from 'styled-components'
import borderImg from '../../../assets/images/border.png';

export let Pokemon = styled.div`
    max-width:80%;
    width:300px;
    height:200px;
    font-family:'Press Start 2P';
    border-style: solid;
    border-width: 32px 32px;
    border-image: url(${borderImg}) 48 48 fill repeat;
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


