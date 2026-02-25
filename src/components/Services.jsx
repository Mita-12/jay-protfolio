import { Sparkles, Target, TrendingUp, Users } from "lucide-react";
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
import { motion } from 'framer-motion';

// ScrollDivider Component
const ScrollDivider = () => {
    return (
        <div className="flex justify-center py-[12px] px-0">
            <motion.div
                animate={{
                    y: [0, 10, 0]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity
                }}
                className="w-6 h-10 rounded-full border-2 border-[#1e8acb] flex items-start justify-center p-2"
            >
                <motion.div
                    animate={{
                        y: [0, 12, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity
                    }}
                    className="w-1.5 h-3 rounded-full bg-[#1e8acb]"
                />
            </motion.div>
        </div>
    );
};

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
            { name: "On-Page", icon: <Target />, description: "Full optimization" },
            { name: "Off-Page", icon: <TrendingUp />, description: "Link building" },
            { name: "Technical SEO", icon: <Sparkles />, description: "Site health" },
            { name: "SMM Strategy", icon: <Users />, description: "Social growth" },
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
            { name: "On-Page", icon: <Target />, description: "Full optimization" },
            { name: "Off-Page", icon: <TrendingUp />, description: "Link building" },
            { name: "Technical SEO", icon: <Sparkles />, description: "Site health" },
            { name: "SMM Strategy", icon: <Users />, description: "Social growth" },
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
        logo: "/i4option-icon.jpg",
        metrics: [
            { name: "On-Page", icon: <Target />, description: "Full optimization" },
            { name: "Off-Page", icon: <TrendingUp />, description: "Link building" },
            { name: "Technical SEO", icon: <Sparkles />, description: "Site health" },
            { name: "SMM Strategy", icon: <Users />, description: "Social growth" },
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
        setCurrentImageIndex(0);
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
        <div className="bg-[#ced5da] min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 overflow-hidden">

            {/* ===== SERVICES SECTION ===== */}
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-[#1e8acb] font-semibold text-sm sm:text-base">
                    WHAT I OFFER
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    My <span className="text-[#1e8acb]">Services</span>
                </h2>

                <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base px-4">
                    Comprehensive digital services solutions to deliver your online presence and drive financial growth.
                </p>

                {/* Scroll Divider between title and cards */}
               
                

                {/* Responsive Card Layout */}
                <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col items-center">
                    {/* First Row - Cards stack on mobile, 2 on tablet, 4 on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full max-w-6xl">
                        {services.slice(0, 4).map((item, i) => (
                            <ServiceCard key={i} item={item} />
                        ))}
                    </div>

                    {/* Second Row - Cards stack on mobile, 2 on tablet, 3 on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full max-w-4xl mt-4 sm:mt-5 md:mt-6">
                        {services.slice(4, 7).map((item, i) => (
                            <ServiceCard key={i + 3} item={item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Divider between Services and Portfolio */}
            <div className="my-8 sm:my-10 md:my-12">
                <ScrollDivider />
            </div>


            {/* ===== PORTFOLIO SECTION ===== */}
            <div className="bg-gray-50 py-8 sm:py-12 md:py-16 rounded-2xl sm:rounded-3xl">
                <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
                    <p className="text-[#1e8acb] font-semibold text-sm sm:text-base">
                        MY PORTFOLIO
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                        Recent <span className="text-[#1e8acb]">Work</span>
                    </h2>

                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base px-4">
                        Build your portfolio with our professional web design and development services. Contact us today to discuss your project needs.
                    </p>
               

                    {/* Portfolio Tabs - Scrollable on mobile */}
                    <div className="flex justify-start sm:justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 overflow-x-auto pb-2 px-2 -mx-2 scrollbar-hide">
                        {Object.keys(portfolioData).map((key) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setActiveTab(key);
                                    setShowProjectImages(false);
                                    setCurrentImageIndex(0);
                                }}
                                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                                    activeTab === key
                                        ? "bg-[#1e8acb] text-white shadow-lg"
                                        : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300"
                                }`}
                            >
                                <img
                                    src={portfolioData[key].logo}
                                    alt={key}
                                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "/images/portfolio/fallback.png";
                                    }}
                                />
                                <span>
                                    {key === "auditfiling" ? "AuditFiling" :
                                     key === "cloudsat" ? "CloudSat" : "i4option"}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Card */}
                    <div className="bg-white rounded-xl shadow-xl border border-blue-100 mt-6 sm:mt-8 md:mt-10 p-4 sm:p-6 md:p-8 text-left hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg p-1.5 flex items-center justify-center border border-gray-200">
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
                                <h3 className="font-semibold text-gray-800 text-base sm:text-lg md:text-xl">
                                    {portfolioData[activeTab].title}
                                </h3>
                            </div>

                            <button
                                onClick={handleProjectDoneClick}
                                className={`text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 ${
                                    showProjectImages
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

                        {/* Metrics with Icons and Descriptions - Responsive grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8">
                            {portfolioData[activeTab].metrics.map((metric, index) => (
                                <div
                                    key={index}
                                    className="border border-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 bg-gray-100 hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mb-1 sm:mb-2 text-center sm:text-left">
                                        <span className="text-[#1e8acb] text-lg sm:text-xl">
                                            {metric.icon}
                                        </span>
                                        <p className="font-semibold text-gray-700 text-xs sm:text-sm">
                                            {metric.name}
                                        </p>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                                        {metric.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Conditional Rendering: Key Achievements or Image Slider */}
                        {showProjectImages ? (
                            <div className="mt-4 sm:mt-5">
                                <p className="font-semibold text-gray-700 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                                    <span>Project Gallery</span>
                                    <span className="text-xs text-gray-500">
                                        ({currentImageIndex + 1} / {portfolioData[activeTab].projectImages.length})
                                    </span>
                                </p>

                                <div className="relative group">
                                    {/* Main Image */}
                                    <div className="relative h-64 sm:h-80 md:h-96 bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden border border-blue-100">
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
                                            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 text-sm sm:text-base"
                                        >
                                            ←
                                        </button>

                                        <button
                                            onClick={handleNextImage}
                                            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 text-sm sm:text-base"
                                        >
                                            →
                                        </button>
                                    </div>

                                    {/* Thumbnail Navigation */}
                                    <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                                        {portfolioData[activeTab].projectImages.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`h-1.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                                                    index === currentImageIndex
                                                        ? "bg-[#1e8acb] w-4 sm:w-8"
                                                        : "bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2.5"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-4 sm:mt-5">
                                <p className="font-semibold text-gray-700 mb-2 flex items-center gap-2 text-sm sm:text-base">
                                    <span>Key Achievements</span>
                                    <FaExternalLinkAlt size={12} className="text-[#1e8acb] sm:w-3.5 sm:h-3.5" />
                                </p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                                    {portfolioData[activeTab].deliverables.map((item, index) => (
                                        <li
                                            key={index}
                                            className="text-xs sm:text-sm text-gray-700 flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border border-blue-100 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300"
                                        >
                                            <span className="text-[#1e8acb] font-bold text-sm sm:text-base mt-0.5 flex-shrink-0">✓</span>
                                            <span className="flex-1">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* View All Projects Link */}
                    <div className="mt-6 sm:mt-8 md:mt-10">
                        <button className="text-[#1e8acb] font-semibold flex items-center gap-2 mx-auto hover:gap-3 transition-all duration-300 text-sm sm:text-base">
                            View All Projects <FaArrowRight className="sm:w-4 sm:h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Extracted Service Card component with responsive design
const ServiceCard = ({ item }) => (
    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-blue-100 text-left hover:shadow-xl transition-all duration-300 hover:bg-[#e5edf1] hover:text-[#1e8acb] h-full">
        <div className="inline-flex items-center gap-1 text-base sm:text-lg md:text-xl bg-[#d9e4eb] text-[#1e8acb] px-2.5 sm:px-3 py-2.5 sm:py-3 rounded-full border border-gray-200 hover:border-[#1e8acb] hover:bg-blue-50 transition-colors duration-200">
            {item.icon}
        </div>

        <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-2 line-clamp-2">
            {item.title}
        </h3>

        <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] leading-relaxed line-clamp-3 sm:line-clamp-none">
            {item.desc}
        </p>

        {/* Tools with Images */}
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-blue-200">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {item.tools.map((tool, toolIndex) => (
                    <span
                        key={toolIndex}
                        className="inline-flex items-center gap-1 text-xs bg-gray-50 text-gray-700 px-2 sm:px-3 py-2 sm:py-3 rounded-full border border-gray-200 hover:border-[#1e8acb] hover:bg-blue-50 transition-colors duration-200"
                        title={tool.name}
                    >
                        <img
                            src={tool.image}
                            alt={tool.name}
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-contain"
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