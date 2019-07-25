import styled, { createGlobalStyle, css } from 'styled-components'

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

export let Main = styled.main`
    height:100%;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    z-index:1;
`

export let Loader = styled.div`
    height:100vh;
    width:100vw;
    z-index:2;
    background:white;
    position:fixed;
    display:none;
    ${props => props.isLoading && css`
        display:block;
    `}
`