"use client"
import { useEffect, useState } from "react";
import RightSidebar from "../components/righSidebar";
import Sidebar from "../components/sidebar";
import { getUser } from "../utils/auth";
import { useRouter } from "next/navigation";



export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  const router=useRouter()
  const [authenticated,setAuthenticated] = useState(false)

useEffect(()=>{
  const user = getUser() //get user from local storage
     if (user){
      setAuthenticated(true)
     }else{
      router.push('/login')
      
     }
},[router] )
     
if (!authenticated) {
  // Redirecting state managed by useEffect
  return null; // Prevent rendering of content while redirecting
}
  

  return (
 
    <div className=" flex w-full  ">
      <Sidebar />
      <div className="flex w-full  h-screen  overflow-y-auto  " >
        <div className=" w-full min-h-full">
          {children}</div>
          <RightSidebar /></div>
    </div>)
}