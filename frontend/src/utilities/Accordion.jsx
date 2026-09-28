import { useState } from 'react'
export default function Accordion() {
    const data = [
        {
            id: 1,
            title: "What is React?",
            content:
                "React is a JavaScript library used to build user interfaces, especially for single-page applications."
        },
        {
            id: 2,
            title: "What are Components?",
            content:
                "Components are reusable building blocks of a React application. They can contain UI, logic, and state."
        },
        {
            id: 3,
            title: "What is State?",
            content:
                "State is data managed by a component that can change over time and cause the component to re-render."
        },
        {
            id: 4,
            title: "What are Props?",
            content:
                "Props are values passed from a parent component to a child component. They are read-only."
        },
        {
            id: 5,
            title: "What is useState?",
            content:
                "useState is a React Hook that allows functional components to store and update state."
        }
    ]
    const [open, setOpen] = useState()

    const handle = (idx) => {
        if(idx==open){
            setOpen(-1)
        }
        else{
            setOpen(idx)
        }
    }

    return (<>
        {data.map((element, idx) => {
            return (
                <>
                    <div key={idx} className="border-2 m-5 p-4 rounded-xl flex justify-between">
                        {element.title}
                        <span className="font-extrabold cursor-pointer " onClick={()=>{handle(idx)}} >{idx ==open ?'-':'+'}</span>
                    </div>

                   {open==idx && <div className=" -mt-5 ml-5">{element.content}</div>}
                </>
            )
        })}

    </>)
}