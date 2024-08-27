
import RightSidebar from "../components/righSidebar";
import Sidebar from "../components/sidebar";
import SideMenu from "../components/sidemenu";



export default function RootLayout({
    children,
  
}: Readonly<{
  children: React.ReactNode;
}>){

    return(
        <div className="flex flex-grow overflow-auto h-full w-full justify-between ">
        <Sidebar/>
        {children}
        <RightSidebar/>
        </div>)
}