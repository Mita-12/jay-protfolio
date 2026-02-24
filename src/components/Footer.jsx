import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const ContactFooter = () => {
    return (
        <div className="bg-[#eaf3f8]">

            {/* ===== CONTACT SECTION ===== */}
            <section className="py-20 bg-gradient-to-b from-[#eaf3f8] to-[#d7e7f3]">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <p className="text-blue-500 font-semibold">GET IN TOUCH</p>
                        <h2 className="text-4xl font-bold text-gray-800 mt-2">
                            Let's <span className="text-blue-600">Connect</span>
                        </h2>
                        <p className="text-gray-500 mt-3">
                            Have a project in mind? Let's discuss how I can help grow your digital presence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">

                        {/* LEFT SIDE INFO */}
                        <div className="space-y-6">

                            {/* Email Card */}
                            <div className="bg-white p-5 rounded-xl shadow-sm flex gap-4 items-center">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 text-xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Email</p>
                                    <p className="font-semibold text-gray-700">dustin86@gmail.com</p>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-white p-5 rounded-xl shadow-sm flex gap-4 items-center">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 text-xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm">Location</p>
                                    <p className="font-semibold text-gray-700">
                                        Bhubaneswar, Odisha, India
                                    </p>
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="bg-blue-100 border border-blue-200 p-6 rounded-xl">
                                <p className="font-semibold text-gray-700">
                                    Ready to elevate your digital presence?
                                </p>
                                <p className="text-gray-600 text-sm mt-2">
                                    Let's create something amazing together!
                                </p>
                            </div>

                        </div>

                        {/* RIGHT CONTACT FORM */}
                        <div className="bg-white p-8 rounded-2xl shadow-md">
                            <form className="space-y-5">

                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="border border-blue-100 bg-gray-400 p-3 rounded-lg w-full focus:outline-blue-400"
                                    />
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="border p-3 rounded-lg  border-blue-100 bg-gray-400 w-full focus:outline-blue-400"
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="How can I help you?"
                                    className="border p-3 rounded-lg border-blue-100 bg-gray-400 w-full focus:outline-blue-400"
                                />

                                <textarea
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    className="border p-3 rounded-lg border-blue-100 bg-gray-400 w-full focus:outline-blue-400"
                                ></textarea>

                                <button className="w-full bg-blue-600 text-white py-3 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                                    <FaPaperPlane /> Send Message
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="bg-white pt-16 pb-8">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">Jay.</h3>
                        <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                            SEO & SMM Specialist focused on driving organic growth
                            through technical SEO, data-driven insights, and strategic content optimization.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-2 text-gray-500 text-sm">
                            <p>About</p>
                            <p>Skills</p>
                            <p>Experience</p>
                            <p>Portfolio</p>
                            <p>Services</p>
                            <p>Contact</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
                        <p className="text-gray-500 text-sm">dustin86@gmail.com</p>
                        <p className="text-gray-500 text-sm mt-2">
                            Bhubaneswar, Odisha, India
                        </p>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className=" border-t border-t-blue-100   mt-10 pt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2025 Jay Narayan Das. Made with 💙
                    </p>

                    <div className="flex justify-center gap-4 mt-4 text-gray-500 text-lg">
                        <FaLinkedin />
                        <FaInstagram />
                        <BsTwitterX />
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default ContactFooter;
