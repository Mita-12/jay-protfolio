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
        desc: "Our team of experts will conduct a comprehensive audit of your website using industry-leading tools like Screaming Frog, Ahrefs, SEMrush, and Moz. We'll analyze technical SEO factors, identify crawl errors, and provide actionable recommendations to boost your rankings. We utilize Google Search Console for performance monitoring and Google Analytics for traffic analysis.",
        tools: [
            { name: "Screaming Frog", image: "/tools/screamingfrog.png" },
            { name: "Ahrefs", image: "/tools/ahrefs.png" },
            { name: "SEMrush", image: "/tools/semrush.png" },
            { name: "Moz", image: "/tools/moz.png" },
            { name: "Google Search Console", image: "/tools/googlesearchconsole.png" },
            { name: "Google Analytics", image: "/tools/google.png" },
        ]
    },
    {
        icon: <FaPenNib />,
        title: "Keyword Research & Content Strategy",
        desc: "We'll analyze your keywords and content strategy using advanced tools like Ahrefs, SEMrush, Google Trends, and Moz. Our research focuses on search intent, keyword difficulty, and content gaps. We leverage ChatGPT, Gemini AI, and Meta AI for content ideation, while using Notion and Microsoft 365 for content planning and collaboration.",
        tools: [
            { name: "Ahrefs", image: "/tools/ahrefs.png" },
            { name: "SEMrush", image: "/tools/semrush.png" },
            { name: "Google Trends", image: "/tools/google.png" },
            { name: "Moz", image: "/tools/moz.png" },
            { name: "ChatGPT", image: "/tools/chatgpt.png" },
            { name: "Gemini AI", image: "/tools/gemini.png" },
            { name: "Meta AI", image: "/tools/meta-ai.png" },
            { name: "Notion", image: "/tools/notion.png" },
            { name: "Microsoft 365", image: "/tools/microsoft.png" },
        ]
    },
    {
        icon: <FaChartLine />,
        title: "On-Page & Off-Page SEO",
        desc: "Optimize your site's on-page elements using tools like Screaming Frog and Ahrefs for title tags, meta descriptions, and keyword density analysis. For off-page optimization, we utilize Ahrefs and Moz for backlink analysis and link building strategies. Performance tracking is done through Google Analytics and Google Search Console.",
        tools: [
            { name: "Screaming Frog", image: "/tools/screamingfrog.png" },
            { name: "Ahrefs", image: "/tools/ahrefs.png" },
            { name: "Moz", image: "/tools/moz.png" },
            { name: "Google Analytics", image: "/tools/google.png" },
            { name: "Google Search Console", image: "/tools/googlesearchconsole.png" },
            { name: "SEMrush", image: "/tools/semrush.png" },
        ]
    },
    {
        icon: <FaShareAlt />,
        title: "Social Media Optimization (SMO)",
        desc: "Increase your brand's visibility on social media platforms by creating engaging content and participating in relevant communities. We use Buffer and Hootsuite for social media scheduling and management, while Canva and Adobe Creative Cloud help create stunning visuals. Performance tracking and engagement monitoring are done through native analytics and these powerful tools.",
        tools: [
            { name: "Buffer", image: "/tools/buffer.png" },
            { name: "Hootsuite", image: "/tools/hootsuite.png" },
            { name: "Canva", image: "/tools/canva.png" },
            { name: "Adobe Creative Cloud", image: "/tools/adobe.png" },
            { name: "Meta Business Suite", image: "/tools/meta.png" },
            { name: "Google Analytics", image: "/tools/google.png" },
        ]
    },
    {
        icon: <FaBullhorn />,
        title: "Content Strategy & Growth Planning",
        desc: "Develop a comprehensive content strategy that aligns with your audience and business objectives. We use Notion and Microsoft 365 for content calendar management and team collaboration. AI tools like ChatGPT, Gemini AI, and Meta AI assist in content creation and optimization. For audio content, we leverage Eleven Labs for realistic voiceovers and audio production. Visual content is enhanced with Canva and Adobe Creative Cloud.",
        tools: [
            { name: "Notion", image: "/tools/notion.png" },
            { name: "Microsoft 365", image: "/tools/microsoft.png" },
            { name: "ChatGPT", image: "/tools/openai.png" },
            { name: "Gemini AI", image: "/tools/googlegemini.png" },
            { name: "Meta AI", image: "/tools/meta.png" },
            { name: "Eleven Labs", image: "/tools/elevenlabs.png" },
            { name: "Canva", image: "/tools/canva.png" },
            { name: "Adobe Creative Cloud", image: "/tools/adobe.png" },
            { name: "Google Trends", image: "/tools/googleanalytics.png" },
        ]
    },
    {
        icon: <FaClipboardCheck />,
        title: "Performance Tracking & Reporting",
        desc: "Monitor key performance indicators (KPIs) to track your progress and make data-driven decisions. We utilize Google Analytics, Google Search Console, Ahrefs, and SEMrush for comprehensive performance tracking. Social media performance is monitored through Buffer and Hootsuite analytics. Custom reports are created using these tools to provide actionable insights and help you stay on top of your game.",
        tools: [
            { name: "Google Analytics", image: "/tools/google.png" },
            { name: "Google Search Console", image: "/tools/googlesearchconsole.png" },
            { name: "Ahrefs", image: "/tools/ahrefs.png" },
            { name: "SEMrush", image: "/tools/semrush.png" },
            { name: "Moz", image: "/tools/moz.png" },
            { name: "Buffer Analytics", image: "/tools/buffer.png" },
            { name: "Hootsuite Analytics", image: "/tools/hootsuite.png" },
        ]
    },
];

