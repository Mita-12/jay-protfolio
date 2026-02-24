import React from "react";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { BiTrendingUp } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

const Hero = () => {
    return (
        <section className="min-h-screen bg-[#f4f8fb] px-35 py-6">

            {/* HERO CONTENT */}
            <div className="grid md:grid-cols-2 items-center mt-16 gap-10">

                {/* LEFT */}
                <div>
                    <div className="inline-flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 mb-6">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Available for new opportunities
                    </div>

                    <h2 className="text-5xl font-serif italic text-gray-800 mb-3">
                        Hey, there
                    </h2>

                    <h1 className="text-6xl font-bold text-[#1e8acb] mb-4">
                        JAY NARAYAN DAS
                    </h1>

                    <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                        Digital Marketing Executive
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
                        Specialized in driving organic growth through technical SEO,
                        data-driven insights, and strategic content optimization.
                        Transforming digital presence into measurable results.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4">
                        <button className="bg-[#1e8acb] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-600">
                            View Portfolio →
                        </button>

                        <button className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-700 hover:bg-gray-100">
                            Explore Services
                        </button>

                        <button className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-700 hover:bg-gray-100">
                            Contact Me
                        </button>
                    </div>

                    {/* STATS */}
                    <div className="flex gap-16 mt-12 text-[#1e8acb] font-bold text-2xl">
                        <div className="text-[#1e8acb]">
                            1+ Years
                            <div className="text-black text-sm">Experience</div>
                        </div>
                        <div className="text-[#1e8acb]">
                            7+ 
                            <div className="text-black text-sm">Projects Done</div>
                        </div>
                        <div className="text-[#1e8acb]">
                            95% 
                            <div className="text-black text-sm">Client Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center relative">
                    {/* Glow Circle */}
                    <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-200 blur-3xl opacity-40"></div>

                    {/* Outer Ring */}
                    <div className="relative w-[500px] h-[500px] rounded-full border-[12px] border-blue-100 flex items-center justify-center shadow-xl">
                        
                        {/* Icons on Outer Ring */}
                        <div className="absolute inset-0">
                            {/* Icon 1 - Top of outer ring - LinkedIn */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 z-10">
                                    <FaLinkedinIn className="text-blue-600 text-xl" />
                                </div>
                            </div>

                            {/* Icon 2 - Right of outer ring - Growth Icon */}
                            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 z-10">
                                    <BiTrendingUp className="text-green-500 text-xl" />
                                </div>
                            </div>

                            {/* Icon 3 - Bottom of outer ring - Circle Star */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 z-10">
                                    <AiFillStar className="text-yellow-500 text-xl" />
                                </div>
                            </div>
                        </div>

                        {/* Inner Ring */}
                        <div className="w-[450px] h-[450px] rounded-full border-[6px] border-blue-100 flex items-center justify-center">
                            {/* Profile Image */}
                            <div>
                                <img
                                    src="/jay-profile-new.webp"
                                    alt="profile"
                                    className="w-[400px] h-[400px] object-cover rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

        </section>
    );
};

export default Hero;