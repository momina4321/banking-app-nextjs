import Image from "next/image";



export default function Login() {

    return    <div className="flex flex-col justify-center items-center w-1/2 "> {/*login div   */}
            <div className="flex flex-col w-[360px] gap-10"> {/** login container  */}
                <div className="flex gap-1 " >
                    <Image src="/logo.svg" width={33} height={32} alt="logo"></Image>
                    <p className="text-3xl font-bold font-serif" >Horizon</p>
                </div> {/*logo div ends here  */}
                <div className="flex flex-col gap-6">
                    <p className="text-3xl font-semibold  md:text-4xl  ">Log in</p>
                    <p className="text-base text-customGray " >Welcome back! Please enter your details.</p>
                </div> {/*heading ends here  */}

                <form className="flex flex-col gap-6">
                    <div>
                        <label className="text-customGray font-medium">Email</label>
                        <input type="email" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " required placeholder="Enter your email" ></input>
                    </div>
                    <div>
                        <label className="text-customGray font-medium">Password</label>
                        <input type="password" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " required placeholder="Enter your password" ></input>
                    </div>
                    <button className="bg-[#1A73E9] text-white w-full h-11 py-[10px] px-[18px] rounded-lg ">Login</button>

                </form> {/*form div ends here  */}
                <div className="flex justify-center gap-1" >
                    Don't have an account? <a className="text-[#1A73E9] font-semibold" href="/register">Sign up</a></div>

            </div>

        </div> 
}