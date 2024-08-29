"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { redirect, useRouter } from 'next/navigation';
import { getUser } from "@/app/utils/auth";



export default function Login() {


    const [email,setemail] = useState("")
    const [password, setPassword] = useState("")
    const [error,setError] = useState("")
    const router = useRouter()


    useEffect(()=>{
        const user = getUser()
        if (user){
            router.push('/')
        }
    },[router])


    const onFormSubmit = (e:React.FormEvent ) => {

      e.preventDefault()
     
      const user = getUser()

      if (user){
      if (email === user.email && password === user.password ) {
        // Authentication successful
        router.push('/')
      } else {
        // Authentication failed
        setError('Invalid username or password.');
      }
    }else{
        setError('Invalid username or password.');

    }

    }



    return    <div className="flex flex-col justify-center items-center w-1/2 "> {/*login div   */}
            <div className="flex flex-col  gap-10  "> {/** login container  */}
                <div className="flex gap-1 " >
                    <Image src="/logo.svg" width={33} height={32} alt="logo"></Image>
                    <p className="text-3xl font-bold font-serif" >Horizon</p>
                </div> {/*logo div ends here  */}
                <div className="flex flex-col gap-6">
                    <p className="text-3xl font-semibold  md:text-4xl  ">Log in</p>
                    <p className="text-base hidden md:flex text-customGray " >Welcome back! Please enter your details.</p>
                </div> {/*heading ends here  */}

                <form method="POST" onSubmit={onFormSubmit} className="flex flex-col gap-6">
                    <div>
                        <label className="text-customGray font-medium">Email</label>
                        <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " required placeholder="Enter your email" ></input>
                    </div>
                    <div>
                        <label className="text-customGray font-medium">Password</label>
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " required placeholder="Enter your password" ></input>
                    </div>
                   { error &&  <p className="font-semibold text-red-600" >{error}</p>}
                    <button className="bg-[#1A73E9] text-white w-full h-11 py-[10px] px-[18px] rounded-lg ">Login</button>

                </form> {/*form div ends here  */}
                <div className="flex justify-center gap-1" >
                  <p className="hidden md:flex" >  Don't have an account?</p> <a className="text-[#1A73E9] font-semibold" href="/register">Sign up</a></div>

            </div>

        </div> 
}