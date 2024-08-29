"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { addUser, getUser } from "@/app/utils/auth";


export default function Register() {

    const [errors, setErrors] = useState([""]) //all the errors will be stored in an array
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [address, setAddress] = useState("")
    const [state, setState] = useState("")
    const [postalcode, setPostalCode] = useState("")
    const [dob, setDOB] = useState(Date)
    const [SSN, setSSN] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const router = useRouter()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const validatePassword = (pw: string) => {
        if (pw.length >= 8) {
            return ""
        }
        else {
            return "Password less than 8 characters."
        }
    }

    const validateEmail = (mail: string) => {
        if (!emailRegex.test(mail)) {
            return 'Please enter a valid email address.'
        }
        else {
            return ''
        }
    }

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const newErrors = [];

        if (validatePassword(password) != "") { //if there is error in the password
            newErrors[0] = validatePassword(password)
        }
        if (validateEmail(email) != "") { //if there is error in the email
            newErrors[1] = validateEmail(email)
        }

        if (errors.length > 0) {
            setErrors(newErrors)
        }
        else {
            const userData = { fname, lname, address, state, postalcode, dob, SSN, email, password }
            addUser(userData)
            router.push('/') //redirect to homepage
        }
    }


    return <div className="flex flex-col justify-center py-10 items-center px-[20px] md:w-2/3 gap-10 ">
        <div className="flex flex-col max-w-[500px] gap-10 lg:max-w-[460px] ">

            <div className="flex gap-1" >
                <Image src="/logo.svg" width={33} height={32} alt="logo" />
                <p className="text-2xl lg:text-3xl font-bold font-serif" >Horizon</p>
            </div> {/*logo container ends here  */}
            <div className="flex flex-col gap-6">
                <p className="text-3xl font-semibold  lg:text-4xl  ">Sign up</p>
                <p className="text-base text-customGray hidden md:flex " >Please enter your details.</p>
            </div> {/*heading container here  */}

            <form method="POST" className="flex flex-col gap-6" onSubmit={handleFormSubmit} >
                <div className="flex gap-[18px]">
                    <div>
                        <label className="text-customGray font-medium">First Name</label>
                        <input value={fname} onChange={(e) => { setfname(e.target.value) }} type="name" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " required placeholder="John" ></input>
                    </div>
                    <div>
                        <label className="text-customGray font-medium">Last Name</label>
                        <input value={lname} onChange={(e) => { setlname(e.target.value) }} type="name" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " required placeholder="Doe" ></input>
                    </div>
                </div> {/*first and last name container */}
                <div>
                    <label className="text-customGray font-medium">Address</label>
                    <input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD]" placeholder="Enter your address"></input>
                </div>
                <div className="flex gap-[18px]">
                    <div>
                        <label className="text-customGray font-medium">State</label> {/*state and postal code */}
                        <input type="text" value={state} onChange={(e) => { setState(e.target.value) }} className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " placeholder="ex: NY" ></input>
                    </div>
                    <div>
                        <label className="text-customGray font-medium">Postal Code</label>
                        <input type="text" value={postalcode} onChange={(e) => { setPostalCode(e.target.value) }} className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " placeholder="ex: 1101" ></input>
                    </div>
                </div>
                <div className="flex gap-[18px] ">
                    <div>
                        <label className="text-customGray font-medium">Date of Birth</label>
                        <input type="date" value={dob} onChange={(e) => { setDOB(e.target.value) }} className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " placeholder="yyyy-mm-dd" ></input>
                    </div>
                    <div>
                        <label className="text-customGray font-medium">SSN</label>
                        <input type="text" value={SSN} onChange={(e) => { setSSN(e.target.value) }} className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " placeholder="ex: 1234" ></input>
                    </div>
                </div>

                <div>
                    <label className="text-customGray font-medium">Email</label>
                    <input required onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD]" placeholder="Enter your email"></input>
                    {validateEmail(email) != "" && <p className="font-medium text-red-600 ">{errors[1]}</p>}
                </div>

                <div>
                    <label className="text-customGray font-medium">Password</label>
                    <input required onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD]" placeholder="Enter your password"></input>
                    {validatePassword(password) != "" && <p className="font-medium text-red-600 ">{errors[0]}</p>}
                </div>

                <button type="submit" className="bg-[#1A73E9] text-white w-full h-11 py-[10px] px-[18px] rounded-lg ">Sign up</button>

            </form>

            <div className="flex justify-center gap-1" >
                <p className="hidden md:flex"> Already have an account?</p> <a className="text-[#1A73E9] font-semibold" href="/login">Login</a>
            </div>
        </div>
    </div>
}
