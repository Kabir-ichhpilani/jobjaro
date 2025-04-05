import React from "react";
import Sidebar from "./SideBar.jsx";
import Navbar from "./Navbar.jsx";
import {
    Search,
    Bell,
    Home,
    User,
    Briefcase,
    Users,
    Brain,
    FileText,
    BarChart2,
    Upload,
    Users as TeamIcon,
    MessageSquare,
    LifeBuoy,
    PlusCircle
} from "lucide-react";

export default function TeamMembers() {
    const categories = [
        { title: "SUB-ADMIN", color: "bg-[#FFF1D7]", textColor: "bg-[#FCA917]", count: 20 },
        { title: "JOB POSTING ACCESS", color: "bg-[#EEDFFE]", textColor: "bg-[#571BAD]", count: 20 },
        { title: "TEST MANAGEMENT ACCESS", color: "bg-[#D0E7FF]", textColor: "bg-[#007AFF]", count: 20 },
        { title: "INTERVIEW ACCESS", color: "bg-[#B5EDD8]", textColor: "bg-[#15BB8A]", count: 20 },
        { title: "VIEW ACCESS", color: "bg-[#F9DCDD]", textColor: "bg-[#E71F26]", count: 20 },
    ];

    const membersByCategory = {
        "SUB-ADMIN": [
            { name: "John Doe", email: "hao-john82@gmail.com" },
            { name: "Gina Steuber", email: "hao-gina50@gmail.com" },
            { name: "John Doe", email: "hao-john82@gmail.com" },
            { name: "Jane Foster", email: "hao-jane69@gmail.com" },
            { name: "Michael", email: "hao-michael90@gmail.com" },
            { name: "Gina Steuber", email: "hao-gina50@gmail.com" }
        ],
        "JOB POSTING ACCESS": [
            { name: "Michael", email: "hao-michael90@gmail.com" },
            { name: "Jane Foster", email: "hao-jane69@gmail.com" },
            { name: "John Doe", email: "hao-john82@gmail.com" },

        ],
        "TEST MANAGEMENT ACCESS": [
            { name: "Gina Steuber", email: "hao-gina50@gmail.com" },
            { name: "Jane Foster", email: "hao-jane69@gmail.com" },

        ],
        "INTERVIEW ACCESS": [
            { name: "Michael", email: "hao-michael90@gmail.com" },

        ],
        "VIEW ACCESS": [
            { name: "Jane Foster", email: "hao-jane69@gmail.com" },
            { name: "John Doe", email: "hao-john82@gmail.com" },
            { name: "Gina Steuber", email: "hao-gina50@gmail.com" },
            { name: "Michael", email: "hao-michael90@gmail.com" },
            { name: "Jane Foster", email: "hao-jane69@gmail.com" },
            { name: "Michael", email: "hao-michael90@gmail.com" },

        ]
    };

    return (
        <div className="flex h-screen overflow-hidden">

            <main className="flex-1 bg-[#F8FAFC] overflow-y-auto">
                <Navbar />

<div className="md:flex">
    <Sidebar/>
    <div className="sm:pl-24 sm:ml-[50px] md:ml-[0px] md:pl-[0px]">
                <div className="px-4 sm:pl-4 md:px-6 lg:px-8 py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                    <h1 className="text-xl md:text-2xl font-bold text-gray-800 text-center md:text-left">
                        Team Members
                    </h1>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                        <div className="relative w-full sm:w-72">
                            <input
                                type="text"
                                placeholder="Search name or email here..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#5A189A] h-9"
                            />
                            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                        </div>

                        <button className="bg-[#5A189A] text-white h-9 px-5 rounded-md font-medium text-sm flex items-center justify-center gap-2">
                            <span>+</span> Add Team Member
                        </button>
                    </div>
                </div>

                <div className="px-4 md:px-8 lg:px-8 pb-6 mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {categories.map((category, idx) => (
                        <div key={idx} className="flex flex-col">
                            <div className={`${category.color} text-black  px-[15px] py-1.5  flex items-center rounded-md justify-between`}>
                                <span className="text-[11px] font-semibold">{category.title}</span>
                                <span className={`${category.textColor} text-white  rounded-lg px-2 py-0.5 text-xs`}>{category.count}</span>
                            </div>
                            <div className="bg-transparent mt-2 rounded-b-lg  ">
                                <div className="py-4 flex flex-col gap-4">
                                    {membersByCategory[category.title].map((member, i) => (
                                        <div
                                            key={i}
                                            className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-sm transition relative"
                                        >
                                            <div className=" items-start gap-1">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 relative ">
                                                        <img
                                                            src={`https://api.dicebear.com/6.x/initials/svg?seed=${member.name}`}
                                                            alt={member.name}
                                                            className="w-full h-full object-cover"
                                                        />

                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold">{member.name}</div>
                                                        <div className="text-[9.5px] text-gray-500">{member.email}</div>
                                                    </div>
                                                </div>
                                                <hr className="my-2 border border-gray-200" />
                                                <div className="text-[13px] text-gray-700">Human Resources Manager</div>
                                                <div className="text-xs text-gray-400">HR Department</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
    </div>
</div>
            </main>
        </div>
    );
}

