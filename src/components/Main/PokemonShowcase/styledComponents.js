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

let size = 20;
let push = 2;
export let Loader = styled.div`
    width:${size}px;
    height:${size}px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:black;
    box-shadow:
        /* top row */
        ${size * -1}px ${size * push * -1}px white,
        ${size * 0}px ${size * push * -1}px white,
        ${size * 1}px ${size * push * -1}px white,
        ${size * -1}px ${size * (push + 1) * -1}px black,
        ${size * 0}px ${size * (push + 1) * - 1}px black,
        ${size * 1}px ${size * (push + 1) * - 1}px black,

        /*bottom row*/
        ${size * -1}px ${size * push}px white,
        ${size * 0}px ${size * push}px white,
        ${size * 1}px ${size * push}px white,
        ${size * -1}px ${size * (push + 1)}px black,
        ${size * 0}px ${size * (push + 1)}px black,
        ${size * 1}px ${size * (push + 1)}px black,

        /*left column*/
        ${size * push * -1}px ${size * -1}px white,
        ${size * push * -1}px ${size * 0}px white,
        ${size * push * -1}px ${size * 1}px white,
        ${size * (push + 1) * -1}px ${size * -1}px black,
        ${size * (push + 1) * -1}px ${size * 0}px black,
        ${size * (push + 1) * -1}px ${size * 1}px black,

        /*right column */
        ${size * push}px ${size * -1}px white,
        ${size * push}px ${size * 0}px white,
        ${size * push}px ${size * 1}px white,
        ${size * (push + 1)}px ${size * -1}px black,
        ${size * (push + 1)}px ${size * 0}px black,
        ${size * (push + 1)}px ${size * 1}px black,
        
        /*corners*/
        ${size * 2}px ${size * 2}px black,
        ${size * 2}px ${size * -2}px black,
        ${size * -2}px ${size * 2}px black,
        ${size * -2}px ${size * -2}px black;




`