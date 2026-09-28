// pass classname like width height and anyother
import {useState,useEffect} from 'react'
export default function Skeleton({className}){
  return(<>
  <h1 className={className}></h1>
  </>)
}