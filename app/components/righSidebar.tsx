
"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { getUser } from "../utils/auth"
import { banks } from "../utils/constant"

export default function RightSidebar() {

    const cardslength = banks.length;

    const [isOpen, setIsOpen] = useState(false)
    const user = getUser()

    return (

        <div className="flex-shrink-0 " >

            {!isOpen && (

                <button className="pt-[32px] lg:relative fixed -top-3 right-0 pr-5 " onClick={() => { setIsOpen(true) }} ><Image src="/profile-major.svg" width={30} height={30} alt="menu" /> </button>
            )
            }

            {isOpen &&
                <div className="fixed h-screen right-0  items-stretch overflow-x-hidden  bg-white  w-[290px]  -top-2    flex flex-col  lg:w-[390px] pb-[32px] border-l-[1px] border-[#EAECF0] gap-8  ">

                    <Image src="/rightside.svg" width={392} height={120} alt="rightimg" />
                    <button onClick={() => setIsOpen(false)} >
                        <Image src="/line-angle-right-icon.svg" width={10} height={10} alt="arrow" className="invert absolute top-[20px] left-[270px]  lg:top-[20px] lg:left-[360px] " />
                    </button>
                    <div className="flex flex-col gap-6 px-[25px] " >
                        <Image src="/jsmastery.svg" className="absolute  top-10 lg:top-20 lg:left-3 " width={96} height={96} alt="pfp" />
                        <div className="flex flex-col gap-1 " ><div className="font-semibold text-xl md:text-2xl" >{user.fname} {user.lname}</div><div className="text-[#475467] text-[16px]" >{user.email}</div> </div>

                        <div className="flex justify-between  items-center">

                            <div className="font-semibold text-base lg:text-lg" >My Banks</div>
                            <Link className="flex gap-3 text-customblue font-semibold  " href="" ><Image src="./plus.svg" width={20} height={20} alt="addicon" /><p className="hidden lg:block" >Add Bank</p> </Link>
                        </div>


                        <div className="flex flex-col lg:w-[400px] w-[200px]" >
                            <Image src="/Cards.svg" width={344} height={222} alt="cards" />

                        </div>


                    </div>

                    <div className="flex flex-col  border-t-[1px] border-[#EAECF0] gap-6 px-[25px] pt-[24px] ">

                        <div className="flex justify-between items-center  ">

                            <div className="font-semibold text-base lg:text-lg" >My Budgets</div>
                            <button ><Image src="./dots-vertical.svg" width={20} height={20} alt="dropdown" /> </button>
                        </div>

                        <div className="flex   rounded-xl bg-[#F5FAFF]  p-4 gap-[18px]" >
                            <div className="flex   flex-col items-center justify-center  rounded-[20px] bg-[#D1E9FF] w-[40px] lg:w-[45px] h-[40px] " ><Image src="/monitor-04.svg" width={20} height={20} alt="monitor" /></div>
                            <div className="flex    flex-col gap-[8px] w-full " >
                                <div className="flex justify-between " >
                                    <div className="text-[#194185] " >Subscriptions</div>
                                    <div className="text-[#175CD3]" > $25 left</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="w-full bg-[#D1E9FF] rounded-full h-2.5 ">
                                        <div className="bg-[#175CD3] h-2.5 rounded-full w-[45%] " ></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex   rounded-xl bg-[#FEF6FB]  p-4 gap-[18px]" >
                            <div className="flex   flex-col items-center justify-center  rounded-[20px] bg-[#FCE7F6] w-[45px] h-[40px] " ><Image src="/shopping-bag-02.svg" width={20} height={20} alt="monitor" /></div>
                            <div className="flex    flex-col gap-[8px] w-full " >
                                <div className="flex justify-between " >
                                    <div className="text-[#851651]" >Food and Booze</div>
                                    <div className="text-[#C11574]" > $120 left</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="w-full bg-[#FCE7F6] rounded-full h-2.5 ">
                                        <div className="bg-[#C11574] h-2.5 rounded-full w-[80%] " ></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex   rounded-xl bg-[#F6FEF9]  p-4 gap-[18px]" >
                            <div className="flex   flex-col items-center justify-center  rounded-[20px] bg-[#D1FADF] w-[45px] h-[40px] " ><Image src="/coins-01.svg" width={20} height={20} alt="monitor" /></div>
                            <div className="flex    flex-col gap-[8px] w-full " >
                                <div className="flex justify-between " >
                                    <div className="text-[#054F31]" >Savings</div>
                                    <div className="text-[#027A48]" > $50 left</div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="w-full bg-[#D1FADF] rounded-full h-2.5 ">
                                        <div className="bg-[#027A48] h-2.5 rounded-full w-[60%] " ></div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>}
        </div>
    )
}