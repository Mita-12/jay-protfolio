import React, { useState } from "react";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menu = [
        { label: "Home", id: "home" },
        { label: "About", id: "about" },
        { label: "Experience", id: "experience" },
        { label: "Skills", id: "skills" },
        { label: "Services", id: "services" },
        { label: "Portfolio", id: "portfolio" },
        { label: "Contact", id: "contact" },
    ];

    // Scroll to section function
    const handleNavigation = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setOpen(false);
    };

    // Close menu when a menu item is clicked
    const handleMenuItemClick = (sectionId) => {
        handleNavigation(sectionId);
    };

    return (
        <nav className="w-full bg-[#f4f8fb] py-4 px-4 sm:px-6 lg:px-8 xl:px-35 flex items-center justify-between sticky top-0 z-50">

            {/* LOGO */}
            <h1 className="text-2xl font-bold italic text-gray-900">Jay.</h1>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
                {menu.map((item, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer hover:text-[#1e8acb] transition-colors ${index === 0 ? "text-[#1e8acb]" : ""
                            }`}
                        onClick={() => handleMenuItemClick(item.id)}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>

            {/* DESKTOP ICONS */}
            <div className="hidden md:flex gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full shadow-md cursor-pointer hover:bg-blue-100 transition-colors">
                    <a href="https://www.linkedin.com/in/jay-narayan-das-1b99b4208/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin-icon.png" alt="LinkedIn" className="w-4 h-4" />
                    </a>
                </div>

                <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full shadow-md cursor-pointer hover:bg-blue-100 transition-colors">
                    <a href="https://x.com/situn_das_" target="_blank" rel="noopener noreferrer">
                        <img src="/x-icon.ico" alt="Twitter" className="w-4 h-4" />
                    </a>
                </div>

                <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full shadow-md cursor-pointer hover:bg-blue-100 transition-colors">
                    <a href="https://www.instagram.com/situndas_official_/" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram-icon-32.webp" alt="Instagram" className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
                {open ? (
                    <HiX size={28} onClick={() => setOpen(false)} className="cursor-pointer text-gray-700" />
                ) : (
                    <HiMenu size={28} onClick={() => setOpen(true)} className="cursor-pointer text-gray-700" />
                )}
            </div>

            {/* MOBILE MENU - FIXED POSITIONING */}
            {open && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-8 px-4 md:hidden flex flex-col items-center gap-8 animate-slideDown">
                    {/* MOBILE MENU ITEMS */}
                    <ul className="flex flex-col items-center gap-6 text-gray-700 font-medium w-full">
                        {menu.map((item, index) => (
                            <li 
                                key={index} 
                                className={`hover:text-[#1e8acb] cursor-pointer text-lg py-2 px-4 w-full text-center transition-colors ${
                                    index === 0 ? "text-[#1e8acb] font-semibold" : ""
                                }`}
                                onClick={() => handleMenuItemClick(item.id)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>

                    {/* MOBILE SOCIAL ICONS */}
                    <div className="flex gap-4 justify-center mt-2 pt-4 border-t border-gray-200 w-full">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full shadow-md cursor-pointer hover:bg-blue-100 transition-colors">
                            <a href="https://www.linkedin.com/in/jay-narayan-das-1b99b4208/" target="_blank" rel="noopener noreferrer">
                                <img src="/linkedin-icon.png" alt="LinkedIn" className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full shadow-md cursor-pointer hover:bg-blue-100 transition-colors">
                            <a href="https://x.com/situn_das_" target="_blank" rel="noopener noreferrer">
                                <img src="/x-icon.ico" alt="Twitter" className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full shadow-md cursor-pointer hover:bg-blue-100 transition-colors">
                            <a href="https://www.instagram.com/situndas_official_/" target="_blank" rel="noopener noreferrer">
                                <img src="/instagram-icon-32.webp" alt="Instagram" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Add animation keyframes */}
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;