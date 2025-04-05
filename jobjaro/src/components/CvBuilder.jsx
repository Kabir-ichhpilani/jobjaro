import React from 'react';
import Navbar from "./Navbar.jsx";
import Sidebar from "./SideBar.jsx";
import group from "../assets/Group 3523.png";
import pic from "../assets/gg1.png";
import pic2 from "../assets/Group 3473.png"
import pic3 from "../assets/Group 1597885318.png"
import tick from "../assets/Group 3452.png"
import cross from "../assets/Group 1597885319.png"
const ResumeParserPage = () => {
  return (
      <main className={"max-w-screen"}>
    <Navbar />
        <div className={"flex flex-col md:flex-row"}>
        <Sidebar />
    <div className="bg-gray-100 max-w-[1280px] p-6">
      <div className="bg-white rounded-lg shadow mb-8 p-8">
        {/* Header Section */}
        <div className="flex px-2 py-4 flex-col lg:flex-row  content-between justify-between">
          <div className="lg:col-span-2 lg:-ml-4">
            <h1 className="text-4xl font-bold max-w-[700px] text-purple-900 mb-4">
              The Most Advanced and Accurate<br />
              AI Resume Parser
            </h1>
            <p className="text-xl max-w-[550px] mb-6">
              Trusted by job boards, HR platforms, ATS, and recruiters to
              hire top talent faster with our AI resume analysis tool.
            </p>

            <h2 className="text-xl font-normal mb-4">Steps to use our resume parsing software</h2>

            <div className="flex flex-col md:flex-row items-center">
              <div className="flex flex-row items-center text-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4e0684]">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <p className="text-xs w-32">Upload Resumes in Bulk or Individually</p>
              </div>

              <div className="hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4e0684]">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              <div className="flex flex-row items-center text-center mb-4 md:mb-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4e0684] inline-block">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="9" x2="15" y2="9"></line>
                    <line x1="9" y1="13" x2="15" y2="13"></line>
                    <line x1="9" y1="17" x2="15" y2="17"></line>
                  </svg>
                </div>
                <p className="text-xs inline-block -ml-2 w-32">Our AI will extract Resume Data</p>
              </div>

              <div className="hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4e0684]">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              <div className="flex flex-row items-center text-center">
                <div className="w-12 h-12  bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-900 inline-block">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </div>
                <p className="text-xs inline-block ml-2 text-left w-40">Our AI will upload all the extracted data into your hiring pool after analyzing their skills</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1  shadow-2xl lg:w-[320px] ml-3 rounded-lg bg-white p-3  mt-8 lg:mt-0">
            <div className="border border-dashed border-purple-700 rounded-lg p-6 text-center">
              <h3 className="font-semibold mb-4">START PARSING NOW!</h3>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16  flex items-center justify-center">
                  <img src={pic} />
                </div>
              </div>
              <p className="text-purple-900 mb-2">
                Drag and drop a resume<br />
                file or click to upload
              </p>
              <p className="text-xs text-gray-500 mb-4">
                PDF, doc, docx or word file (maximum 5 files)
              </p>
              <button className="bg-purple-900 text-xs text-white py-1 px-4 rounded w-[200px]">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* Candidates Section */}
      <div className={"flex flex-col lg:flex-row gap-4 lg:gap-4  py-4"}>
        <div className={"bg-white rounded-lg w-[800px] h-auto shadow "}>
        <div className="mb-8">
          <div className="p-6">
          <h3 className="text-lg font-semibold mb-8">
            As per the Resume uploaded the profile of the candidates are:
          </h3>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <span className="font-medium">Candidates</span>
              <span className="ml-2 text-gray-500 text-sm">1,254</span>
            </div>

            <div className="flex space-x-2">
              <button className="bg-[#F2F2FE] p-4 text-purple-900 h-12  text-xs py-1 px-3 rounded-lg flex items-center">
                <img src={pic2}/>
                <span className="mr-1 ml-2">Contact Selected</span>
                <span className=" text-xs px-1">(56)</span>
              </button>
              <button className=" text-purple-900 flex items-center bg-[#F2F2FE] text-xs py-1 px-3 rounded-lg">
                <img src={pic3} className="mr-1" />
                <span className="mr-1 ml-2">Compare</span>

              </button>
              <button className="text-purple-900 text-xs leading-[10px] py-1 px-3 underline">
                Download CSV
              </button>
            </div>
          </div>
          </div>

          {/* Table */}
          <div className="  overflow-y-scroll">
            <table className="lg:w-full border-spacing-y-6 border-separate">
              <thead className="bg-gray-100">
                <tr>
                  <th className=" pl-4 text-left font-medium  w-10">
                    <img  src={cross}/>
                  </th>
                  <th className="py-3 px-4 text-gray-400 font-normal text-left">Name</th>
                  <th className="py-3 px-4 text-gray-400 font-normal text-left">Location</th>
                  <th className="py-3 px-4 text-gray-400 font-normal text-left">Current Job</th>
                  <th className="py-3 px-4 text-gray-400 font-normal text-left">Exp.</th>
                  <th className="py-3 px-4 text-gray-400 font-normal text-left">Score</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Jane Foster", location: "New Jersey", job: "UI/UX Job", exp: "5 years", score: 64, color: "bg-yellow-500" },
                  { name: "Jane Foster", location: "New Jersey", job: "UI/UX Job", exp: "5 years", score: 81, color: "bg-blue-500" ,bgColor: "bg-gray-100"},
                  { name: "Jane Foster", location: "New Jersey", job: "UI/UX Job", exp: "5 years", score: 94, color: "bg-purple-900" },
                  { name: "Jane Foster", location: "New Jersey", job: "UI/UX Job", exp: "5 years", score: 74, color: "bg-purple-900",bgColor: "bg-gray-100" }
                    ,
                  { name: "Jane Foster", location: "New Jersey", job: "UI/UX Job", exp: "5 years", score: 94, color: "bg-yellow-900" },
                  { name: "Jane Foster", location: "New Jersey", job: "UI/UX Job", exp: "5 years", score: 92, color: "bg-red-900",bgColor: "bg-gray-100" }
                ].map((candidate, index) => (
                  <tr key={index} className={` ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} bg-gray-100`}>
                    <td className="pl-4">
                      <img src={tick} alt="Tick" className="w-6 h-6" />
                    </td>
                    <td className="py-4 px-4 font-medium">{candidate.name}</td>
                    <td className="py-4 px-4">{candidate.location}</td>
                    <td className="py-4 px-4">{candidate.job}</td>
                    <td className="py-4 px-4">{candidate.exp}</td>
                    <td className="py-4 px-4">
                      <span className={`${candidate.color} text-white text-sm py-1 px-4 rounded-full`}>
                        {candidate.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

        {/* AI CV Matches Section */}
        <div className={"bg-white flex flex-col  p-6 "}>
          <h3 className="text-xl font-semibold text-center mb-4">AI CV Matches</h3>
          <img src={group} alt="AI CV Matches" className="w-[380px] h-auto rounded-lg" />


        </div>
      </div>

    </div>
        </div>
      </main>
  );
};

export default ResumeParserPage;