
"use client"

import Image from "next/image"
import Link from "next/link"

export default function RightSidebar() {
    return (
        <div className="hidden items-stretch relative lg:flex flex-col w-[392px] pb-[32px] border-l-[1px] border-[#EAECF0] gap-8  ">
            <Image src="/rightside.svg" width={392} height={120} alt="rightimg" />
            <div className="flex flex-col gap-6 px-[25px] " >
                <Image src="/jsmastery.svg" className="absolute top-20 left-3 " width={96} height={96} alt="pfp" />
                <div className="flex flex-col gap-1 pt-[20px]" ><div className="font-semibold text-2xl" > Adrian Hajdin</div><div className="text-[#475467] text-[16px]" >adrian@jsmastery.pro</div> </div>

                <div className="flex w-full justify-between items-center">

                    <div className="font-semibold text-lg" >My Banks</div>
                    <Link className="flex gap-3 text-customblue font-semibold" href="" ><Image src="./plus.svg" width={20} height={20} alt="addicon" /> Add Bank</Link>
                </div>

                <div className="flex flex-col " >
                    <Image src="/Cards.svg" width={344} height={222} alt="cards" />

                </div>


            </div>

            <div className="flex flex-col  border-t-[1px] border-[#EAECF0] gap-6 px-[25px] pt-[24px] ">

                <div className="flex w-full justify-between items-center  ">

                    <div className="font-semibold text-lg" >My Budgets</div>
                    <button ><Image src="./dots-vertical.svg" width={20} height={20} alt="dropdown" /> </button>
                </div>

                <div className="flex   rounded-xl bg-[#F5FAFF]  p-4 gap-[18px]" >
                    <div className="flex   flex-col items-center justify-center  rounded-[20px] bg-[#D1E9FF] w-[45px] h-[40px] " ><Image src="/monitor-04.svg" width={20} height={20} alt="monitor" /></div>
                    <div className="flex    flex-col gap-[8px] w-full " >
                        <div className="flex justify-between " >
                            <div className="text-[#194185]" >Subscriptions</div>
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

        </div>
    )
}