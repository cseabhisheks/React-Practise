import {useState,useEffect} from 'react'
export default function Carousel() {
    const [idx,setIdx]=useState(1)
    const data = [
    {
        id: 1,
        title: "Mountain",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7"
    },
    {
        id: 2,
        title: "Forest",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b"
    },
    {
        id: 3,
        title: "Beach",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
        id: 4,
        title: "City",
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
    },
    {
        id: 5,
        title: "Desert",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35"
    }
]
const nextSlide=()=>{
   setIdx((idx+1)%data.length)
}
const prevSlide=()=>{
    setIdx((idx-1+data.length)%data.length)
}
useEffect(()=>{
    const i=setInterval(()=>{nextSlide()},4000)
    return ()=>clearInterval(i)
},[idx])
    return (<>
        <div className="m-5">
            <div className="relative mb-5 border-2 w-[full] h-[200px] overflow-hidden bg-black/20">
            <img src={data[idx].image}  alt="error" />
            <div className='absolute text-6xl text-white font-serif italic top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[10]'>{data[idx].title}</div>
            </div>
            <div className="flex justify-between">
                <button className="bordeer-2 bg-red-800 px-8 py-2  rounded-xl text-white " onClick={nextSlide}>Next</button>
                <button className="bordeer-2 bg-red-800 px-8 py-2  rounded-xl text-white "onClick={prevSlide}>Previous</button>
            </div>

        </div>
    </>)
}