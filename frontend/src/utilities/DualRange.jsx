import { useState } from 'react'
export default function DualRange() {
    const [min, setMin] = useState(20)
    const [max, setMax] = useState(80)

    const handleMin = (e) => {
        const value = e.target.value
        setMin(value)
    }
    const handleMax = (e) => {
        const value = e.target.value
        setMax(value)
    }
    return (<>
        <div className='flex flex-col items-center border-2'>
            <div className="border-2 w-[200px] h-5 m-5 rounded-xl bg-red-200 relative">
            <div
                className="bg-red-800 h-2 absolute top-1/2 -translate-y-1/2"
                style={{
                    left: `${min}%`,
                    width: `${max - min}%`
                }}
            />
            <input type="range" defaultValue='20' onChange={handleMin} className="w-full appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto absolute bg-transparent" />
            <input type="range" defaultValue="80" onChange={handleMax} className="w-full appearance-none pointer-events-none absolute  [&::-webkit-slider-thumb]:pointer-events-auto  bg-transparent" />
        </div>
        <div className='flex gap-5 font-bold'>
            <div>min: {min}</div>
            <div>max: {max}</div>
        </div>
        </div>
    </>)
}