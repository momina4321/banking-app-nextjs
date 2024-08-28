"use client";

import Image from "next/image";
import Link from "next/link";

export default function SideFooter() {
    return (
        <div className="flex  px-5 items-center justify-between py-6 border-t-2 border-[#EAECF0] mt-auto ">
            <Image src="/jsmastery.svg" width={40} height={40} alt="js" />
            <div className="flex flex-col gap-1  ">
                <div className="font-semibold">Adrian Hajdin</div>
                <div className="lg:block hidden text-[#475467]">adrian@jsmastery.pro</div>
            </div>
            <div className="flex flex-col">
                <Link href="#">
                    <Image src="/log-out-01.svg" width={20} height={20} alt="logout" />
                </Link>
            </div>
        </div>
    );
}
