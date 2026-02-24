import React, { useState } from "react";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menu = [
        "Home",
        "About",
        "Experience",
        "Skills",
        "Services",
        "Portfolio",
        "Contact",
    ];

    return (
        <nav className="w-full bg-[#f4f8fb] py-6 px-35 flex items-center justify-between 
sticky top-0 z-50 ">

            {/* LOGO */}
            <h1 className="text-2xl font-bold  italic text-gray-900">Jay.</h1>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
                {menu.map((item, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer hover:text-blue-600 ${index === 0 ? "text-blue-600" : ""
                            }`}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            {/* DESKTOP ICONS */}
            <div className="hidden md:flex gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-50  rounded-full shadow-md cursor-pointer">
                    <a href="https://www.linkedin.com/in/jay-narayan-das-1b99b4208/">
                        <img src="/linkedin-icon.png" alt="LinkedIn" className="w-4 h-4" />

                    </a>
                </div>

                <div className="w-10 h-10 flex items-center justify-center  bg-blue-50  rounded-full shadow-md cursor-pointer">
                    <a href="https://x.com/situn_das_">
                        <img src="/x-icon.ico" alt="Twitter" className="w-4 h-4" />
                    </a>
                </div>

                <div className="w-10 h-10 flex items-center justify-center bg-blue-50  rounded-full shadow-md cursor-pointer">
                    <a href="https://www.instagram.com/situndas_official_/">
                        <img src="/instagram-icon-32.webp" alt="Instagram" className="w-4 h-4" />
                    </a>
                </div>
            </div>


            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
                {open ? (
                    <HiX size={28} onClick={() => setOpen(false)} />
                ) : (
                    <HiMenu size={28} onClick={() => setOpen(true)} />
                )}
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-lg py-6 md:hidden">
                    <ul className="flex flex-col items-center gap-6 text-gray-700 font-medium">
                        {menu.map((item, index) => (
                            <li key={index} className="hover:text-blue-600 cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex gap-3">
                        <div className="w-10 h-10 flex items-center justify-center bg-blue-50  rounded-full shadow-md cursor-pointer">
                            <img src="/linkedin-icon.png" alt="LinkedIn" className="w-5 h-5" />
                        </div>

                        <div className="w-10 h-10 flex items-center justify-center  bg-blue-50  rounded-full shadow-md cursor-pointer">
                            <img src="/x-icon.ico" alt="Twitter" className="w-5 h-5" />
                        </div>

                        <div className="w-10 h-10 flex items-center justify-center bg-blue-50  rounded-full shadow-md cursor-pointer">
                            <img src="/instagram-icon-32.webp" alt="Instagram" className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            )}

            {/* ICON STYLE */}
            <style jsx>{`
        .icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          cursor: pointer;
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
