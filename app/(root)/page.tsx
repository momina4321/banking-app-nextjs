import Image from "next/image";
import Link from "next/link";



export default function Homepage() {
    return <div className="py-[48px] px-[32px] w-full gap-[32px] h-screen  flex flex-col "> {/**homepage */}
        <div className="flex flex-col  gap-5"> {/**heading and description */}
            <div className="flex font-semibold text-3xl ">
                <div>   Welcome, </div><div className="text-customblue"> Adrian</div>

            </div>
            <div className="font-medium text-[16px] text-customGray">Access & manage your account and transactions efficiently.</div>

        </div> {/**heading container ends */}

        <div className="flex p-[24px] gap-6 border-[1px] border-[#EAECF0] rounded-xl w-[703px] "> {/**rounded container */}
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








        </div>


    </div>
}