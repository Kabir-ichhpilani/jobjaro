import React from 'react';
import Navbar from "./Navbar.jsx";
import Sidebar from "./SideBar.jsx";
import group from "../assets/Group 3990.png";
import group1 from "../assets/Group 3994.png";
import group2 from "../assets/Group 3997.png";
import group3 from "../assets/Group 3996.png";
import group4 from "../assets/Group 3995.png";
import img2 from "../assets/Vector (2).png";
import img3 from "../assets/Vector (3).png";
import img4 from "../assets/Vector (4).png";

const Insights = () => {
    return (
        <main>
        <Navbar />
            <div className={"flex flex-col md:flex-row"}>
        <Sidebar />
        <div className="p-6 bg-gray-50">
            {/* Overview Section */}
            <h2 className="text-lg font-semibold mb-4">Overview</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 lg:pr-16 text-white ">
                {/* Total Applicants */}
                <div className="bg-[#FEDD69] text-black rounded-lg p-4 flex justify-between items-center">
                    <div>
                        <div className="text-sm">Total Applicants</div>
                        <div className="text-3xl inline-block font-bold mt-1">592</div>
                        <div className="text-sm  ml-2 inline-block font-medium">↑ 35%</div>
                    </div>
                    <div className="bg-white rounded-full p-3">
                        <div className="w-8 h-8  rounded flex items-center justify-center">
                            <img src={img2} alt="Total Applicants" className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Interview Schedule */}
                <div className="bg-[#5470C6]  rounded-lg p-4 flex justify-between items-center">
                    <div>
                        <div className="text-sm">Interview Schedule</div>
                        <div className="text-3xl inline-block font-bold mt-1">53</div>
                        <div className="text-sm ml-2  inline-block font-medium">↓ 15%</div>
                    </div>
                    <div className="bg-white rounded-full p-3">
                        <div className="w-8 h-8  rounded-full flex items-center justify-center">
                           <img src={img3} alt="Interview Schedule" className="w-5 h-6" />
                        </div>
                    </div>
                </div>

                {/* Profile Visited */}
                <div className="bg-[#FFA777] text-black rounded-lg p-4 flex justify-between items-center">
                    <div>
                        <div className="text-sm">Profile Visited</div>
                        <div className="text-3xl inline-block font-bold mt-1">233</div>
                        <div className="text-sm inline-block ml-2 font-medium">↑ 65%</div>
                    </div>
                    <div className="bg-white rounded-full p-3">
                        <div className="w-8 h-8  rounded-full flex items-center justify-center">
                            <img src={img4} alt="Profile Visited" className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Job Post Insights */}
                <div >
                    <img src={group} className={"w-full h-full"} />
                </div>


                {/* Interview Scheduled */}
                <div>
                    <img src={group1} className={"w-full h-full"}/>
                </div>
            </div>

            {/* Three Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Not Qualified Overview */}
                <div>
                    <img src={group2} className={"w-full h-full"} />
                </div>

                {/* Performance Charts */}
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Recent Job Post Performance */}
                    <div >
                        <img src={group3} className={"w-full h-full"} />
                    </div>


                    {/* Application Status Breakdown */}
                    <div>
                        <img src={group4} className={"w-full h-full"} />
                    </div>
                </div>
            </div>
        </div>
            </div>
        </main>
    );
};

export default Insights;