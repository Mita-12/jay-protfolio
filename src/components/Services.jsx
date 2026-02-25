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
    FaFileAlt,
    FaLink,
    FaCog,
    FaUsers,
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
            { name: "Google Trends", image: "/tools/google.png" },
            { name: "HubSpot", image: "/tools/hubspot.png" },

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
        logo: "/auditfiling-favicon-40.webp",
        metrics: [
            { name: "On-Page", icon: <FaFileAlt />, description: "Full optimization" },
            { name: "Off-Page", icon: <FaLink />, description: "Link building" },
            { name: "Technical SEO", icon: <FaCog />, description: "Site health" },
            { name: "SMM Strategy", icon: <FaUsers />, description: "Social growth" },
        ],
        deliverables: [
            "Optimized on-page elements to improve SEO.",
            "Developed an effective content strategy.",
            "Implemented a robust SMO plan.",
            "Improved keyword rankings across targeted niches.",
        ],
        projectImages: [
            "/preview/auditfiling-preview-1.png",
            "/preview/auditfiling-preview-2.png",
            "/preview/auditfiling-preview-3.png",
            "/preview/auditfiling-preview-4.png",
        ]
    },
    cloudsat: {
        title: "CloudSat Digital Marketing Campaign",
        logo: "/cloudsat-icon.png",
        metrics: [
            { name: "On-Page", icon: <FaFileAlt />, description: "Full optimization" },
            { name: "Off-Page", icon: <FaLink />, description: "Link building" },
            { name: "Technical SEO", icon: <FaCog />, description: "Site health" },
            { name: "SMM Strategy", icon: <FaUsers />, description: "Social growth" },
        ],
        deliverables: [
            "Developed comprehensive SEO strategy for cloud services.",
            "Created targeted content for B2B audience.",
            "Improved domain authority through strategic backlinks.",
            "Increased organic traffic by 150% in 6 months.",
        ],
        projectImages: [
            "/cloudsat/Screenshot 2026-02-12 150258.png",
            "/cloudsat/Screenshot 2026-02-12 150258.png",
            "/cloudsat/Screenshot 2026-02-12 150258.png",
        ]
    },
    i4option: {
        title: "i4option Tech SEO Optimization",
        logo: "i4option-icon.jpg",
        metrics: [
            { name: "On-Page", icon: <FaFileAlt />, description: "Full optimization" },
            { name: "Off-Page", icon: <FaLink />, description: "Link building" },
            { name: "Technical SEO", icon: <FaCog />, description: "Site health" },
            { name: "SMM Strategy", icon: <FaUsers />, description: "Social growth" },
        ],
        deliverables: [
            "Technical SEO audit and implementation.",
            "Fixed crawl errors and improved site structure.",
            "Optimized for mobile-first indexing.",
            "Improved page speed and core web vitals.",
        ],
        projectImages: [
            "/cloudsat/Screenshot 2026-02-12 150258.png",
            "/cloudsat/Screenshot 2026-02-12 150258.png",
            "/cloudsat/Screenshot 2026-02-12 150308.png",
            "/cloudsat/Screenshot 2026-02-12 150312.png",
            "/cloudsat/Screenshot 2026-02-12 150319.png",
        ]
    },
};

const ServicesPortfolio = () => {
    const [activeTab, setActiveTab] = useState("auditfiling");
    const [showProjectImages, setShowProjectImages] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleProjectDoneClick = () => {
        setShowProjectImages(!showProjectImages);
        setCurrentImageIndex(0); // Reset to first image when opening
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === 0 ? portfolioData[activeTab].projectImages.length - 1 : prev - 1
        );
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === portfolioData[activeTab].projectImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="bg-[#ced5da] min-h-screen py-16 px-6 md:px-20 overflow-hidden">

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
            <div className="mt-20 bg-gray-50 py-16 rounded-3xl">
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
                                onClick={() => {
                                    setActiveTab(key);
                                    setShowProjectImages(false); // Reset to deliverables view when changing tabs
                                    setCurrentImageIndex(0);
                                }}
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

                            <button
                                onClick={handleProjectDoneClick}
                                className={`text-sm px-4 py-1.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${showProjectImages
                                        ? "bg-[#1e8acb] text-white"
                                        : "bg-blue-100 text-[#1e8acb] hover:bg-blue-200"
                                    }`}
                            >
                                Project Done
                                <span className={`text-xs transition-transform duration-300 ${showProjectImages ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>
                        </div>

                        {/* Metrics with Icons and Descriptions */}
                        <div className="grid grid-cols-4 gap-6 mt-8">
                            {portfolioData[activeTab].metrics.map((metric, index) => (
                                <div
                                    key={index}
                                    className="border border-blue-100 rounded-xl p-5 bg-gray-100 hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[#1e8acb] text-xl">
                                            {metric.icon}
                                        </span>
                                        <p className="font-semibold text-gray-700">
                                            {metric.name}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {metric.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Conditional Rendering: Key Achievements or Image Slider */}
                        {showProjectImages ? (
                            <div className="mt-5">
                                <p className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                                    <span>Project Gallery</span>
                                    <span className="text-xs text-gray-500">
                                        ({currentImageIndex + 1} / {portfolioData[activeTab].projectImages.length})
                                    </span>
                                </p>

                                <div className="relative group">
                                    {/* Main Image */}
                                    <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden border border-blue-100">
                                        <img
                                            src={portfolioData[activeTab].projectImages[currentImageIndex]}
                                            alt={`Project ${currentImageIndex + 1}`}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/images/portfolio/fallback-large.png";
                                            }}
                                        />

                                        {/* Navigation Arrows */}
                                        <button
                                            onClick={handlePrevImage}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                                        >
                                            ←
                                        </button>

                                        <button
                                            onClick={handleNextImage}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                                        >
                                            →
                                        </button>
                                    </div>

                                    {/* Thumbnail Navigation */}
                                    <div className="flex justify-center gap-2 mt-4">
                                        {portfolioData[activeTab].projectImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                        ? "bg-[#1e8acb] w-8"
                                                        : "bg-gray-300 hover:bg-gray-400"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-5">
                                <p className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                    <span>Key Achievements</span>
                                    <FaExternalLinkAlt size={14} className="text-[#1e8acb]" />
                                </p>

                                <ul className="grid grid-cols-2 gap-4 mt-4">
                                    {portfolioData[activeTab].deliverables.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-sm text-gray-700 flex items-start gap-3 p-4 bg-gray-50 border border-blue-100 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300"
                                        >
                                            <span className="text-[#1e8acb] font-bold text-base mt-0.5">✓</span>
                                            <span className="flex-1">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
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