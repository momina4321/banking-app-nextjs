"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navlinks = [
    { name: 'Home', icon: '/home-2.svg', href: "/" },
    { name: 'My Banks', icon: '/dollar-circle.svg', href: "/my-banks" },
    { name: 'Transaction History', icon: '/receipt-item.svg', href: "/transaction-history" },
    { name: 'Payment Transfer', icon: '/money-send.svg', href: "/payment-transfer" },
    { name: 'Connect Bank', icon: '/card-add.svg', href: "#" },
]

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setisOpen] = useState(true) 

    return (

       

        <div className=" h-screen flex flex-col w-[280px] pt-8 border-r-[#EAECF0] border-r-[1px] gap-6"  > {/* sidebar container  */}
           
        
          
          
            <div className="flex px-5 gap-1" >
                <Image src="/logo.svg" width={33} height={32} alt="logo"></Image>
                <p className="text-2xl lg:text-3xl font-bold font-serif" >Horizon</p>
            </div> {/*logo container ends here  */}

            <div className="relative flex gap-2 px-[24px]" >
                <Image src="/search-lg.svg" alt="search" width={20} height={20} className="absolute top-3 left-[35px]" ></Image>
                <input className="w-full h-11 py-[10px] pr-[14px] rounded-lg border border-[#D0D5DD] pl-10 " placeholder="Search">

                </input>
            </div> {/** end search container */}
            <div className="flex flex-col px-4  gap-1" > {/** navigation links container  */}
                {navlinks.map((link, index) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link key={index} href={link.href} className={isActive? "bg-[#0179FE] items-center text-[16px] flex gap-2 py-4 px-3 text-white  font-semibold rounded-md " : "items-center text-[16px] flex gap-2 py-4 px-3  font-semibold "} >
                            <Image width={24} height={24} src={link.icon} alt={link.name} className={isActive?"brightness-[3] invert-0":""} ></Image>
                            {link.name}</Link>
                    )
                }
                )}
            </div>
     </div>   
    )

}