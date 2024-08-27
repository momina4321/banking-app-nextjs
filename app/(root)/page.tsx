"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Table from "../components/ui/table";



export default function Homepage() {

    const banks = [{
        name: 'Chase Bank', savings: '$2,588.12', id: 1,
    }, {
        name: 'Bank of America', savings: '$3,288.11', id: 2,
    },
    {
        name: 'First Platypus Bank', savings: '$1,208.14', id: 3,
    },

    ]

    const [activeTab, setactiveTab] = useState(1)


    return <div className="py-[48px] px-[32px]  gap-[32px]  flex flex-col "> {/**homepage */}
        <div className="flex flex-col  gap-5"> {/**heading and description */}
            <div className="flex font-semibold text-3xl gap-2">
                <div>   Welcome, </div><div className="text-customblue"> Adrian</div>

            </div>
            <div className="font-medium text-[16px] text-customGray">Access & manage your account and transactions efficiently.</div>

        </div> {/**heading container ends */}

        <div className="flex p-[24px] gap-6 border-[1px] border-[#EAECF0] rounded-xl  "> {/**rounded container */}
            <div className="flex flex-col"> {/**pie chart container  */}
                <Image src="/piechart.svg" width={120} height={120} alt="piechart"></Image>

            </div>

            <div className="flex flex-col  w-full gap-6">
                <div className="flex text-[16px] justify-between ">
                    <div className="font-semibold ">2 Bank Accounts</div>
                    <div className="flex">
                        <Link href="" className="flex gap-3 text-customblue font-semibold ">
                            <Image src="plus.svg" alt="plus" width={20} height={20}   >
                            </Image>    Add Bank </Link>
                    </div>
                </div> {/** add banks container  */}
                <div className="flex flex-col gap-2" >
                    <div className="flex text-customGray text-sm"> Total Current Balance</div>
                    <div className="flex font-semibold text-3xl ">$2,698.12</div>
                </div>
            </div>

        </div> {/**end rounded container */}

        <div className="flex flex-col gap-8 " >
            <div className="flex  justify-between items-center " >
                <div className="font-semibold text-2xl" >Recent Transactions</div>
                <div><button className="w-[85px] text-sm font-semibold px-[10px] py-[16px] border-[#D0D5DD] border-[1px] rounded-lg" >View All</button></div>
            </div>
            <div className="flex gap-4 border-b-[1px] border-[#EAECF0]  ">
                {banks.map((bank) => {

                    return (<button key={bank.id} onClick={() => { setactiveTab(bank.id) }} className={activeTab === bank.id ? "px-1 border-b-[3px] pb-[10px] border-customblue  text-customblue font-semibold text-[16px]" : "pb-[12px] px-1 text-customGray font-semibold text-[16px] "}  > {bank.name}  </button>)
                })}
            </div>

            <div className="flex bg-[#F5FAFF] px-6 py-5 gap-[18px] rounded-lg  items-center">
                <div className="flex flex-col">
                    <div className="rounded-[50%] bg-customblue text-white width-[40px] height-[40px] p-3">
                        <div className="font-semibold text-[16px]">   CB</div>
                    </div>

                </div>
                <div className="flex flex-col gap-[7px]  w-full">
                    <div className="flex   justify-between">

                        {banks.map((bank) => {
                            if (bank.id === activeTab) {
                                return (<div key={bank.id} className="font-semibold text-[#194185] text-xl">{bank.name}</div>)
                            }
                        })}

                        <div className="bg-[#ECFDF3] rounded-2xl py-[2px] font-medium px-[10px] text-[#027A48]" > savings</div>
                    </div>
                    <div>
                        {banks.map((bank) => {
                            if (bank.id === activeTab) {
                                return (<div key={bank.id} className="font-semibold text-customblue text-xl ">{bank.savings}</div>)
                            }
                        })}
                    </div>
                </div>
               
            </div> <Table/>

        </div>


    </div>
}