import styled,{ css} from 'styled-components'
// import pokeball from '../../../assets/images/pokeball.png'
export let Form = styled.form`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    font-family:'Press Start 2P';
    display:flex;
    align-items:center;
    justify-content:space-around;
    position:relative;
    flex-direction:column;
    width:100vw;
    height:300px;
    padding:60px 0;
    transition:all 0.5s ease-in-out;
    @media only screen and (max-width:577px) {
        width:80%;
        flex:1;
        padding:0;
    }
`

export let FormHeader = styled.h1`

    text-align:center;
    font-size:2.5rem;
    margin:0;
    transition:margin-bottom 0.5s ease-in-out;
    @media only screen and (max-width:577px) {
        line-height:50px;
        font-size:2.2rem;
        
    }
    span{
        color:#F44336;
    }
    
`

export let SubmitWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:200px;
    background:white;
  
`


let defaultShadows = () =>{
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

export let Submit = styled.button`
    height:33px;
    box-sizing:border-box;
    font-family:inherit;
    background:white;
    border:0;
    box-shadow:${defaultShadows()};
    padding:10px 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:0.8rem;
    position:relative;
    cursor:pointer;
    
    &::before{
        left:0%;
        transform:translate(-380%,-50%) rotate(180deg);
        
    }
    &::after{
        right:0%;
        transform:translate(380%,-50%) rotate(-180deg);
    }
    ${props => props.buttonPressed && css`
        background:#ccc;
        padding-top:15px;
        box-shadow:
            ${defaultShadows()},
            inset 0px 5px 0 black;
    `}
`


