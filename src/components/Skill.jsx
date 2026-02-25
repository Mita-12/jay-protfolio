import React from "react";
import { 
  Search, 
  FileSearch, 
  TrendingUp, 
  BarChart3, 
  Users, 
  FileText, 
  Lightbulb, 
  LineChart, 
  Target, 
  Zap, 
  Brain 
} from "lucide-react";

const skills = [
  { name: "Technical SEO & Website Auditing", percent: 90, icon: <Search size={20} /> },
  { name: "Keyword Research & Search Intent", percent: 92, icon: <FileSearch size={20} /> },
  { name: "On-Page SEO & Content Optimization", percent: 88, icon: <FileText size={20} /> },
  { name: "Organic Traffic Growth", percent: 85, icon: <TrendingUp size={20} /> },
  { name: "SEO Analytics & Reporting", percent: 90, icon: <BarChart3 size={20} /> },
  { name: "Competitor & Market Research", percent: 87, icon: <Target size={20} /> },
  { name: "Social Media Strategy", percent: 82, icon: <Users size={20} /> },
  { name: "Content Planning & Scripting", percent: 85, icon: <Lightbulb size={20} /> },
  { name: "Trending Content Research", percent: 88, icon: <Zap size={20} /> },
  { name: "Google Analytics & Search Console", percent: 91, icon: <LineChart size={20} /> },
];

const Skills = () => {
    return (
        <section className="relative bg-[#eaf3f9] py-20 px-6 md:px-20">

            {/* TITLE */}
            <div className="text-center mb-16 relative z-10">
                <p className="text-[#1e8acb] text-sm font-semibold mb-2">
                    WHAT I DO BEST
                </p>

                <h2 className="text-4xl font-bold text-gray-900">
                    Skills & <span className="text-[#1e8acb]">Expertise</span>
                </h2>

                <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                    A comprehensive skill set built through continuous learning and
                    hands-on experience
                </p>
            </div>

            {/* SKILLS GRID */}
            <div className="grid md:grid-cols-2 gap-6 relative z-10">

                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 text-[#1e8acb] p-3 rounded-lg">
                                    {skill.icon}
                                </div>
                                <h3 className="font-semibold text-gray-800">
                                    {skill.name}
                                </h3>
                            </div>

                            <span className="text-[#1e8acb] font-semibold">
                                {skill.percent}%
                            </span>
                        </div>

                        {/* PROGRESS BAR */}
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-[#1e8acb] to-blue-300"
                                style={{ width: `${skill.percent}%` }}
                            ></div>
                        </div>
                    </div>
                ))}

            </div>

        </section>
    );
};

export default Skills;