import {useEffect, useState} from 'react'
export default function(value,delay){
 const [params,setParams]=useState(value)
 let timer
 useEffect(()=>{
    timer=setTimeout(()=>{
        setParams(value)
    },delay)
    return ()=>clearTimeout(timer)
 },[value])
 return params
}