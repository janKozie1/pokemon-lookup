import styled from 'styled-components'

export let SearchBox = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    width:100vw;
    height:400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    font-family:'Press Start 2P';
    font-size:2em;
    h1{
        margin:0;
        text-align:center;
        font-size:1em;
        transition:margin-bottom 0.5s ease-in-out;
        @media only screen and (max-width:577px) {
            margin-bottom:150px;
            line-height:50px;
        }
        span{
            color:#F44336;
        }
    }
    
`