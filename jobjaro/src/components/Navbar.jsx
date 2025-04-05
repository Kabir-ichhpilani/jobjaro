import React, { useState } from "react";
import jacoblogo from "../assets/JacobLogo.png";
import profile from "../assets/profile.png";
import one from "../assets/one.png";
import notificationbell from "../assets/notificationbell.png";
import messages from "../assets/messages.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="py-3 px-4 lg:px-6 flex items-center justify-between  relative z-50" >
            {/* Logo and Brand */}
            <div className="flex items-center">
                <div className="flex items-center mr-4">
                    <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center">
                        <img src={jacoblogo} alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="ml-2 font-bold text-lg">JOBJARO</span>
                </div>
            </div>

            {/* Hamburger Menu for mobile + tablet */}
            <div className="lg:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-gray-700 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Nav links for desktop only */}
            <div className="hidden lg:flex space-x-8">
                <button className="text-gray-800 hover:text-purple-700">Home</button>
                <button className="text-gray-800 hover:text-purple-700">Job Post</button>
                <button className="text-purple-700 font-medium">My Space</button>
                <button className="text-gray-800 hover:text-purple-700">About Us</button>
                <button className="text-gray-800 hover:text-purple-700">Top Candidates</button>
            </div>

            {/* Right section - Always visible */}
            <div className="flex items-center ml-4">
                <img src={messages} alt="Messages" className="w-6 h-6 ml-4" />
                <img src={notificationbell} alt="Notifications" className="w-6 h-6 ml-4" />
                <span className="ml-2 text-sm text-gray-600 hidden sm:inline">Notifications</span>
                <img src={one} alt="1" className="w-4 h-4 ml-2" />
                <div className="w-8 h-8 rounded-full overflow-hidden ml-4">
                    <img src={profile} alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Mobile/Tablet dropdown menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md px-4 py-4 lg:hidden z-40">
                    <div className="flex flex-col space-y-4">
                        <button className="text-gray-800 hover:text-purple-700 text-left">Home</button>
                        <button className="text-gray-800 hover:text-purple-700 text-left">Job Post</button>
                        <button className="text-purple-700 font-medium text-left">My Space</button>
                        <button className="text-gray-800 hover:text-purple-700 text-left">About Us</button>
                        <button className="text-gray-800 hover:text-purple-700 text-left">Top Candidates</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
