import React from 'react'
import TeamMembers from "./components/TeamMembers.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Insights from "./components/Insights.jsx";
import ResumeParserPage from "./components/CvBuilder.jsx";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
       <Router>
            <Routes>

                <Route path="/" element={<Dashboard />} />
                <Route path="/team-members" element={<TeamMembers />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/resume-parser" element={<ResumeParserPage />} />
                {/* Add more routes as needed */}
            </Routes>
       </Router>
    )
}
export default App
