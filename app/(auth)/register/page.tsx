
import Image from "next/image";


export default function Register() {

    return <div className="flex flex-col justify-center items-center w-1/2 gap-10 "> {/*register container   */}
                  <div className="flex flex-col max-w-[360px] gap-10 lg:w-[460px] "> {/** login container  */}

            <div className="flex gap-1" >
                <Image src="/logo.svg" width={33} height={32} alt="logo"></Image>
                <p className="text-2xl lg:text-3xl font-bold font-serif" >Horizon</p>
            </div> {/*logo container ends here  */}
            <div className="flex flex-col gap-6">
                <p className="text-3xl font-semibold  lg:text-4xl  ">Sign up</p>
                <p className="text-base text-customGray " >Please enter your details.</p>
            </div> {/*heading container here  */}

            <form className="flex flex-col gap-6">
                <div className="flex gap-[18px]">
                    <div>
                        <label className="text-customGray font-medium">First Name</label>
                        <input type="name" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " required placeholder="John" ></input>
                    </div>
                    <div>
                        <label className="text-customGray font-medium">Last Name</label>
                        <input type="name" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " required placeholder="Doe" ></input>
                    </div>
                </div> {/*first and last name container */}
                <div>
                    <label className="text-customGray font-medium">Address</label>
                    <input type="text" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD]" placeholder="Enter your address"></input>
                </div>
                <div className="flex gap-[18px]">
                    <div>
                        <label className="text-customGray font-medium">State</label> {/*state and postal code */}
                        <input type="text" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " placeholder="ex: NY" ></input>
                    </div>
                    <div>
                        <label className="text-customGray font-medium">Postal Code</label>
                        <input type="text" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " placeholder="ex: 1101" ></input>
                    </div>
                </div>
                <div className="flex gap-[18px] "> {/*DOB and SSN*/}
                    <div>
                        <label className="text-customGray font-medium">Date of Birth</label>
                        <input type="date" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " placeholder="yyyy-mm-dd" ></input>
                    </div>
                    <div>
                        <label className="text-customGray font-medium">SSN</label>
                        <input type="number" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD] " placeholder="ex: 1234" ></input>
                    </div>
                </div>

                <div>
                    <label className="text-customGray font-medium">Email</label>
                    <input type="email" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD]" placeholder="Enter your email"></input>
                </div>

                <div>
                    <label className="text-customGray font-medium">Password</label>
                    <input type="password" className="w-full h-11 py-[10px] px-[14px] rounded-lg border border-[#D0D5DD]" placeholder="Enter your password"></input>
                </div>

                <button className="bg-[#1A73E9] text-white w-full h-11 py-[10px] px-[18px] rounded-lg ">Sign up</button>

            </form> {/*form container ends here  */}
            <div className="flex justify-center gap-1" >
                Already have an account? <a className="text-[#1A73E9] font-semibold" href="/login">Login</a></div>
        </div>
    </div> 
}