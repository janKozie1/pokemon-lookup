import styled, { createGlobalStyle, css } from 'styled-components'

export let GlobalStyle = createGlobalStyle`
    html{
        height:100%;
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