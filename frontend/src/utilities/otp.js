// use max and min range of otp to generate like 1111 to 9999
let max=9999
let min=1111
function OTPGenerator(){
    return Math.floor(Math.random()*(max-min+1))+min
}
console.log(OTPGenerator())

export default OTPGenerator