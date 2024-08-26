import Image from "next/image";



export default function AuthLayout({
    children,
  
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div  className="justify-center py-40 flex bg-[#F3F9FF] lg:bg-white lg:justify-between lg:p-0 ">
        
        {children}
        
        <div className="hidden lg:flex  bg-[#F3F9FF] pl-40  py-40 w-1/2 justify-end " >
            <Image src="/screen-mockup-login.svg" alt="mockup" width={938} height={682} className="border-black rounded-lg border-l-4 border-b-4 border-t-4  " ></Image>
        </div></div>)
}