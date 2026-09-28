import OTPGenerator from "./utilities/otp"
import { useState } from 'react'
export default function App() {
  const [OTP, setOTP] = useState()
  let max = 9999
  let min = 1111
  function OTPGenerator() {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const OTPGenratorfn = () => {
    setOTP(OTPGenerator())
  }

  const moveNextInput = (e) => {
    let id = Number(e.target.id)

    if (e.key == 'ArrowRight') {
      id += 1
    }
    else if (e.key == 'ArrowLeft') {
      id -= 1
    }
    document.getElementById(String(id))?.focus()
  }

  const cs = `bg-red-200 border-2 rouned-2xl h-[50px] w-[50px] mr-5 text-center`

  return (<>
    <div className="border-2 w-max absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 p-4">
      <h1 className="mb-5 text-sm capitalize text-gray-400">enter your OTP below</h1>
      <button onClick={OTPGenratorfn} className="text-black-200 capitalize  bg-green-200 py-2 px-4 m-5 rounded-3xl ">generate OTP <sup>{OTP ? OTP : 'generate new'}</sup> </button>
      <input autoFocus={true} onKeyDown={moveNextInput} className={cs} type="text" maxLength={1} name="first" id="1" />
      <input className={cs} onKeyDown={moveNextInput} type="text" maxLength={1} name="second" id="2" />
      <input className={cs} onKeyDown={moveNextInput} type="text" maxLength={1} name="third" id="3" />
      <input className={cs} onKeyDown={moveNextInput} type="text" maxLength={1} name="fourth" id="4" />
    </div>
  </>)
}