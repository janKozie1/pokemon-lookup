import {keyframes} from 'styled-components'

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
    { x: 1, y: 1, radiusFor: 'y' },
    { x: 0, y: 1, radiusFor: 'y' },
    { x: -1, y: 1, radiusFor: 'y' },
    { x: -2, y: 2, radiusFor: '' },
    { x: -1, y: 1, radiusFor: 'x' },
    { x: -1, y: 0, radiusFor: 'x' },
    { x: -1, y: -1, radiusFor: 'x' },
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

let colors = new Array(4).fill('black').concat(new Array(12).fill('transparent'))

let createKeyframes = (size, radius) => {
    let keyF = ''
    for (let i = 0; i < 17; i++) {
        keyF += `
            ${i * 100 / 16}%{
                box-shadow:
                    ${pixelArray.map((e, j) => {
                        return getPixel(size, radius, j, colors[(j + i) % colors.length])
                    })}          
            }
        `
    }
    return keyframes`${keyF}`
}

export default createKeyframes;
