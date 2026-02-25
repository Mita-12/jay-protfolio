import React from "react";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { BiTrendingUp } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { Sparkles, Target, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen bg-gradient-to-r from-[#e1f2fd] to-gray-200 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-35 py-4 sm:py-6">

            {/* HERO CONTENT */}
            <div className="grid md:grid-cols-2 items-center mt-8 sm:mt-12 md:mt-16 gap-8 md:gap-10">

                {/* LEFT */}
                <div className="text-center md:text-left order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 bg-gray-200 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Available for new opportunities
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-gray-800 mb-2 sm:mb-3">
                        Hey, there
                    </h2>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e8acb] mb-2 sm:mb-4">
                        JAY NARAYAN DAS
                    </h1>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6">
                        Digital Marketing Executive
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
                        Specialized in driving organic growth through technical SEO,
                        data-driven insights, and strategic content optimization.
                        Transforming digital presence into measurable results.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                        <button className="bg-[#1e8acb] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow hover:bg-[#1e8acb] text-sm sm:text-base">
                            View Portfolio →
                        </button>

                        <button className="border border-gray-300 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-gray-700 hover:bg-gray-100 text-sm sm:text-base">
                            Explore Services
                        </button>

                        <button className="border border-gray-300 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-gray-700 hover:bg-gray-100 text-sm sm:text-base">
                            Contact Me
                        </button>
                    </div>

                    {/* STATS */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-8 sm:gap-12 md:gap-16 mt-8 sm:mt-12 text-[#1e8acb] font-bold text-xl sm:text-2xl">
                        <div className="text-center md:text-left">
                            1+ Years
                            <div className="text-gray-600 text-xs sm:text-sm">Experience</div>
                        </div>
                        <div className="text-center md:text-left">
                            7+ 
                            <div className="text-gray-600 text-xs sm:text-sm">Projects Done</div>
                        </div>
                        <div className="text-center md:text-left">
                            95% 
                            <div className="text-gray-600 text-xs sm:text-sm">Client Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center relative order-1 md:order-2 mb-8 md:mb-0">
                    {/* Glow Circle */}
                    <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-blue-300 blur-3xl opacity-40"></div>

                    {/* Outer Ring */}
                    <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border-[8px] sm:border-[10px] md:border-[12px] border-blue-200 flex items-center justify-center shadow-xl">
                        
                        {/* Icons on Outer Ring */}
                        <div className="absolute inset-0">
                            {/* Icon 1 - Top of outer ring - Target */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 z-10">
                                    <Target className="text-[#1e8acb] text-sm sm:text-base md:text-xl" />
                                </div>
                            </div>

                            {/* Icon 2 - Right of outer ring - TrendingUp */}
                            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 z-10">
                                    <TrendingUp className="text-[#1e8acb] text-sm sm:text-base md:text-xl" />
                                </div>
                            </div>

                            {/* Icon 3 - Bottom of outer ring - Sparkles */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 z-10">
                                    <Sparkles className="text-[#1e8acb] text-sm sm:text-base md:text-xl" />
                                </div>
                            </div>
                        </div>

                        {/* Inner Ring */}
                        <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border-[4px] sm:border-[5px] md:border-[6px] border-blue-100 flex items-center justify-center">
                            {/* Profile Image */}
                            <div>
                                <img
                                    src="/jay-profile-new.webp"
                                    alt="profile"
                                    className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] object-cover rounded-full"
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

        @media (max-width: 640px) {
          .icon {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>

        </section>
    );
};

export default Hero;