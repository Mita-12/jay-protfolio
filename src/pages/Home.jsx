import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutUs";
import Experience from "../components/Exprience";
import Skills from "../components/Skill";
import ServicesPortfolio from "../components/Services";
import ContactFooter from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <ServicesPortfolio />
            <ContactFooter />

        </>
    );
}

export default Home;
