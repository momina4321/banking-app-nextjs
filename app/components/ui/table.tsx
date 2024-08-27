import Image from "next/image"

export default function Table(){
    const content = [{
        name:'Spotify', type: 'Subscriptions', status: 'Processing', amount:'-$15.00',date:'Wed 1:00pm', icon: '/spotify.svg'
    },
    {
        name:'Alexa Doe', type: 'Deposit', status: 'Success', amount:'+$88.00',date:'Wed 2:45am',icon:'/alexa.svg'
    },
    {
        name:'Figma', type: 'Income', status: 'Processing', amount:'+$18.99',date:'Tue 6:10pm',icon:'/figma.svg'
    },
    {
        name:'Fresh F&V', type: 'groceries', status: 'Success', amount:'-$88.00',date:'Tue 12:15pm',icon:'/grocery.svg'
    },
    {
        name:'Sam Sulek', type: 'Food', status: 'Declined', amount:'-$40.20',date:'Tue 5:40am',icon:'/sam.svg'
    },
]
    return(
        <table className=" table-auto gap-6 ">
<thead className="text-left" >
    <tr  className="bg-[#F9FAFB] text-[#475467]  h-[44px] border-b-[1px] border-[#EAECF0] ">
      <th className=" px-[24px] py-[16px]">Transaction</th>
      <th className=" px-[24px] py-[16px]">Amount</th>
      <th className=" px-[24px] py-[16px]">Status</th>
      <th className=" px-[24px] py-[16px]">Date</th>
      <th className=" px-[24px] py-[16px]">Category</th>
    </tr>
  </thead>
  <tbody>
 
    {content.map((data,index)=>{
        return(  <tr key={index}  className={` h-[72px] border-b-[1px] border-[#EAECF0] ${data.status==="Success"?" bg-[#F6FEF9] ": data.status==="Declined"?"bg-[#FFFBFA] ":"  " } `}  >
        <td className="text-[16px] font-semibold  px-[24px] py-[16px]  "> <div className="flex gap-3  items-center" ><Image src={data.icon} alt="icon" width={40} height={40} /> <div>{data.name}</div> </div></td>
        <td className={` px-[24px] py-[16px] font-semibold text-[16px]  ${data.amount.startsWith("+")?"text-[#039855]":"text-[#F04438]"}`} >{data.amount}</td>
       <td className=" px-[24px] py-[16px]"> <div className={ `inline-flex items-center text-sm  px-[8px] py-[2px]  font-semibold border-[1.5px] rounded-2xl ${data.status==="Success"?"text-[#027A48] bg-[#ECFDF3] gap-1   ": data.status==="Declined"?"text-[#B42318] gap-1 bg-[#FEF3F2]   ":" text-[#344054] bg-[#F2F4F7] gap-1  " }` } ><div className={`w-2 h-2 rounded-full ${data.status==="Success"?"bg-[#027A48]":data.status==="Declined"?"bg-[#B42318]":"bg-[#344054]"}`} ></div> {data.status}</div> </td>
        <td className=" px-[24px] py-[16px]" >{data.date}</td>
      <td className=" px-[24px] py-[16px]" >  <div className={`inline-flex  items-center text-sm  px-[8px] py-[2px] font-semibold  border-[2.25px] rounded-2xl ${data.type==="Subscriptions" || data.type ==="Groceries"?"border-[#1570EF] text-[#1570EF]":data.type==="Deposit" || data.type ==="Income" ? "border-[#039855] text-[#039855]" : "border-[#DD2590] text-[#DD2590]" }`} >{data.type} </div> </td>
        
        </tr>  )
    })}
  
  </tbody>
        </table>
    )
}