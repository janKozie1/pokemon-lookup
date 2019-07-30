import React from 'react'
import Form from './Form/Form'


let SearchBox = ({ setQuery }) => {
    let onFormSubmit = (e, userInput) => {
        e.preventDefault()
        let parsed = userInput.trim();
        if(parsed)
            setQuery(parsed)
    }
    return (
        <Form 
            onFormSubmit={onFormSubmit}  
        />
    )
}

export default SearchBox