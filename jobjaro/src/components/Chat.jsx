
import React, { useState } from "react"
import Navbar from "./Navbar.jsx"
import Sidebar from "./Sidebar.jsx"
import CandidateList from "./CandidateList.jsx"
import ChatWindow from "./ChatWindow.jsx"

export default function Chat() {
  const [selectedCandidate, setSelectedCandidate] = useState(null)

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <CandidateList onSelectCandidate={setSelectedCandidate} />
        <ChatWindow selectedCandidate={selectedCandidate} />
      </div>
    </div>
  )
}

