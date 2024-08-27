"use client"
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./sidebar";

export default function SideMenu(){

    const [isOpen, setIsOpen] = useState(false)


    return(
        <div>
        <div className="lg:hidden block" onClick={()=>setIsOpen(!isOpen)} >
              <Image src="menu-icon.svg" width={20} height={20} alt="menu" />
        </div>
      
        </div>
    )
}