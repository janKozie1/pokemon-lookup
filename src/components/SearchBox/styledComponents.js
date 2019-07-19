import styled from 'styled-components'

export let SearchBox = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    font-family:'Press Start 2P';
    font-size:2em;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100vw;
    justify-content:space-between;
   
    h1{
        text-align:center;
        font-size:1em;
        margin-bottom:50px;
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