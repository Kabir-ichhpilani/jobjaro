import React from 'react';
import Sidebar from "./SideBar.jsx";
import Navbar from "./Navbar.jsx";
import circlee from "../assets/image-Photoroom 1.png";
import img1 from "../assets/Group (1).png";
import img2 from "../assets/Vector (2).png";
import img3 from "../assets/Vector (3).png";
import img4 from "../assets/Group (2).png";
import img5 from "../assets/image (1).png";
import img6 from "../assets/image (2).png";
import img7 from "../assets/image (3).png";
import img8 from "../assets/image (4).png";
import img9 from "../assets/image (5).png";
import img10 from "../assets/hello1.png";

const DashboardContent = () => {
    const interviewImages = [img5, img6, img7, img8, img9];
    const interviewNames = ['Jane Foster', 'Jasmine', 'Franklin', 'Michael De Santa', 'Lester'];

    return (
        <main className="bg-[#F6F8FA] min-h-screen">
            <Navbar />
            <div className="flex flex-col md:flex-row">
                <Sidebar />
                <div className="p-6 w-full">
                    {/* Overview Section */}
                    <div className="mb-6">
                        <h2 className="text-lg -ml-2 font-semibold mb-4">Overview</h2>
                        <div className="flex gap-2 flex-wrap">
                            {[{ img: img1, label: 'Active Jobs', count: 50 },
                                { img: img2, label: 'New Application', count: 42 },
                                { img: img3, label: 'Candidates Interviewed', count: 34 },
                                { img: img4, label: 'Candidates Shortlisted', count: 44 }]
                                .map(({ img, label, count }, index) => (
                                    <div key={index} className="p-4 rounded-lg flex items-center">
                                        <div className="w-12 h-12 border border-black bg-white rounded-full flex items-center justify-center mr-3">
                                            <img src={img} className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold">{count}</div>
                                            <div className="text-sm text-gray-500">{label}</div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* Recently Posted Jobs Section */}
                    <div className="rounded-lg mb-6">
                        <div className="flex justify-between p-4">
                            <h2 className="text-lg -ml-4 font-semibold">Recently Posted Job (36)</h2>
                            <div className="flex items-center">
                                <span className="mr-2">Today</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="4 6 8 10 12 6" />
                                </svg>

                            </div>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow">
                            {[1, 2].map((item) => (
                                <div key={item} className="mb-8 pb-4 pt-4 last:border-0 last:pb-0">
                                    <div className="flex justify-between mb-4">
                                        <div>
                                            <div className="flex items-center mb-1">
                                                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                                                <h3 className="font-semibold">UI/UX Designer</h3>
                                            </div>
                                            <div className="text-sm text-gray-500">New York, America</div>
                                            <div className="flex text-sm text-gray-500 mb-3">
                                                <div className="mr-6">Created on: 20 July 2020</div>
                                                <div>Expires: 20 July 2020</div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-5 gap-4.5 text-center">
                                            {['Applicants', 'New', 'Received', 'Rejected', 'Hired'].map((label, idx) => (
                                                <div key={idx}>
                                                    <div className="text-xs text-gray-500">{label}</div>
                                                    <div className="font-semibold bg-gray-200 w-14 h-14 rounded-lg mt-2 flex items-center justify-center">20</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-right flex items-center">
                                            <button className="text-md font-medium mr-4">View Applicants</button>
                                            <button className="text-lg font-bold bg-gray-200 rounded-lg w-6 h-8">:</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        {/* Upcoming Interviews */}
                        <div className="rounded-lg shadow ">
                            <div className="flex justify-between p-4 ">
                                <h2 className="text-lg font-semibold">Upcoming Interviews</h2>
                                <div className="flex items-center">
                                    <span className="mr-2">Select Job</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="4 6 8 10 12 6" />
                                    </svg>

                                </div>
                            </div>

                            <div className="p-4 overflow-y-scroll ">
                                <div className="flex mb-4 ">
                                    {['Today', 'Upcoming', 'Completed', 'Due'].map((btn, i) => (
                                        <button key={i} className={`pb-2 px-4 font-medium text-gray-500 ${i === 0 ? 'bg-gray-100' : ''}`}>{btn}</button>
                                    ))}
                                </div>

                                {interviewNames.map((name, index) => (
                                    <div key={index} className=" flex items-center justify-between py-3 mb-6 last:border-0">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 mr-4">
                                                <img src={interviewImages[index]} className="w-full h-full" alt={name} />
                                            </div>
                                            <div>
                                                <div className="font-medium">{name}</div>
                                                <div className="text-xs text-gray-500 flex items-center">
                                                    <span>For UI/UX Designer</span>
                                                    <span className="mx-1">•</span>
                                                    <span>Assigned to: Mr. Jones Bar</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm">At: 9:30 am</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Analytics Section */}
                        <div>
                            {/* Recent Job Post Performance */}
                            <div className=" rounded-lg shadow mb-6">
                                <div className="flex justify-between p-4">
                                    <h2 className="text-lg font-normal">Recent Job Post Performance</h2>
                                    <button><img src={img10} /></button>
                                </div>
                                <div className="p-4 flex items-center">
                                    <div className="w-1/2 flex justify-center">
                                        <img src={circlee} className="w-54 h-54 z-50" />
                                    </div>
                                    <div className="w-1/2">
                                        {[
                                            { color: "blue-500", label: "Views", value: 60 },
                                            { color: "green-500", label: "Applications", value: 20 },
                                            { color: "yellow-500", label: "Quality of Candidates", value: 10 },
                                            { color: "red-500", label: "Engagement Rate", value: 6 },
                                            { color: "blue-300", label: "Other", value: 4 },
                                        ].map(({ color, label, value }, i) => (
                                            <div className="flex items-center mb-2" key={i}>
                                                <div className={`w-6 h-6 rounded bg-${color} text-white text-xs flex items-center justify-center mr-2`}>{value}</div>
                                                <div>{label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Application Status Breakdown */}
                            <div className=" rounded-lg shadow">
                                <div className="flex justify-between p-4">
                                    <h2 className="text-lg font-normal">Application Status Breakdown</h2>
                                    <button><img src={img10} /></button>
                                </div>
                                <div className="p-4 flex items-center">
                                    <div className="w-1/2 flex justify-center">
                                        <img src={circlee} className="w-54 h-54 z-50" />
                                    </div>
                                    <div className="w-1/2">
                                        {[
                                            { color: "blue-500", label: "Pending", value: 60 },
                                            { color: "green-500", label: "Shortlisted", value: 20 },
                                            { color: "yellow-500", label: "Interview", value: 10 },
                                            { color: "red-500", label: "Rejected", value: 6 },
                                            { color: "blue-300", label: "Other", value: 4 },
                                        ].map(({ color, label, value }, i) => (
                                            <div className="flex items-center mb-2" key={i}>
                                                <div className={`w-6 h-6 rounded bg-${color} text-white text-xs flex items-center justify-center mr-2`}>{value}</div>
                                                <div>{label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default DashboardContent;
