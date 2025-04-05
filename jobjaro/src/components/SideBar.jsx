import React from "react"
import a1 from "../assets/a1.png"
import a2 from "../assets/a2.png"
import a3 from "../assets/a3.png"
import a4 from "../assets/a4.png"
import a5 from "../assets/a5.png"
import a6 from "../assets/a6.png"
import a7 from "../assets/a7.png"
import a8 from "../assets/a8.png"
import a9 from "../assets/a9.png"

import a10 from "../assets/a10.png"
import a11 from "../assets/a11.png"
import a12 from "../assets/a12.png"
import {
    LayoutDashboard,
    User,
    Briefcase,
    Award,
    BarChart2,
    FileText,
    Upload,
    Users,
    MessageSquare,
    HelpCircle,
    PlusCircle,
} from "lucide-react"

const Sidebar = () => {
    return (
        <div className="bg-purple-900 md:inline-block hidden text-white w-[60px] rounded-md md:min-w-[230px] min-h-screen flex flex-col fixed md:static z-50">
            {/* Menu items */}
            <div className="flex flex-col items-center md:items-start space-y-1 px-6 py-8">
                <SidebarItem icon={a1 } label="Dashboard" link={"/"} />
                <SidebarItem icon={a2} label="Our Profile" link={"/"} />
                <SidebarItem icon={a3} label="Job Listings" link={"/"}  />
                <SidebarItem icon={a4} label="Talent Pool" link={"/"}  />
                <SidebarItem icon={a5} label="Skills Assessments" link={"/"}  />
                <SidebarItem icon={a6} label="Application Tracking" link={"/"}  />
                <SidebarItem icon={a7} label="Insights" link={"/insights"} />
                <SidebarItem icon={a8} label="Bulk CV Upload" link={"/resume-parser"}  />
                <SidebarItem icon={a9} label="Team Access" link={"/team-members"} />
                <SidebarItem icon={a10} label="Chat" link={"/"}  />
            </div>

            {/* Footer area */}
            <div className="mt-auto mb-4 flex flex-col items-center md:items-start px-2 md:px-4">
                <div className="flex items-center justify-center md:justify-start px-4 py-2 hover:bg-purple-800 cursor-pointer rounded-md w-full">
                    <img src={a11} className={"mr-2"}/>
                    <span className="hidden md:inline">Support</span>
                </div>
                <button className="mt-4 bg-white text-purple-900 rounded-md py-2 px-2 text-xs flex items-center justify-center w-full">
                    <img src={a12} className="w-4 h-4 mr-2" />
                    <span className="hidden md:inline">Post A New Job</span>
                </button>
            </div>
        </div>
    )
}

const SidebarItem = ({ icon, label, active,link }) => {
    return (
        <a href={link}>
        <div
            className={`flex items-center justify-center md:justify-start w-full px-2 py-2 text-sm ${
                active ? "bg-purple-800" : "hover:bg-purple-800"
            } rounded-md`}
        >
            <img src={icon} className="mr-0 md:mr-2"/>
            <span className="hidden md:inline">{label}</span>
        </div>
        </a>
    )
}

export default Sidebar
