import  { useState, useRef, useEffect } from 'react'
import {checkResponseStatus} from './functions'
export let usePrevious = (val) => {
    let ref = useRef()
    useEffect(()=>{
        ref.current = val
    },[val])
    return ref.current
}

export let useFetch = (url, params, query) => {
    let [isLoading,setIsLoading] = useState(false)
    let [response, setResponse] = useState(null)
    let [error, setError] = useState(null)
    
    useEffect(()=>{
        let fetchData =  (url,params,query) => {
            setIsLoading(true)
            fetch(url,{...params,body:JSON.stringify({query})})
                .then(checkResponseStatus)
                    .then(res => res.json())
                        .then(e=>{
                            setResponse(e);
                            setIsLoading(false);
                        })  
            .catch(err=>{
                setError(err)
                setIsLoading(false)
            })
        }
        if(url && query)
            fetchData(url,params,query)
    },[query])
    return [response,error,isLoading]
}


export let usePokemon = (name) => {
   
}