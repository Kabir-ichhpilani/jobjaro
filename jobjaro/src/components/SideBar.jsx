import React from "react"
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
        <div className="bg-purple-900 md:inline hidden text-white w-[60px] md:w-[220px] min-h-screen flex flex-col fixed md:static z-50">
            {/* Menu items */}
            <div className="flex flex-col items-center md:items-start space-y-1 py-4">
                <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" />
                <SidebarItem icon={<User size={20} />} label="Our Profile" />
                <SidebarItem icon={<Briefcase size={20} />} label="Job Listings" />
                <SidebarItem icon={<Award size={20} />} label="Talent Pool" />
                <SidebarItem icon={<BarChart2 size={20} />} label="Skills Assessments" />
                <SidebarItem icon={<FileText size={20} />} label="Application Tracking" />
                <SidebarItem icon={<Upload size={20} />} label="Insights" />
                <SidebarItem icon={<Upload size={20} />} label="Bulk CV Upload" />
                <SidebarItem icon={<Users size={20} />} label="Team Access" active />
                <SidebarItem icon={<MessageSquare size={20} />} label="Chat"  />
            </div>

            {/* Footer area */}
            <div className="mt-auto mb-4 flex flex-col items-center md:items-start px-2 md:px-4">
                <div className="flex items-center justify-center md:justify-start px-2 py-2 hover:bg-purple-800 cursor-pointer rounded-md w-full">
                    <HelpCircle size={20} className="mr-0 md:mr-2" />
                    <span className="hidden md:inline">Support</span>
                </div>
                <button className="mt-4 bg-white text-purple-900 rounded-md py-2 px-2 text-xs flex items-center justify-center w-full">
                    <PlusCircle size={16} className="mr-0 md:mr-2" />
                    <span className="hidden md:inline">Post A New Job</span>
                </button>
            </div>
        </div>
    )
}

const SidebarItem = ({ icon, label, active }) => {
    return (
        <div
            className={`flex items-center justify-center md:justify-start w-full px-2 py-2 text-sm ${
                active ? "bg-purple-800" : "hover:bg-purple-800"
            } rounded-md`}
        >
            <span className="mr-0 md:mr-2">{icon}</span>
            <span className="hidden md:inline">{label}</span>
        </div>
    )
}

export default Sidebar
