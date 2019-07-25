import styled, { keyframes, css } from 'styled-components'
let pointerShadow = '#ccc';
let letterShadow = "#ddd";
let blink = keyframes`
    0%, 49.9999%{
        border-color:white;
        box-shadow:0 0 0 white;
    }
    50%,99.9999%{
        border-color:black;
        box-shadow:0px 4px 0 ${letterShadow};
    }
`

export let InputContainer = styled.div`
    position:relative;
    display:flex;
    align-content:space-around;
    justify-content:center;
    flex-wrap:wrap;
    max-width:70%;
    height:120px;
    
`
export let HiddenInput = styled.input`
    position:absolute;
    z-index:1;
    bottom:0;
    transform:scale(0);
`
export let OneChar = styled.p`
    transition:all 0.5s ease-in-out;
    background:white;
    height:30px;
    width:30px;
    margin:0;
    margin-right:10px;
    font-size:25px;
    border:0;
    border-bottom:5px solid rgba(0,0,0,1);
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    outline:none;
    box-shadow:0px 4px 0 ${letterShadow};
    ${({isFocused}) => isFocused && css`
    
        animation: ${blink} 1s linear infinite -1s;
    `}
    ${({hidden}) => hidden && css`
        display:none;
    `}
    z-index:10;
    &:disabled{
        background:white;
    }
    /* &::after{
        width:5px;
        height:5px;
        position:absolute;
        content:'';
        background:red;
        left:5px;
        bottom:-10px;

    } */
    &:first-of-type{
        &::before{
            content:'';
            width:4px;
            height:4px;
            position:absolute;
            background:black;
            box-shadow:
                /*down*/
                0 4px black,
                0 8px black,
                0 12px black, 
                0 16px black,
                0 20px black,
                0 24px black,
                /*down 2nd column*/
                4px 0 black,
                4px 4px black,
                4px 8px black,
                4px 12px black, 
                4px 16px black,
                4px 20px black,
                4px 24px black,
                /*triangle*/
                8px 4px black,
                
                8px 8px black,
                12px 8px black,
                
                8px 12px black,
                12px 12px black,
                16px 12px black,

                8px 16px black,
                12px 16px black,

                8px 20px black,
                /*traingle's shadow*/
                8px 0 ${pointerShadow},
                 

                12px 4px ${pointerShadow},

                16px 8px ${pointerShadow},

                20px 12px ${pointerShadow},

                16px 16px ${pointerShadow},

                12px 20px ${pointerShadow},

                8px 24px ${pointerShadow}

                
                
                
                ;
            
                
            
            top:0px;
            /* clip-path:polygon(0% 0% , 50% 0% , 100% 50%, 50% 100% , 0% 100%); */
            transform:translate(-45px,6px);
        }
    }
    &:nth-of-type(16){
        display:none;
    }
`