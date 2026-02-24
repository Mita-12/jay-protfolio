import React from "react";
import { FaUserGraduate, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const About = () => {
    return (
        <section className="bg-[#f4f8fb] py-8 px-6 md:px-20">

            {/* TITLE */}
            <div className="text-center mb-16">
                <div className="flex justify-center items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center text-[#1e8acb]">
                        <FaUserGraduate size={20} />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900">
                        About <span className="text-[#1e8acb]">Me</span>
                    </h1>
                </div>
            </div>

            {/* CONTENT GRID */}
            <div className="grid md:grid-cols-2 gap-16">

                {/* LEFT SIDE */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                        A Passionate <span className="text-[#1e8acb]">Digital Marketing</span> Professional
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        I'm Jay Narayan Das, an SEO & SMM specialist with over 1 year of experience
                        in improving organic growth through technical SEO, website audits,
                        keyword research, content optimization, and data-driven insights.
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        I possess a strong technical mindset and focus on enhancing digital presence
                        through analytical strategies and performance tracking. My approach combines
                        creativity with data to deliver measurable results that drive real business growth.
                    </p>

                    <p className="text-gray-600 mb-10 leading-relaxed">
                        With a background in Computer Science and a deep passion for digital marketing,
                        I bring a unique blend of technical expertise and creative thinking to every project.
                    </p>

                    {/* INFO BOXES */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                            <p className="text-gray-500 text-sm mb-2">Location</p>
                            <div className="flex items-center gap-2 text-gray-800 font-semibold">
                                <FaMapMarkerAlt className="text-[#1e8acb]" />
                                Bhubaneswar, Odisha
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                            <p className="text-gray-500 text-sm mb-2">Email</p>
                            <div className="flex items-center gap-2 text-[#1e8acb] font-semibold">
                                <FaEnvelope />
                                dassitun6@gmail.com
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE — TIMELINE */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-10 flex items-center gap-2">
                        <FaUserGraduate className="text-[#1e8acb]" />
                        Education Journey
                    </h3>

                    <div className="relative border-l-2 border-blue-300 pl-10 space-y-10">
                        {/* ITEM 1 */}
                        <div className="relative">
                            <div className="absolute -left-[18px] top-2 w-4 h-4 bg-[#1e8acb] rounded-full"></div>

                            <div className="bg-white p-6 rounded-xl shadow border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                                <p className="text-gray-500 flex items-center gap-2 mb-2">
                                    <FaCalendarAlt />
                                    Nov 2021 – Jun 2024
                                </p>

                                <h4 className="font-semibold text-gray-900">
                                    Bachelor of Technology (BTech) | <span className="text-[#1e8acb]">CGPA: 7.5</span>
                                </h4>

                                <p className="text-[#1e8acb]">Computer Science and Engineering</p>

                                <p className="text-gray-600">
                                    Nalanda Institute of Technology (NIT), Bhubaneswar
                                </p>
                            </div>
                        </div>

                        {/* ITEM 2 */}
                        <div className="relative">
                            <div className="absolute -left-[18px] top-2 w-4 h-4 bg-[#1e8acb] rounded-full"></div>

                            <div className="bg-white p-6 rounded-xl shadow border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                                <p className="text-gray-500 flex items-center gap-2 mb-2">
                                    <FaCalendarAlt />
                                    2017 – 2021
                                </p>

                                <h4 className="font-semibold text-gray-900">
                                    Diploma | <span className="text-[#1e8acb]">CGPA: 7.6</span>
                                </h4>

                                <p className="text-[#1e8acb]">Mechanical Engineering</p>

                                <p className="text-gray-600">
                                    Bhubanananda Odisha School of Engineering (BOSE), Cuttack
                                </p>
                            </div>
                        </div>

                        {/* ITEM 3 */}
                        <div className="relative">
                            <div className="absolute -left-[18px] top-2 w-4 h-4 bg-[#1e8acb] rounded-full"></div>

                            <div className="bg-white p-6 rounded-xl shadow border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                                <p className="text-gray-500 flex items-center gap-2 mb-2">
                                    <FaCalendarAlt />
                                    May 2012 – May 2017
                                </p>

                                <h4 className="font-semibold text-gray-900">
                                    Matriculation | <span className="text-[#1e8acb]">CGPA: 9.2</span>
                                </h4>

                                <p className="text-[#1e8acb]">CBSE</p>

                                <p className="text-gray-600">
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