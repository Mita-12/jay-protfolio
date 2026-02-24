import React, { useState } from "react";
import {
    FaSearch,
    FaChartLine,
    FaPenNib,
    FaShareAlt,
    FaBullhorn,
    FaClipboardCheck,
    FaArrowRight,
    FaExternalLinkAlt,
    FaGlobe,
    FaCloud,
    FaCode,
} from "react-icons/fa";

const services = [
    {
        icon: <FaSearch />,
        title: "SEO Optimization & Technical Audits",
        desc: "In-depth site audits covering crawl errors, page speed, mobile usability, and indexation issues to ensure search engines can discover and rank your pages effectively",
        tools: [
            { name: "Screaming Frog", image: "/tools/screamingfrog.png" },
            { name: "Ahrefs", image: "/tools/ahrefs.png" },
            { name: "Google Search Console", image: "/tools/googlesearchconsole.png" },
        ]
    },
    {
        icon: <FaPenNib />,
        title: "Keyword Research & Content Strategy",
        desc: "Uncover high-intent keywords, analyze competitor gaps, and build a content roadmap that attracts the right audience and converts visitors into customers",
        tools: [
            { name: "Ahrefs", image: "/tools/ahrefs.png" },
            { name: "SEMrush", image: "/tools/semrush.png" },
            { name: "Google Trends", image: "/tools/google.png" },
        ]
    },
    {
        icon: <FaChartLine />,
        title: "On-Page & Off-Page SEO",
        desc: "From meta tags and schema markup to strategic link building and digital PR — a full-spectrum approach to strengthen your search presence and domain authority",
        tools: [
            { name: "Ahrefs", image: "/tools/ahrefs.png" },
            { name: "Moz", image: "/tools/moz.png" },
            { name: "Google Search Console", image: "/tools/googlesearchconsole.png" },
        ]
    },
    {
        icon: <FaShareAlt />,
        title: "Social Media Optimization (SMO)",
        desc: "Craft platform-specific strategies for Instagram, LinkedIn, Facebook & X to grow your community, boost engagement, and drive meaningful referral traffic",
        tools: [
            { name: "Buffer", image: "/tools/buffer.png" },
            { name: "Hootsuite", image: "/tools/hootsuite.png" },
            { name: "Meta ", image: "/tools/meta.png" },
        ]
    },
    {
        icon: <FaBullhorn />,
        title: "Content Strategy & Growth Planning",
        desc: "Build editorial calendars, pillar-cluster content models, and distribution plans that align with your brand goals and fuel long-term organic growth",
        tools: [
            { name: "Notion", image: "/tools/notion.png" },
            { name: "Google Trends", image: "/tools/googleanalytics.png" },
        ]
    },
    {
        icon: <FaClipboardCheck />,
        title: "Performance Tracking & Reporting",
        desc: "Set up dashboards, track KPIs, and deliver clear monthly reports with actionable recommendations to continuously improve your digital marketing ROI",
        tools: [
            { name: "Google Analytics", image: "/tools/google.png" },
            { name: "Google Search Console", image: "/tools/googlesearchconsole.png" },
            { name: "Microsoft 365", image: "/tools/microsoft.png" },
        ]
    },
    {
        icon: <FaClipboardCheck />,
        title: "Tools & Technologies",
        desc: "Leveraging cutting-edge AI and creative platforms to deliver exceptional results",
        tools: [
            { name: "ChatGPT", image: "/tools/openai.png" },
            { name: "Gemini AI", image: "/tools/googlegemini.png" },
            { name: "Meta AI", image: "/tools/meta.png" },
            { name: "Eleven Labs", image: "/tools/elevenlabs.png" },
            { name: "Canva", image: "/tools/canva.png" },
            { name: "Adobe Creative Cloud", image: "/tools/adobe.png" },
        ]
    },
];

const portfolioData = {
    auditfiling: {
        title: "AuditFiling Website SEO & SMO",
        logo: "/auditfiling-favicon-40.webp", // Add your logo path here
        metrics: {
            onPage: 20,
            offPage: 80,
            TechnicalSEO: 70,
            SMMStrategy: 70
        },
        deliverables: [
            "Optimized on-page elements to improve SEO.",
            "Developed an effective content strategy.",
            "Implemented a robust SMO plan.",
            "Improved keyword rankings across targeted niches.",
        ],
    },
    cloudsat: {
        title: "CloudSat Digital Marketing Campaign",
        logo: "/cloudsat-icon.png", // Add your logo path here
        metrics: {
            onPage: 65,
            offPage: 35,
            TechnicalSEO: 70,
            SMMStrategy: 70
        },
        deliverables: [
            "Developed comprehensive SEO strategy for cloud services.",
            "Created targeted content for B2B audience.",
            "Improved domain authority through strategic backlinks.",
            "Increased organic traffic by 150% in 6 months.",
        ],
    },
    i4option: {
        title: "i4option Tech SEO Optimization",
        logo: "i4option-icon.jpg", // Add your logo path here
        metrics: {
            onPage: 45,
            offPage: 55,
            TechnicalSEO: 70,
            SMMStrategy: 70
        },
        deliverables: [
            "Technical SEO audit and implementation.",
            "Fixed crawl errors and improved site structure.",
            "Optimized for mobile-first indexing.",
            "Improved page speed and core web vitals.",
        ],
    },
};

