import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import Hero from '../componets/Hero';
import AboutMe from '../componets/AboutMe';
import Education from '../componets/Education';
import Skills from '../componets/Skills';
import Projects from '../componets/Projects';
import Contact from '../componets/Contact';

const Mainlayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;