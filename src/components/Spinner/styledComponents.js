import styled from 'styled-components'
import createKeyframes from './createKeyframes'

export let Spinner = styled.div`
    width:${props => props.size ? props.size : '8'}px;
    height:${props => props.size ? props.size : '8'}px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    animation:${props => createKeyframes(props.size,props.radius)} 1s linear infinite;
`


