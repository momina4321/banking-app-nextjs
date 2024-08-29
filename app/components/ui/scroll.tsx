import Image from "next/image"

export default function Scroll(animate:string){



    const scrollitems = ['/spotifylogo.svg','/bestbuy.svg','/Amazon.svg','/walmart.svg','/apple.svg','/Uber.svg','/Netflix.svg','target.svg']


    return    <div className=" max-w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] overflow-hidden ">
    <ul className={`flex items-center gap-[16px]  justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${animate==="left"?"animate-infinite-scroll-l":"animate-infinite-scroll-r"} ` }>
        {scrollitems.map((icon,index)=>{
            return (<div key={index} className="flex w-[125px] items-center  h-[125px] lg:w-[154px] lg:h-[154px] bg-[#F1F1F1] rounded-[200px] " ><li><Image src={icon} alt="icon" width={99} height={28.4} /></li></div> )
        })}
                
   
    </ul>      

         
</div> 
}