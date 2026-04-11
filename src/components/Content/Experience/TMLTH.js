import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MouseEffect from "../../Mouse/MouseEffect";

const TMLTH = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      

       <div className="fixed top- left-0 w-full z-50  backdrop-blur-lg bg-BGBlue/50 transition-all duration-300 px-20 py-10">
      {/* 🔙 Back Button */}
      <Link 
        to="/" 
        className="fixed  text-purple-400 hover:text-purple-300 transition z-50 font-bold font-roboto-mono text-md md:text-base transform active:scale-95"
      >
        ← Back to Home
      </Link>
       </div>
      <div className="min-h-screen bg-transparent text-white px-6 md:px-20 py-10">
      
      

      {/* 🧠 Title */}
      <div className="flex items-center gap-6 mt-20">
        <img 
          src={require('../../../assets/Images/TMLTH-touchpoint-logo.png')} 
          alt="TMLTH Logo" 
          className="w-16 h-16 md:w-20 md:h-20 object-contain border bg-white rounded-2xl "
        />
        <h1 className="text-3xl  sm:text-2xl md:text-5xl font-bold font-roboto-mono">
          TMLTH Touch Point - Redesign
        </h1>
      </div>

      {/* 🏷 Subtitle */}
      <p className="text-gray-400 mt-6 max-w-2xl text-xl  sm:text-md md:text-2xl ">
        A UX/UI redesign project based on my internship experience. 
        This project focuses on improving usability, visual hierarchy, 
        and user experience.
      </p>

      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-10 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | Copayment
      </p>
      {/* 🖼 Hero Image */}
      <div className="mt-6">
        <div className="w-full h-[300px] bg-gray-800 rounded-2xl flex items-center justify-center">
          <span className="text-gray-500">Hero Image / Mockup</span>
        </div>
      </div>

      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-10 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | Change Address
      </p>

      {/* 🖼 Hero Image */}
      <div className="mt-6">
        <div className="w-full h-[300px] bg-gray-800 rounded-2xl flex items-center justify-center">
          <span className="text-gray-500">Hero Image / Mockup</span>
        </div>
      </div>

      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-10 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | Intro Screen
      </p>

      {/* 🖼 Hero Image */}
      <div className="mt-6">
        <div className="w-full h-[300px] bg-gray-800 rounded-2xl flex items-center justify-center">
          <span className="text-gray-500">Hero Image / Mockup</span>
        </div>
      </div>

      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-10 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | EKYC Liveness
      </p>

      {/* 🖼 Hero Image */}
      <div className="mt-6">
        <div className="w-full h-[300px] bg-gray-800 rounded-2xl flex items-center justify-center">
          <span className="text-gray-500">Hero Image / Mockup</span>
        </div>
      </div>

      



      {/* 📊 Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-purple-400 text-sm">ROLE</h3>
          <p className="mt-2">UX/UI Designer</p>
        </div>

        <div>
          <h3 className="text-purple-400 text-sm">TOOLS</h3>
          <p className="mt-2">Figma, Photoshop, Microsoft Azure</p>
        </div>

        <div>
          <h3 className="text-purple-400 text-sm">TYPE</h3>
          <p className="mt-2">Internship</p>
        </div>

      </div>

      {/* 🧩 Description */}
      <div className="mt-16 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Project Overview
        </h2>
        <p className="text-gray-300 leading-relaxed">
          This project is a redesign of an existing platform during my internship. 
          The goal was to enhance usability and modernize the interface. 
          I focused on simplifying navigation, improving layout structure, 
          and creating a more engaging user experience.
        </p>
      </div>

      {/* 🚀 Button */}
      <div className="mt-12">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition">
          View Full Design
        </button>
      </div>

      </div>
      <MouseEffect />
    </div>
  );
};

export default TMLTH;