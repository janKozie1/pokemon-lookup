import styled,{ css} from 'styled-components'
// import pokeball from '../../../assets/images/pokeball.png'
export let Form = styled.form`

    width:100vw;
    height:300px;
    margin-top:60px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    position:relative;
    transition:all 0.5s ease-in-out;
    @media only screen and (max-width:577px) {
        width:80%;
        padding:0;
        flex:1;
    }
`

export let FormHeader = styled.h1`
    margin:0;
    font-size:2.5rem;
    text-align:center;
    transition:margin-bottom 0.5s ease-in-out;
    @media only screen and (max-width:577px) {
        font-size:2.2rem;
        line-height:50px;
        
    }
    span{
        color:#F44336;
    }
    
`

export let Submit = styled.button`
    height:33px;
    padding:10px 20px;
    border:0;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    background:white;
    font-family:inherit;
    font-size:0.8rem;
    cursor:pointer;
    box-shadow:${defaultShadows()};

    &::before{
        left:0%;
        transform:translate(-380%,-50%) rotate(180deg);
        
    }
    &::after{
        right:0%;
        transform:translate(380%,-50%) rotate(-180deg);
    }
    &:active{
        padding-top:15px;
        box-shadow:
            ${defaultShadows()},
            inset 0px 5px 0 black;
    }
    
`


function defaultShadows(){
    return `
        5px 0 black,
        0 5px black,
        -5px 0 black,
        0 -5px black,
        -5px 5px #ccc,
        -5px -5px #ccc,
        5px 5px #ccc,
        5px -5px #ccc
    `
}

