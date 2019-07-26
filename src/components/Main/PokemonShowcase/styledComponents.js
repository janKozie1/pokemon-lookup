import styled, {keyframes} from 'styled-components'
import borderImg from './border.png';

let pixelArray = [
    //top right bottom left (3 each + corner)
    { x: -1, y: -1, radiusFor: 'y' },
    { x: 0, y: -1, radiusFor: 'y' },
    { x: 1, y: -1, radiusFor: 'y' },
    { x: 2, y: -2, radiusFor: '' },
    { x: 1, y: -1, radiusFor: 'x' },
    { x: 1, y: 0, radiusFor: 'x' },
    { x: 1, y: 1, radiusFor: 'x' },
    { x: 2, y: 2, radiusFor: '' },
    { x: -1, y: 1, radiusFor: 'y' },
    { x: 0, y: 1, radiusFor: 'y' },
    { x: 1, y: 1, radiusFor: 'y' },
    { x: -2, y: 2, radiusFor: '' },
    { x: -1, y: -1, radiusFor: 'x' },
    { x: -1, y: 0, radiusFor: 'x' },
    { x: -1, y: 1, radiusFor: 'x' },
    { x: -2, y: -2, radiusFor: '' }

]

let getPixel = (size, radius, index, color) => {
    let { x, y, radiusFor } = pixelArray[index % pixelArray.length];
    if (radiusFor === 'y') {
        return `${size * x}px ${size * (radius + 1) * y}px ${color}`;
    } else if (radiusFor === 'x') {
        return `${size * (radius + 1) * x}px ${size * y}px ${color}`;
    } else {
        return `${size * x}px ${size * y}px ${color}`;
    }
}

let getWhitePixels = (size,radius) => {
    return `
        ${size * -1}px ${size * radius * -1}px white,
        ${size * 0}px ${size * radius * -1}px white,
        ${size * 1}px ${size * radius * -1}px white,
        ${size * -1}px ${size * radius}px white,
        ${size * 0}px ${size * radius}px white,
        ${size * 1}px ${size * radius}px white,
        ${size * radius * -1}px ${size * -1}px white,
        ${size * radius * -1}px ${size * 0}px white,
        ${size * radius * -1}px ${size * 1}px white,
        ${size * radius}px ${size * -1}px white,
        ${size * radius}px ${size * 0}px white,
        ${size * radius}px ${size * 1}px white
    `
}
let colors = new Array(5).fill('black').concat(new Array(11).fill('transparent'))
let createKeyframes = (size,radius) => {
    let keyF = ''
    for (let i = 0; i < 17; i++) {
        keyF += `
            ${i * 100 / 16}%{
                box-shadow:
                    
                    ${pixelArray.map((e,j)=>{
                        return getPixel(size,radius,i,colors[(i + j)%colors.length ])
                    })}
                   
            }
        `
    }
    return keyframes`${keyF}`
}

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
let anim = createKeyframes(20,2)
let size = 20;
let radius = 2;
export let Loader = styled.div`
    width:${size}px;
    height:${size}px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    background:black;
    animation:${anim} 2s linear infinite;
`

