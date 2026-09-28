import { useState } from 'react'
export default function Pagination() {
    const [fetch, setFetch] = useState([])
    const data = [
        { id: 1, name: "Aarav Sharma", email: "aarav@example.com", role: "Developer" },
        { id: 2, name: "Riya Singh", email: "riya@example.com", role: "Designer" },
        { id: 3, name: "Arjun Kumar", email: "arjun@example.com", role: "Developer" },
        { id: 4, name: "Priya Verma", email: "priya@example.com", role: "Manager" },
        { id: 5, name: "Rahul Gupta", email: "rahul@example.com", role: "Developer" },
        { id: 6, name: "Ananya Patel", email: "ananya@example.com", role: "Designer" },
        { id: 7, name: "Vivek Yadav", email: "vivek@example.com", role: "Developer" },
        { id: 8, name: "Neha Sharma", email: "neha@example.com", role: "Tester" },
        { id: 9, name: "Aditya Singh", email: "aditya@example.com", role: "Developer" },
        { id: 10, name: "Sneha Gupta", email: "sneha@example.com", role: "Designer" },
        { id: 11, name: "Karan Verma", email: "karan@example.com", role: "Manager" },
        { id: 12, name: "Pooja Kumar", email: "pooja@example.com", role: "Tester" },
        { id: 13, name: "Rohan Patel", email: "rohan@example.com", role: "Developer" },
        { id: 14, name: "Kavya Singh", email: "kavya@example.com", role: "Designer" },
        { id: 15, name: "Nikhil Sharma", email: "nikhil@example.com", role: "Developer" },
        { id: 16, name: "Simran Yadav", email: "simran@example.com", role: "Tester" },
        { id: 17, name: "Mohit Gupta", email: "mohit@example.com", role: "Developer" },
        { id: 18, name: "Ishita Verma", email: "ishita@example.com", role: "Designer" },
        { id: 19, name: "Varun Kumar", email: "varun@example.com", role: "Manager" },
        { id: 20, name: "Meera Patel", email: "meera@example.com", role: "Developer" }
    ]
    const fetchData = (idx) => {
        setFetch(data.slice(idx,idx+5))
    }


    return (<>
        {Array.from({ length: 4 }).map((e, idx) => (
            <button key={idx} className="border-2 bg-blue-600 w-[50px] h-[50px] m-5" onClick={()=>fetchData(idx)}>{idx + 1}</button>
        )
        )}
        <div className='flex flex-wrap'>
            {fetch.map((e, idx) => (
                <>
                    <div className='border-2 w-[200px] m-5'>

                        <div>{e.name}</div>
                        <div>{e.email}</div>
                    </div>
                </>
            ))}
        </div>


    </>)
}