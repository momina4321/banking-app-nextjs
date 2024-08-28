
import RightSidebar from "../components/righSidebar";
import Sidebar from "../components/sidebar";



export default function RootLayout({
    children,
  
}: Readonly<{
  children: React.ReactNode;
}>){

    return(
        <div className="relative flex flex-grow  ">
        <Sidebar/>
        {children}
        <RightSidebar/>
        </div>)
}