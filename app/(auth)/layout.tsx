import Image from "next/image";



export default function AuthLayout({
    children,

}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen justify-center  flex bg-[#F3F9FF] lg:bg-white lg:justify-between  ">

            {children}

            <div className="hidden  lg:flex  bg-[#F3F9FF]    w-1/2 justify-end " >
               <div className="top-20  flex bottom-20 fixed right-0 border-black rounded-lg border-l-4 border-b-4 border-t-4  ">
                <Image src="/screen-mockup-login.svg"  alt="mockup" width={520} height={500} className="w-full" ></Image>
           </div>
           
            </div></div>)
}