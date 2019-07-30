import React, { useState, useEffect } from 'react'
import Form from './Form/Form'

import { useFetch } from '../../../logic/hooks'

let SearchBox = ({ setPokemon, setError }) => {
    let [query, setQuery] = useState(null)
    let [pokemon, error, isLoading] = useFetch(`http://127.0.0.1:8080/getPokemon`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
    }, query)

    let onFormSubmit = (e, userInput) => {
        e.preventDefault()
        setQuery(userInput.trim())
    }
    useEffect(() => {
        console.log(pokemon,error)
        if (pokemon) {
            setPokemon(pokemon)
        } else if (error) {
            setError(error)
        }
    }, [pokemon, error])
    return (
        <Form onFormSubmit={onFormSubmit} isLoading={isLoading} />
    )
}

export default SearchBox