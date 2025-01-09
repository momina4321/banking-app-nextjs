"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { redirect, useRouter } from 'next/navigation';
import { getUser } from "@/app/utils/auth";

export default function Login() {

    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()




    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const user = getUser()

        if (user) {
            if (email === user.email && password === user.password) {
                // Authentication successful
                router.push('/')
            } else {
                // Authentication failed
                setError('Invalid username or password.');
            }
        } else {
            setError('Invalid username or password.');
        }

    }

    return <div className="flex h-screen flex-col justify-center items-center md:w-1/2 ">
        <div className="flex flex-col gap-10">

            <div className="flex gap-1">
                <Image src="/logo.svg" width={33} height={32} alt="logo" />
                <p className="text-3xl font-bold font-serif" >Horizon</p>
            </div>

            <div className="flex flex-col gap-6">
                <p className="text-3xl font-semibold md:text-4xl">Log in</p>
                <p className="text-base text-customGray">Welcome back! Please enter your details.</p>
            </div>

            <form method="POST" onSubmit={onFormSubmit} className="flex flex-col gap-6 w-full">
                <div className="w-full">
                    <label className="text-customGray font-medium">Email</label>
                    <input value={email} onChange={(e) => { setemail(e.target.value) }} type="email" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " required placeholder="Enter your email" ></input>
                </div>

                <div>
                    <label className="text-customGray font-medium">Password</label>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " required placeholder="Enter your password" ></input>
                </div>

                {error && <p className="font-semibold text-red-600" >{error}</p>}
                <button className="bg-[#1A73E9] text-white w-full h-11 py-[10px] px-[18px] rounded-lg ">Login</button>
            </form>

            <div className="flex justify-center gap-1" >
                <p className="hidden md:flex">  Don&apos;t have an account?</p> <a className="text-[#1A73E9] font-semibold" href="/register">Sign up</a>
            </div>
        </div>

    </div>
}
