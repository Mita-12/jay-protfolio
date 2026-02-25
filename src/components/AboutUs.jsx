import React from "react";
import { FaUserGraduate, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const About = () => {
    return (
        <section className="bg-[#f4f8fb] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">

            {/* TITLE */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <div className="flex justify-center items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-xl shadow flex items-center justify-center text-[#1e8acb]">
                        <FaUserGraduate size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                        About <span className="text-[#1e8acb]">Me</span>
                    </h1>
                </div>
            </div>

            {/* CONTENT GRID */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">

                {/* LEFT SIDE */}
                <div className="order-2 md:order-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                        A Passionate <span className="text-[#1e8acb]">Digital Marketing</span> Professional
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                        I'm Jay Narayan Das, an SEO & SMM specialist with over 1 year of experience
                        in improving organic growth through technical SEO, website audits,
                        keyword research, content optimization, and data-driven insights.
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                        I possess a strong technical mindset and focus on enhancing digital presence
                        through analytical strategies and performance tracking. My approach combines
                        creativity with data to deliver measurable results that drive real business growth.
                    </p>

                    <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-10 leading-relaxed">
                        With a background in Computer Science and a deep passion for digital marketing,
                        I bring a unique blend of technical expertise and creative thinking to every project.
                    </p>

                    {/* INFO BOXES */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                            <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">Location</p>
                            <div className="flex items-center gap-2 text-gray-800 font-semibold text-sm sm:text-base">
                                <FaMapMarkerAlt className="text-[#1e8acb] flex-shrink-0" />
                                <span className="break-words">Bhubaneswar, Odisha</span>
                            </div>
                        </div>

                        <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                            <p className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-2">Email</p>
                            <div className="flex items-center gap-2 text-[#1e8acb] font-semibold text-sm sm:text-base">
                                <FaEnvelope className="flex-shrink-0" />
                                <span className="break-all">dassitun6@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE — TIMELINE */}
                <div className="order-1 md:order-2 mb-6 md:mb-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 sm:mb-10 flex items-center gap-2">
                        <FaUserGraduate className="text-[#1e8acb] flex-shrink-0" />
                        <span>Education Journey</span>
                    </h3>

                    <div className="relative border-l-2 border-blue-300 pl-4 sm:pl-6 md:pl-8 lg:pl-10 space-y-6 sm:space-y-8 md:space-y-10">
                        {/* ITEM 1 */}
                        <div className="relative">
                            <div className="absolute -left-[10px] sm:-left-[14px] md:-left-[16px] lg:-left-[18px] top-2 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-[#1e8acb] rounded-full"></div>

                            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                                <p className="text-gray-500 flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 text-xs sm:text-sm">
                                    <FaCalendarAlt className="flex-shrink-0" />
                                    <span>Nov 2021 – Jun 2024</span>
                                </p>

                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                                    Bachelor of Technology (BTech) | <span className="text-[#1e8acb]">CGPA: 7.5</span>
                                </h4>

                                <p className="text-[#1e8acb] text-sm sm:text-base">Computer Science and Engineering</p>

                                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                                    Nalanda Institute of Technology (NIT), Bhubaneswar
                                </p>
                            </div>
                        </div>

                        {/* ITEM 2 */}
                        <div className="relative">
                            <div className="absolute -left-[10px] sm:-left-[14px] md:-left-[16px] lg:-left-[18px] top-2 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-[#1e8acb] rounded-full"></div>

                            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                                <p className="text-gray-500 flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 text-xs sm:text-sm">
                                    <FaCalendarAlt className="flex-shrink-0" />
                                    <span>2017 – 2021</span>
                                </p>

                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                                    Diploma | <span className="text-[#1e8acb]">CGPA: 7.6</span>
                                </h4>

                                <p className="text-[#1e8acb] text-sm sm:text-base">Mechanical Engineering</p>

                                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                                    Bhubanananda Odisha School of Engineering (BOSE), Cuttack
                                </p>
                            </div>
                        </div>

                        {/* ITEM 3 */}
                        <div className="relative">
                            <div className="absolute -left-[10px] sm:-left-[14px] md:-left-[16px] lg:-left-[18px] top-2 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-[#1e8acb] rounded-full"></div>

                            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                                <p className="text-gray-500 flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 text-xs sm:text-sm">
                                    <FaCalendarAlt className="flex-shrink-0" />
                                    <span>May 2012 – May 2017</span>
                                </p>

                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                                    Matriculation | <span className="text-[#1e8acb]">CGPA: 9.2</span>
                                </h4>

                                <p className="text-[#1e8acb] text-sm sm:text-base">CBSE</p>

                                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                                    Santanu English Medium School
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;