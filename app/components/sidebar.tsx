"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import SideFooter from "./sidefooter"

const navlinks = [
    { name: 'Home', icon: '/home-2.svg', href: "/" },
    { name: 'My Banks', icon: '/dollar-circle.svg', href: "/my-banks" },
    { name: 'Transaction History', icon: '/receipt-item.svg', href: "/transaction-history" },
    { name: 'Payment Transfer', icon: '/money-send.svg', href: "/payment-transfer" },
    { name: 'Connect Bank', icon: '/card-add.svg', href: "/connect-bank" },
]

export default function Sidebar() {

    const pathname = usePathname()
    const [search, setSearch] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const filteredLinks = navlinks.filter(link =>
        link.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="items-stretch left-0 z-50 top-0 lg:relative flex-shrink-0">

            {!isOpen
                ? <div className="py-2 px-5">
                    <button className="rounded-full w-10 h-10 bg-black" onClick={() => { setIsOpen(true) }}>
                        <Image className="invert p-2" src="/menu-icon.svg" width={40} height={40} alt="menu" />
                    </button>
                </div>
                : <div className={`h-screen bg-white lg:bg-transparent rounded-2xl border-b-[1px] border-r-[1px] flex flex-col border-r-[#EAECF0] w-[250px] md:w-[300px] pt-8 gap-6`}>
                    <div className="flex px-5 gap-1 justify-between items-center">
                        <Image src="/logo.svg" width={33} height={32} alt="logo" />
                        <p className="text-2xl lg:text-3xl font-bold font-serif">Horizon</p>
                        <div className=" pl-16">
                            <button onClick={() => { setIsOpen(false) }}>
                                <Image src="/cross.svg" width={15} height={15} alt="cross" />
                            </button>
                        </div>
                    </div>

                    <div className="relative flex gap-2 px-[24px]">
                        <Image src="/search-lg.svg" alt="search" width={20} height={20} className="absolute top-3 left-[35px]" />
                        <input value={search} onChange={handleChange} className="w-full h-11 py-[10px] pr-[14px] rounded-lg border border-[#D0D5DD] pl-10 " placeholder="Search" />
                    </div>

                    <div className="flex flex-col px-4 gap-1">
                        {filteredLinks.map((link, index) => {
                            const isActive = pathname === (link.href)
                            return (
                                <Link key={index} href={link.href} className={isActive ? "bg-[#0179FE] items-center text-[16px] flex gap-2 py-4 px-3 text-white  font-semibold rounded-md " : "items-center text-[16px] flex gap-2 py-4 px-3  font-semibold "} >
                                    <Image width={24} height={24} src={link.icon} alt={link.name} className={isActive ? "brightness-[3] invert-0" : ""} />
                                    {link.name}
                                </Link>
                            )
                        })}
                    </div>
                    <SideFooter />
                </div>
            }
        </div>
    )
}
