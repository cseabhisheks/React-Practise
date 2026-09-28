import {useState} from 'react'
export default function App() {
    const [tab,setTab]=useState(0)
    const data = [
        {
            id: 1,
            title: "Home",
            content: "Welcome to the home page. Here you can see an overview of the application."
        },
        {
            id: 2,
            title: "Profile",
            content: "This section contains your personal profile information and account details."
        },
        {
            id: 3,
            title: "Settings",
            content: "Here you can manage application preferences, notifications, and other settings."
        },
        {
            id: 4,
            title: "About",
            content: "This application is built using React and provides a simple tab-based interface."
        }
    ]
    return (<>
        <div className="flex gap-5 m-5 border-b-2 border-red-400">
            {
                data.map((e, idx) => (
                    <>
                        <div className={`border-2 px-8 py-4 cursor-pointer ${tab==e.id?'bg-red-200':''}`} onClick={()=>{setTab(e.id)}} key={idx}>{e.title}</div>
                    </>
                ))
            }
        </div>
        <div>{data[tab-1].content}</div>

    </>)
}