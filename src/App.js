import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";


import NavbarSection from "./components/Navbar/Navbar";
import IntroSection from "./components/Content/Intro";
import MySkills from "./components/Content/MySkill";
import MyProject from "./components/Content/MyProject";
import Contact from "./components/Content/Contact";
import MouseEffect from "./components/Mouse/MouseEffect";
import ThankYouSection from "./components/Content/outro";
import About from "./components/Content/About";
import TMLTH from "./components/Content/Experience/TMLTH";


function Home() {
  return (
    <>
      <NavbarSection />
      <MouseEffect />
      <IntroSection />
      <About />
      <MySkills />
      <MyProject />
      <Contact />
      <ThankYouSection />
      
    </>
  );
}

export default function App() {
  return (
    <div className="relative w-full">
      {/* Circles Background */}
      <div className="inset-0 pointer-events-none">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle5"></div>
        <div className="circle circle6"></div>
        <div className="circle circle7"></div>
        <div className="circle circle8"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tmlth" element={<TMLTH />} />
        </Routes>
      </div>
    </div>
  );
}
