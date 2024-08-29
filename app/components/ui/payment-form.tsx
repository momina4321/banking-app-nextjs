"use client"
import { banks } from "@/app/utils/constant"
import { Dropdown } from "./dropdown"

export default function PaymentForm() {

    return (
        <div className="flex flex-col gap-[24px]  ">
            <form className="" >
                <div className=" flex gap-24 border-t-2 border-b-2 border-[#EAECF0]  py-[40px]" >
                    <div className="flex flex-col gap-[8px] w-[280px]  " >
                        <label className="flex text-[#344054] text-lg">Select Source Bank</label>
                        <div className="font-medium  hidden lg:flex text-sm text-[#475467]" > Select the bank account you want to transfer funds from </div>
                    </div> <Dropdown bank={banks[0]} setBank={() => { }} />
                </div>

                <div className="lg:flex-row flex flex-col gap-5 lg:gap-24 border-b-2 border-[#EAECF0]  py-[40px] " >
                    <div className="flex flex-col gap-[8px] w-[280px]  " >
                        <label className="flex text-[#344054] text-lg">Transfer Note  </label>
                        <div className="font-medium  hidden lg:flex text-sm text-[#475467]" > Please provide any additional information or instructions related to the transfer </div>
                    </div>

                    <textarea className="max-w-[512px]  py-[10px] px-[14px] rounded-lg border border-[#D0D5DD]" placeholder="Write a note"></textarea>
                </div>

                <div className="py-[40px] flex flex-col gap-[5px]  border-b-2 border-[#EAECF0] " >
                    <div className="flex font-semibold text-xl gap-2"> Bank Account Details</div>
                    <div className="font-medium  hidden lg:flex text-[16px] text-customGray" >Enter the bank account details of the recipient</div>
                </div>

                <div className="lg:flex-row flex flex-col gap-5 lg:gap-24 border-b-2 border-[#EAECF0]  py-[40px] " >
                    <label className="w-[280px] flex font-medium text-[#344054] text-lg">Recipient&apos;s Email Address  </label>

                    <input type="email" required className="max-w-[512px]  py-[10px] px-[14px] rounded-lg border border-[#D0D5DD]" placeholder="Enter email address" ></input>
                </div>

                <div className="lg:flex-row flex flex-col gap-5 lg:gap-24 border-b-2 border-[#EAECF0]  py-[40px] " >
                    <label className="w-[280px] flex font-medium text-[#344054] text-lg">Recipient&apos;s Bank Account Number  </label>

                    <input type="text" required className="max-w-[512px]  py-[10px] px-[14px] rounded-lg border border-[#D0D5DD]" placeholder="Enter the account number" ></input>
                </div>

                <div className="lg:flex-row flex flex-col gap-5 lg:gap-24  border-[#EAECF0]  py-[40px] " >
                    <label className="w-[280px] flex font-medium text-[#344054] text-lg">Amount  </label>

                    <input type="number" required className="  max-w-[512px] py-[10px] px-[14px] rounded-lg border border-[#D0D5DD]" placeholder="Enter amount" ></input>
                </div>
                <button className="bg-[#1A73E9] text-white w-full h-11 py-[10px] px-[18px] rounded-lg "> Transfer funds </button>
            </form>
        </div>
    )
}