import { useState } from 'react'
export default function UniqueNameGenerator() {
    const [data,setData]=useState()
   const unique=()=>{
    setData(crypto.randomUUID())
   }
   return (<>
    <button onClick={unique}>{!data?'generate':data}</button>
    </>)
}