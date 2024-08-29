"use client"
import { Dropdown } from "@/app/components/ui/dropdown"
import { Table } from "@/app/components/ui/table"
import { useState } from "react"
import { banks } from "@/app/utils/constant"

export default function TransactionHistory() {

    const [bank, setBank] = useState(banks[0])

    return <div className="   py-[48px] px-[32px]  gap-[32px] flex flex-col w-full ">
        <div className="flex flex-col  gap-5"> {/**heading and description */}
            <div className="flex font-semibold justify-between items-center text-xl lg:text-3xl gap-2">
                <div> Transaction History </div>
                <div>
                    <Dropdown bank={bank} setBank={setBank} />
                </div>
            </div>
            <div className="font-medium  hidden lg:flex text-[16px] text-customGray">Gain Insights and Track Your Transactions Over Time</div>
        </div>

        <div className={`flex flex-col md:flex-row p-[24px] gap-6 border-[1px] text-white rounded-xl ${bank.id === 1 ? "bg-customblue" : bank.id === 2 ? "bg-[#039855]" : "bg-[#D9569D]"}`}>

            <div className="flex flex-col justify-between w-full gap-6">
                <div className="font-semibold text-xl lg:text-3xl flex">{bank.name}</div>
                {/** add banks container  */}
                <div className="flex  text-sm"> Chase Growth Savings Account </div>
                <div className="flex font-semibold text-sm ">●●●● ●●●● ●●●● 9999</div>
            </div>

            <div className={`flex flex-col overflow-hidden rounded-xl gap-[16px] px-4 max-w-[165px] justify-center items-center ${bank.id === 1 ? "bg-[#6db6ff]" : bank.id === 2 ? "bg-[#38c485]" : "bg-[#d780b0]"}`}>
                <div className="flex flex-col gap-[16px]">
                    <div>Current Balance</div>
                    <div className=" text-xl lg:text-2xl font-semibold text-ellipsis">{bank.savings}</div>
                </div>
            </div>
        </div>

        <div className="flex justify-between items-center">
            <div className="font-semibold text-xl" >Transaction History</div>
            <div>
                <button className="max-w-[130px]  text-xs lg:text-sm font-semibold px-[10px] py-[16px] border-[#D0D5DD] border-[1px] rounded-lg" >Apply Filter</button>
            </div>
        </div>

        <Table bankid={bank.id} />
    </div >
}
