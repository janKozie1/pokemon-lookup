import React, {useState} from 'react';
import Form from './Form/Form'
let SearchBox = () =>{
    let [isLoading, setIsLoading] = useState(false)
    let onFormSubmit = (e, value) =>{
        console.log(value)
        setIsLoading(true);
        e.preventDefault();
        fetch(`http://127.0.0.1:8080/getPokemon`,{
           method:"POST",
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({query:value.trim()}) 
        }).then(e => e.json()).then((res)=>{
            console.log(res);
            setIsLoading(false)
        }).catch(err =>{
            console.log(err)
            setIsLoading(false)
        })
    }
    return (
        <Form onFormSubmit={onFormSubmit} isLoading={isLoading}/>
    )
}

export default SearchBox;