const portfolioData = {
    auditfiling: {
        title: "AuditFiling Website SEO & SMO",
        icon: <FaGlobe />,
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
            "Increased website traffic and search visibility.",
        ],
        color: "blue",
    },
    cloudsat: {
        title: "CloudSat Digital Marketing Campaign",
        icon: <FaCloud />,
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
            "Optimized for cloud computing keywords.",
        ],
        color: "cyan",
    },
    i4option: {
        title: "i4option Tech SEO Optimization",
        icon: <FaCode />,
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
            "Enhanced schema markup for better visibility.",
        ],
        color: "purple",
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {services.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 text-left hover:shadow-xl transition-all duration-300 hover:border-[#1e8acb]"
                        >
                            <div className="text-[#1e8acb] text-3xl mb-4">
                                {item.icon}
                            </div>

                            <h3 className="font-semibold text-gray-800 text-lg mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            {/* Tools with Images */}
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <p className="text-xs text-gray-400 mb-2 text-left">Tools We Use:</p>
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
                                            {/* <span className="ml-1">{tool.name}</span> */}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 text-[#1e8acb] text-sm font-semibold flex items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform">
                                Learn More <FaArrowRight size={12} />
                            </div>
                        </div>
                    ))}
                </div>

                <button className="mt-10 bg-[#1e8acb] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#1e8acb] font-semibold transition-all duration-300 hover:scale-105">
                    Get Started
                </button>
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
                                className={`px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
                                    activeTab === key
                                        ? "bg-[#1e8acb] text-white shadow-lg"
                                        : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300"
                                }`}
                            >
                                <span className={activeTab === key ? "text-white" : `text-${portfolioData[key].color}-500`}>
                                    {portfolioData[key].icon}
                                </span>
                                {key === "auditfiling" ? "AuditFiling" :
                                    key === "cloudsat" ? "CloudSat" : "i4option"}
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Card */}
                    <div className="bg-white rounded-xl shadow-xl border border-blue-100 mt-10 p-8 text-left hover:shadow-2xl transition-shadow duration-300">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <div className="flex items-center gap-3">
                                <div className={`text-[#1e8acb] text-2xl`}>
                                    {portfolioData[activeTab].icon}
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
                                { label: "On-Page", value: portfolioData[activeTab].metrics.onPage, color: "[#1e8acb]" },
                                { label: "Off-Page", value: portfolioData[activeTab].metrics.offPage, color: "[#1e8acb]" },
                                { label: "Technical SEO", value: portfolioData[activeTab].metrics.TechnicalSEO, color: "[#1e8acb]" },
                                {
                                    label: "SMM Strategy", value: portfolioData[activeTab].metrics.SMMStrategy
                                    , color: "[#1e8acb]"
                                }
                            ].map((metric, index) => (
                                <div
                                    key={index}
                                    className="border border-blue-100 rounded-xl p-5 bg-white hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="text-sm text-gray-500">{metric.label}</p>
                                        <p className={`font-bold text-${metric.color}-600 text-lg`}>
                                            {metric.value}%
                                        </p>
                                    </div>
                                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-300`}
                                            style={{ width: `${metric.value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Key Deliverables */}
                        <div className="mt-8">
                            <p className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                <span>Key Deliverables:</span>
                                <FaExternalLinkAlt size={14} className="text-[#1e8acb]" />
                            </p>

                            <ul className="space-y-2">
                                {portfolioData[activeTab].deliverables.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-sm text-gray-600 flex items-start gap-2 hover:translate-x-1 transition-transform"
                                    >
                                        <span className={`text-${portfolioData[activeTab].color}-500`}>
                                            ✔
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-between items-center">
                            <p className="text-gray-600 font-medium">
                                Contact Us Today:
                            </p>
                            <button className="flex items-center gap-2 bg-[#1e8acb] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#1e8acb] hover:scale-105 transition-all duration-300">
                                Submit Project <FaArrowRight size={12} />
                            </button>
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

export default ServicesPortfolio;