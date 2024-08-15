import {Sidebar} from "@/components";
import {adminMenus} from "@/data";

const Admin=({ children })=>{
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="relative w-56 h-screen bg-gray-200 overflow-x-hidden">
                <Sidebar menus={adminMenus}/>
            </div>

            {/* Main Content */}
            <div className="flex-1 relative overflow-x-hidden ">
                <main className="px-5 py-10 bg-[#FAFBFF] min-h-screen overflow-x-auto">
                    {/*<Navbar />*/}
                    {children}
                </main>
            </div>
        </div>
    )
}
export default Admin