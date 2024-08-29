import Image from "next/image";

export default function AuthLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen justify-center flex bg-[#F3F9FF] lg:bg-white lg:justify-between">

            <div className="flex flex-1 justify-center">
                {children}
            </div>

            <div className="hidden lg:flex bg-[#F3F9FF] flex-1 justify-end pl-5" >
                <div className="flex items-center">
                    <Image src="/screen-mockup-login.svg" alt="mockup" width={520} height={500} className="w-auto border-black rounded-lg !rounded-r-none border-l-4 border-y-4" ></Image>
                </div>
            </div>
        </div>
    )
}
