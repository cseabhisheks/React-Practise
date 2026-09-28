import { useState } from 'react'
export default function Popup() {
    const [count, setCount] = useState(0)
    return (<>
    {/* <div className='absolute border-[10px] w-screen h-screen backdrop-blur-sm '> */}
        <div className="border-2 bg-green-400 text-center h-[200px] w-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            hello buddy kaise ho
        </div>
    {/* </div> */}
        <button className="border-2 p-4 bg-red-400" onClick={() => { setCount(count + 1) }}>click me {count}</button>
    </>)
}