const ServicesPortfolio = () => {
    const [activeTab, setActiveTab] = useState("auditfiling");

    return (
        <div className="bg-[#eef5f9] min-h-screen py-16 px-6 md:px-20 overflow-hidden">

            {/* ===== SERVICES SECTION ===== */}
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-[#1e8acb] font-semibold">
                    WHAT I OFFER
                </p>

                <h2 className="text-4xl font-bold text-gray-800 mt-2">
                    My <span className="text-[#1e8acb]">Services</span>
                </h2>

                <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                    Comprehensive digital services solutions to deliver your online presence and drive financial growth.
                </p>

                {/* 3-2-1 Card Layout */}
                <div className="mt-12 flex flex-col items-center">
                    {/* First Row - 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
                        {services.slice(0, 4).map((item, i) => (
                            <ServiceCard key={i} item={item} />
                        ))}
                    </div>

                    {/* Second Row - 2 Cards (Centered) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-6">
                        {services.slice(4, 7).map((item, i) => (
                            <ServiceCard key={i + 3} item={item} />
                        ))}
                    </div>


                </div>


            </div>

            {/* ===== PORTFOLIO SECTION ===== */}
            <div className="mt-20 bg-[#e6f0f7] py-16 rounded-3xl">
                <div className="max-w-5xl mx-auto text-center px-6">
                    <p className="text-[#1e8acb] font-semibold">
                        MY PORTFOLIO
                    </p>

                    <h2 className="text-4xl font-bold text-gray-800 mt-2">
                        Recent <span className="text-[#1e8acb]">Work</span>
                    </h2>

                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                        Build your portfolio with our professional web design and development services. Contact us today to discuss your project needs.
                    </p>

                    {/* Portfolio Tabs */}
                    <div className="flex justify-center gap-4 mt-8">
                        {Object.keys(portfolioData).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 ${activeTab === key
                                    ? "bg-[#1e8acb] text-white shadow-lg"
                                    : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300"
                                    }`}
                            >
                                <img
                                    src={portfolioData[key].logo}
                                    alt={key}
                                    className="w-5 h-5 object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/images/portfolio/fallback.png";
                                    }}
                                />
                                {key === "auditfiling" ? "AuditFiling" :
                                    key === "cloudsat" ? "CloudSat" : "i4option"}
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Card */}
                    <div className="bg-white rounded-xl shadow-xl border border-blue-100 mt-10 p-8 text-left hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-lg p-1.5 flex items-center justify-center border border-gray-200">
                                    <img
                                        src={portfolioData[activeTab].logo}
                                        alt={portfolioData[activeTab].title}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/images/portfolio/fallback.png";
                                        }}
                                    />
                                </div>
                                <h3 className="font-semibold text-gray-800 text-xl">
                                    {portfolioData[activeTab].title}
                                </h3>
                            </div>

                            <span className="text-sm bg-blue-100 text-[#1e8acb] px-4 py-1.5 rounded-full font-medium">
                                Project Done
                            </span>
                        </div>

                        {/* Metrics with Progress Bars */}
                        <div className="grid grid-cols-4 gap-6 mt-8">
                            {[
                                { label: "On-Page", value: portfolioData[activeTab].metrics.onPage },
                                { label: "Off-Page", value: portfolioData[activeTab].metrics.offPage },
                                { label: "Technical SEO", value: portfolioData[activeTab].metrics.TechnicalSEO },
                                { label: "SMM Strategy", value: portfolioData[activeTab].metrics.SMMStrategy }
                            ].map((metric, index) => (
                                <div
                                    key={index}
                                    className="border border-blue-100 rounded-xl p-5 bg-white hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-sm text-gray-500">{metric.label}</p>
                                        <p className="font-bold text-[#1e8acb] text-lg">
                                            {metric.value}%
                                        </p>
                                    </div>
                                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[#1e8acb] to-[#4aa3df]"
                                            style={{ width: `${metric.value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Key Deliverables */}
                        <div className="mt-5">
                            <p className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                <span>Key Achievements</span>
                                <FaExternalLinkAlt size={14} className="text-[#1e8acb]" />
                            </p>

                            <ul className="grid grid-cols-2 gap-4 mt-4">
                                {portfolioData[activeTab].deliverables.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-sm text-gray-700 flex items-start gap-3 p-4 bg-gray-50 border border-blue-100 rounded-lg hover:bg-gray-100  hover:shadow-md transition-all duration-300"
                                    >
                                        <span className="text-[#1e8acb] font-bold text-base mt-0.5">✓</span>
                                        <span className="flex-1">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>

                    {/* View All Projects Link */}
                    <div className="mt-10">
                        <button className="text-[#1e8acb] font-semibold flex items-center gap-2 mx-auto hover:gap-3 transition-all duration-300">
                            View All Projects <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Extracted Service Card component for reusability
const ServiceCard = ({ item }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 text-left hover:shadow-xl transition-all duration-300 hover:bg-[#e5edf1] hover:text-[#1e8acb] h-full">
        <div className="inline-flex items-center gap-1 text-xl bg-[#d9e4eb] text-[#1e8acb] px-3 py-3 rounded-full border border-gray-200 hover:border-[#1e8acb] hover:bg-blue-50 transition-colors duration-200">
            {item.icon}
        </div>

        <h3 className="font-semibold text-lg mb-2">
            {item.title}
        </h3>

        <p className="text-gray-600 text-[15px] leading-relaxed">
            {item.desc}
        </p>

        {/* Tools with Images */}
        <div className="mt-4 pt-4 border-t border-blue-200">
            <div className="flex flex-wrap gap-2">
                {item.tools.map((tool, toolIndex) => (
                    <span
                        key={toolIndex}
                        className="inline-flex items-center gap-1 text-xs bg-gray-50 text-gray-700 px-3 py-3 rounded-full border border-gray-200 hover:border-[#1e8acb] hover:bg-blue-50 transition-colors duration-200"
                        title={tool.name}
                    >
                        <img
                            src={tool.image}
                            alt={tool.name}
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "/images/tools/fallback.png";
                            }}
                        />
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default ServicesPortfolio;