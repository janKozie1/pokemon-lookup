import  { useState, useRef, useEffect } from 'react'

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
        let fetchData = async(url,params,query) => {
            setIsLoading(true)
            try{
                let res = await fetch(url,{...params,body:JSON.stringify(query)})
                let parsed = await res.json()
                setResponse(parsed) 
            }catch(err){
                setError(err)
            }
            setIsLoading(false)
        }
        console.log(url,query)
        if(url && query)
            fetchData(url,params,query)
    },[query])
    return [response,error,isLoading]
}