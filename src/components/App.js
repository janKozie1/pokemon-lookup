import React, {Component} from 'react'
import Main from './Main/Main'

import * as S from './styledComponents'



class App extends Component {
    render() { 
        return ( 
            <>
                <S.GlobalStyle />
                <Main />
            </>
         );
    }
}
 
export default App;