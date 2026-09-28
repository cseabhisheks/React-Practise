import OTPGenerator from "./utilities/otp"
import {useRef} from 'react'
export default function App() {
  const cs = `bg-red-200 border-2 rouned-2xl h-[50px] w-[50px] mr-5 text-center`
  return (<>
    <div className="border-2 w-max absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 p-4">
      <h1 className="mb-5 text-sm capitalize text-gray-400">enter your OTP below</h1>
      <button onClick={()=>{alert(OTPGenerator())}} className="text-black-200 capitalize  bg-green-200 py-2 px-4 m-5 rounded-3xl ">generate OTP</button>
      <input autoFocus={true} className={cs} type="text" maxLength={1} name="first" id="" />
      <input className={cs} type="text" maxLength={1} name="second" id="" />
      <input className={cs} type="text" maxLength={1} name="third" id="" />
      <input className={cs} type="text" maxLength={1} name="fourth" id="" />
    </div>
  </>)
}