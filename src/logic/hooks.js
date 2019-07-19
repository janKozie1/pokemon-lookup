import React, { useState, useRef, useEffect } from 'react'

export let usePrevious = (val) => {
    let ref = useRef();
    useEffect(()=>{
        ref.current = val;
    },[val])
    return ref.current;
}