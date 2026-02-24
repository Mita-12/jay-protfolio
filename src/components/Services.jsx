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
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        icon: <FaSearch />,
        title: "SEO Optimization & Technical Audits",
        desc: "Our team of experts will conduct a comprehensive audit of your website, ensuring it meets the latest SEO standards. We'll identify areas for improvement and provide actionable recommendations to boost your rankings.",
    },
    {
        icon: <FaPenNib />,
        title: "Keyword Research & Content Strategy",
        desc: "We'll analyze your keywords and content strategy to ensure they align with your business goals. Our goal is to increase organic traffic and improve search engine visibility.",
    },
    {
        icon: <FaChartLine />,
        title: "On-Page & Off-Page SEO",
        desc: "Optimize your site's on-page elements like title tags, meta descriptions, and keyword density. Additionally, we'll optimize off-page factors such as backlinks and social media engagement.",
    },
    {
        icon: <FaShareAlt />,
        title: "Social Media Optimization (SMO)",
        desc: "Increase your brand's visibility on social media platforms by creating engaging content and participating in relevant communities. We'll monitor your progress and adjust strategies accordingly.",
    },
    {
        icon: <FaBullhorn />,
        title: "Content Strategy & Growth Planning",
        desc: "Develop a content strategy that aligns with your audience and business objectives. We'll create a content calendar and develop a content plan to drive organic traffic and enhance your reputation.",
    },
    {
        icon: <FaClipboardCheck />,
        title: "Performance Tracking & Reporting",
        desc: "Monitor key performance indicators (KPIs) to track your progress and make data-driven decisions. We'll provide regular reports and insights to help you stay on top of your game.",
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
            <motion.div
                className="max-w-6xl mx-auto text-center"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.p
                    className="text-blue-500 font-semibold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    WHAT I OFFER
                </motion.p>

                <h2 className="text-4xl font-bold text-gray-800 mt-2">
                    My <span className="text-blue-600">Services</span>
                </h2>

                <motion.p
                    className="text-gray-500 mt-3 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Comprehensive digital services solutions to deliver your online presence and drive financial growth.
                </motion.p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {services.map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 text-left hover:shadow-xl transition-all"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 20px 30px -10px rgba(37,99,235,0.2)",
                                borderColor: "#3b82f6"
                            }}
                        >
                            <motion.div
                                className="text-blue-500 text-3xl mb-4"
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                animate={{
                                    y: [0, -3, 0, 3, 0],
                                }}
                                transition={{ duration: 4, delay: i * 0.2, repeat: Infinity }}
                            >
                                {item.icon}
                            </motion.div>

                            <h3 className="font-semibold text-gray-800 text-lg mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                            <motion.div
                                className="mt-4 text-blue-500 text-sm font-semibold flex items-center gap-2 cursor-pointer"
                                whileHover={{ x: 5 }}
                            >
                                Learn More <FaArrowRight size={12} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.button
                    className="mt-10 bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 font-semibold"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(37,99,235,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    Get Started
                </motion.button>
            </motion.div>

            {/* ===== PORTFOLIO SECTION ===== */}
            <motion.div
                className="mt-20 bg-[#e6f0f7] py-16 rounded-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-5xl mx-auto text-center px-6">
                    <motion.p
                        className="text-blue-500 font-semibold"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        MY PORTFOLIO
                    </motion.p>

                    <h2 className="text-4xl font-bold text-gray-800 mt-2">
                        Recent <span className="text-blue-600">Work</span>
                    </h2>

                    <motion.p
                        className="text-gray-500 mt-3 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Build your portfolio with our professional web design and development services. Contact us today to discuss your project needs.
                    </motion.p>

                    {/* Portfolio Tabs */}
                    <motion.div
                        className="flex justify-center gap-4 mt-8"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {Object.keys(portfolioData).map((key, index) => (
                            <motion.button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2 ${activeTab === key
                                    ? "bg-blue-500 text-white shadow-lg"
                                    : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300"
                                    }`}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className={activeTab === key ? "text-white" : `text-${portfolioData[key].color}-500`}>
                                    {portfolioData[key].icon}
                                </span>
                                {key === "auditfiling" ? "AuditFiling" :
                                    key === "cloudsat" ? "CloudSat" : "i4option"}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Portfolio Card with AnimatePresence for smooth transitions */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            className="bg-white rounded-xl shadow-xl border border-blue-100 mt-10 p-8 text-left"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            whileHover={{
                                boxShadow: "0 30px 40px -15px rgba(37,99,235,0.3)",
                                borderColor: "#3b82f6"
                            }}
                        >
                            <div className="flex flex-wrap justify-between items-center gap-4">
                                <motion.div
                                    className="flex items-center gap-3"
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.div
                                        className={`text-${portfolioData[activeTab].color}-500 text-2xl`}
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                            scale: [1, 1.1, 1, 1.1, 1]
                                        }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                    >
                                        {portfolioData[activeTab].icon}
                                    </motion.div>
                                    <h3 className="font-semibold text-gray-800 text-xl">
                                        {portfolioData[activeTab].title}
                                    </h3>
                                </motion.div>

                                <motion.span
                                    className="text-sm bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full font-medium"
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        backgroundColor: ["#dbeafe", "#bfdbfe", "#dbeafe"]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    Project Done
                                </motion.span>
                            </div>

                            {/* Metrics with Progress Bars */}
                            <div className="grid grid-cols-4 gap-6 mt-8">
                                {[
                                    { label: "On-Page", value: portfolioData[activeTab].metrics.onPage, color: "blue" },
                                    { label: "Off-Page", value: portfolioData[activeTab].metrics.offPage, color: "green" },
                                    { label: "Technical SEO", value: portfolioData[activeTab].metrics.TechnicalSEO, color: "green" },
                                    {
                                        label: "SMM Strategy", value: portfolioData[activeTab].metrics.SMMStrategy
                                        , color: "green"
                                    }
                                ].map((metric, index) => (
                                    <motion.div
                                        key={index}
                                        className="border border-blue-100 rounded-xl p-5 bg-white"
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: "0 10px 20px -5px rgba(37,99,235,0.2)",
                                        }}
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-sm text-gray-500">{metric.label}</p>
                                            <motion.p
                                                className={`font-bold text-${metric.color}-600 text-lg`}
                                                animate={{
                                                    scale: [1, 1.1, 1],
                                                }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                {metric.value}%
                                            </motion.p>
                                        </div>
                                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-300`}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${metric.value}%` }}
                                                transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Key Deliverables */}
                            <motion.div
                                className="mt-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <p className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <span>Key Deliverables:</span>
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    >
                                        <FaExternalLinkAlt size={14} className="text-blue-500" />
                                    </motion.div>
                                </p>

                                <ul className="space-y-2">
                                    {portfolioData[activeTab].deliverables.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="text-sm text-gray-600 flex items-start gap-2"
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <motion.span
                                                className={`text-${portfolioData[activeTab].color}-500`}
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                }}
                                                transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                                            >
                                                ✔
                                            </motion.span>
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Contact Section */}
                            <motion.div
                                className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-between items-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <p className="text-gray-600 font-medium">
                                    Contact Us Today:
                                </p>
                                <motion.button
                                    className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600"
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Submit Project <FaArrowRight size={12} />
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* View All Projects Link */}
                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                    >
                        <motion.button
                            className="text-blue-500 font-semibold flex items-center gap-2 mx-auto"
                            whileHover={{ scale: 1.05, gap: 4 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Projects <FaArrowRight />
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Floating Background Elements */}
            <motion.div
                className="absolute top-40 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-10"
                animate={{
                    y: [0, 50, 0],
                    x: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-40 left-10 w-80 h-80 bg-blue-300 rounded-full opacity-10"
                animate={{
                    y: [0, -60, 0],
                    x: [0, 40, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default ServicesPortfolio;