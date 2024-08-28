import PaymentForm from "@/app/components/ui/payment-form";

export default function PaymentTransfer() {
    return <div className=" py-[48px] px-[32px]  gap-[32px] flex flex-col w-full">
        <div className="flex flex-col  gap-5"> {/**heading and description */}
            <div className="flex font-semibold text-xl lg:text-3xl gap-2">
                <div>   Payment Transfer</div>

            </div>
            <div className="font-medium  hidden lg:flex text-[16px] text-customGray">Please provide any specific details or notes related to the payment transfer.</div>

        </div>
        <div className=" flex flex-col gap-[5px]" >
            <div className="flex font-semibold text-xl gap-2"> Transfer Details</div>
            <div className="font-medium  hidden lg:flex text-[16px] text-customGray" >Enter the details of the recipient</div>
        </div>
        <PaymentForm />
    </div>
}