import React from "react";
import {
    FaBriefcase,
    FaCalendarAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Experience = () => {
    return (
        <section className="relative bg-[#cfd5da] py-20 px-6 md:px-16 overflow-hidden">
            {/* TITLE */}
            <div className="text-center mb-16 relative z-10">
                <p className="text-[#1e8acb] text-sm font-semibold mb-2">
                    MY JOURNEY
                </p>

                <div className="flex justify-center items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white shadow rounded-xl flex items-center justify-center text-[#1e8acb]">
                        <FaBriefcase />
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900">
                        Work <span className="text-[#1e8acb]">Experience</span>
                    </h2>
                </div>

                <p className="text-gray-600 max-w-xl mx-auto">
                    Building expertise through hands-on experience in digital marketing and
                    SEO optimization
                </p>
            </div>

            {/* EXPERIENCE CARDS */}
            <div className="grid md:grid-cols-2 gap-10 relative z-10">
                {/* CARD 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 text-[#1e8acb] p-3 rounded-lg">
                            <FaBriefcase />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">SEO Intern</h3>
                            <p className="text-[#1e8acb] font-medium">
                                Seoczar IT Services Pvt Ltd
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 text-gray-500 text-sm mb-6">
                        <span className="flex items-center gap-2">
                            <FaCalendarAlt />
                            September 2024 – April 2025
                        </span>
                        <span className="flex items-center gap-2">
                            <FaMapMarkerAlt />
                            Bhubaneswar, Odisha
                        </span>
                    </div>

                    <ul className="space-y-3 text-gray-700">
                        {[
                            "Conducted comprehensive SEO audits and analysis",
                            "Performed advanced keyword research and competitive analysis",
                            "Implemented technical SEO optimization strategies",
                            "Analyzed and reported campaign performance metrics"
                        ].map((text, index) => (
                            <li key={index} className="flex gap-3">
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CARD 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-lg hover:border-[#1e8acb] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 text-[#1e8acb] p-3 rounded-lg">
                            <FaBriefcase />
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <h3 className="font-semibold text-gray-900">
                                    Digital Marketing Executive
                                </h3>
                                <span className="text-xs bg-blue-100 text-[#1e8acb] px-3 py-1 rounded-full">
                                    Current
                                </span>
                            </div>
                            <p className="text-[#1e8acb] font-medium">CloudSat</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 text-gray-500 text-sm mb-6">
                        <span className="flex items-center gap-2">
                            <FaCalendarAlt />
                            April 2025 – Present
                        </span>
                        <span className="flex items-center gap-2">
                            <FaMapMarkerAlt />
                            Bhubaneswar, Odisha
                        </span>
                    </div>

                    <ul className="space-y-3 text-gray-700">
                        {[
                            "Developing and executing comprehensive SEO strategies",
                            "Performance tracking and analytics-driven optimization",
                            "Content optimization for improved search visibility",
                            "Managing digital marketing campaigns across platforms"
                        ].map((text, index) => (
                            <li key={index} className="flex gap-3">
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* FLOATING ELEMENTS - Removed */}

        </section>
    );
};

export default Experience;