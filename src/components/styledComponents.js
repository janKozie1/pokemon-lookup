import { createGlobalStyle } from 'styled-components'

export let GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
    html{
        height:100%;
        font-family:'Press Start 2P';
    }
    body{
        min-height:100%;
        width:100vw;
        margin:0;
        padding:0;
        box-sizing:border-box;
        background:#fffafa ;
       
        >*{
            margin:0;
            padding:0;
            box-sizing:border-box;
        }
        #root{
            min-height:100%;
            height:100%;
            width:100vw;
            display:flex;
            align-items:center;
            justify-content:center;
        }
    }
`