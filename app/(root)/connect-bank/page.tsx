import Scroll from "@/app/components/ui/scroll"
import Image from "next/image"

export default function ConnectBank(){

    return (
        <div className="h-full gap-[10px] px-[32px] justify-center items-center flex flex-col  ">
         {Scroll("left")}
         {Scroll("right")}
</div>
    )
}