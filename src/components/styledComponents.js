import { createGlobalStyle } from 'styled-components'

export let GlobalStyle = createGlobalStyle`
    body{
        min-height:100vh;
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
            min-height:100vh;
            width:100vw;
            display:flex;
            align-items:center;
            justify-content:center;
        }
    }
`