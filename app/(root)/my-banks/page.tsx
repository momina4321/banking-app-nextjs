import Image from "next/image";
import { banks } from "@/app/utils/constant";

export default function MyBanks() {

    return <div className=" py-[48px] px-[32px] gap-[32px] flex flex-col w-full items-center lg:items-stretch">
        <div className="flex flex-col  gap-5">
            <div className="flex font-semibold text-xl lg:text-3xl gap-2">
                <div> My Bank Accounts </div>
            </div>
            <div className="font-medium hidden lg:flex text-[16px] text-customGray">Access & manage your account and transactions efficiently.</div>
        </div>

        <div className="text-lg font-semibold">Your Cards</div>
        <div className="lg:flex-row flex flex-col w-[302px] lg:w-full gap-[40px]">
            {banks.map((bank, index) => (
                <div key={index} className="flex flex-col gap-[16px]">
                    <Image src="/creditcard.svg" width={305} height={182} alt="card" />
                    <div className="font-semibold text-lg text-customGray" >{bank.name} </div>
                    <div className="flex justify-between gap-[16px]">Spending this month <div>{bank.savings}</div> </div>
                    <div className="w-full bg-[#D1E9FF] rounded-full h-2.5">
                        <div className="bg-[#175CD3] h-2.5 rounded-full w-[80%]"></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}
