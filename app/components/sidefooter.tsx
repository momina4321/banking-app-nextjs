"use client"
import Image from "next/image"
import { getUser } from "../utils/auth"
import { useRouter } from "next/navigation"

export default function SideFooter() {

    const user = getUser()
    const router = useRouter()

    const userLogout = () => {
        localStorage.removeItem('user')
        router.push('/login')
    }

    return (
        <div className="flex px-5 items-center justify-between py-6 border-t-2 border-[#EAECF0] mt-auto">
            <Image src="/jsmastery.svg" width={40} height={40} alt="js" />
            <div className="flex flex-col gap-1">
                <div className="font-semibold">{user.fname} {user.lname}</div>
                <div className="lg:block hidden text-[#475467]">{user.email}</div>
            </div>
            <div className="flex flex-col">

                <button onClick={() => userLogout()} >
                    <Image src="/log-out-01.svg" width={20} height={20} alt="logout" />
                </button>
            </div>
        </div>
    )
}
