import React, {Component} from 'react'

import SearchBox from './SearchBox/SearchBox'

import * as S from './styledComponents'



class App extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <S.GlobalStyle />
                <SearchBox />
            </>
         );
    }
}
 
export default App;