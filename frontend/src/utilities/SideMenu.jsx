import { FaHamburger } from "react-icons/fa";
import { useState } from 'react'
export default function SideMenu() {
    const [isOpen, setOpen] = useState(true)
    return (<>
        {isOpen ?
            <nav className='border-2 p-4'>
                <ul>
                    <div className="flex justify-between">
                        <span className='text-3xl font-extrabold'>MENU</span>
                        <span onClick={() => setOpen(false)}>x</span>
                    </div>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            : <FaHamburger onClick={() => setOpen(true)} className=" border-2 text-3xl m-5 " />
        }
    </>)



}