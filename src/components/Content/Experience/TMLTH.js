import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import MouseEffect from "../../Mouse/MouseEffect";

const TMLTH = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <div className="justify-center items-center">

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
          src={require('../../../assets/Images/TMLTH_Photo/TMLTH-touchpoint-logo.png')} 
          alt="TMLTH Logo" 
          className="w-16 h-16 md:w-20 md:h-20 object-contain border bg-white rounded-2xl "
        />
        <h1 className="text-3xl  sm:text-2xl md:text-5xl font-bold font-roboto-mono">
          TMLTH Touch Point - Redesign
        </h1>
      </div>

      {/* 📊 Section */}
      <div className="mt-10 grid md:grid-cols-3 gap-10 items-center">
        
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

      {/* 🏷 Subtitle */}
      <p className="text-gray-400 mt-6 max-w-3xl text-xl  sm:text-md md:text-2xl ">
        A UX/UI redesign project based on my internship experience. 
        This project focuses on improving usability, visual hierarchy, 
        and user experience.
      </p>

    
      

      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-16 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | Co-payment
      </p>

      {/* 🖼 Hero Image */}
      <div className="mt-6 flex flex-col items-center ">
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Co_payment.png')} 
          alt="Co-payment Screen1" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
        />
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Co_payment_BA.png')} 
          alt="Co-payment Screen2" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
        />
      </div>

      {/* 🧩 Description */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Redesign Overview
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Task :
The Co-payment page contained a large amount of text, making it difficult for users to read and understand. I was assigned to redesign the page to improve readability and create a more organized layout.
        </p>
        <p className="mt-5 text-gray-300 leading-relaxed">
          Process :
I consolidated information from multiple pop-ups into a single view and presented it in a table format to provide a clearer overview. I also reduced the number of user interactions by minimizing buttons, making it easier for users to access all information in one place.
        </p>
      </div>

      {/* 🚀 Button */}
      <div className="mt-10">
        <a 
          href="https://www.figma.com/proto/EYgyL7CkipzJrRntpxB0py/Co-Pay-30-4-2025?node-id=1263-1437&p=f&t=PQASsasOElGPcuM3-1&scaling=min-zoom&content-scaling=fixed&page-id=1263%3A1436&starting-point-node-id=1263%3A1437&show-proto-sidebar=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-purple-600 hover:bg-purple-700  text-white font-jetbrains-mono-medium px-6 py-3 rounded-xl transition transform hover:scale-110 active:scale-95">
            View Prototype
          </button>
        </a>
      </div>
      

      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-16 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | Change Address
      </p>
      {/* 🖼 Hero Image */}
      <div className="mt-6 flex flex-col items-center ">
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Change_Address.png')} 
          alt="Change Address Screen1" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
      />

        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Change_Address_BA.png')} 
          alt="Change Address Screen2" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
      />
      </div>

      {/* 🧩 Description */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Redesign Overview
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Task :
The Change Address page had usability issues due to an unclear flow. The old UI required users to fill in both Address 1 and Address 2, which caused confusion and led to incorrect data input.
        </p>
        <p className="mt-5 text-gray-300 leading-relaxed">
          Process :
I redesigned the flow and restructured the address input steps to improve clarity. I also collaborated with the BA team to define a more effective and user-friendly input format.
        </p>
      </div>

      {/* 🚀 Button */}
      <div className="mt-10">
        <a 
          href="https://www.figma.com/proto/9f21XVyTdLfHfmaXMMt3ji/Design-UXUI-%7C-Change-Address-Production-Issue--Copy--28-4-2025?node-id=91-139&p=f&t=yiaBKOUVcNdGGtXs-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=91%3A139&show-proto-sidebar=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-purple-600 hover:bg-purple-700  text-white font-jetbrains-mono-medium px-6 py-3 rounded-xl transition transform hover:scale-110 active:scale-95">
            View Prototype
          </button>
        </a>
      </div>
      
      



      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-16 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | Intro Screen
      </p>
      {/* 🖼 Hero Image */}
      <div className="mt-6 flex flex-col items-center ">
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Intro_Screen.png')} 
          alt="Intro Screen1" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
        />
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Intro_Screen_BA.png')} 
          alt="Intro Screen2" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
        />
      </div>

      {/* 🧩 Description */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Redesign Overview
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Task :
The Intro Screen is a key page of the system and one of the most frequently accessed. However, it contained a large amount of text, leading to user feedback about small font size, unclear wording, and information overload.
        </p>
        <p className="mt-5 text-gray-300 leading-relaxed">
          Process :
I reorganized the content by grouping topics and presenting them in categorized pop-ups, allowing users to read only what they need. I also increased text size for better readability. For more complex sections, I added icons to help users understand the content more easily.
        </p>
      </div>

      {/* 🚀 Button */}
      <div className="mt-10">
        <a 
          href="https://www.figma.com/proto/9lkgZpMPeW1xtNrjO2WfVl/Re-pattern-Claim-%7C-E-Loan--Copy--28-4-2025?node-id=452-199&t=vOROzcZ8MEH683Om-1&scaling=min-zoom&content-scaling=fixed&page-id=452%3A2&starting-point-node-id=452%3A199&show-proto-sidebar=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-purple-600 hover:bg-purple-700  text-white font-jetbrains-mono-medium px-6 py-3 rounded-xl transition transform hover:scale-110 active:scale-95">
            View Prototype
          </button>
        </a>
      </div>


      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-16 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | EKYC Liveness
      </p>

      {/* 🖼 Hero Image */}
      <div className="mt-6 flex flex-col items-center ">
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/EKYC.png')} 
          alt="EKYC Liveness Screen1" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
        />
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/EKYC_BA.png')} 
          alt="EKYC Liveness Screen2" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
        />
      </div>

      {/* 🧩 Description */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Redesign Overview
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Task :
The EKYC Liveness page needed improvements in instructional text to make it clearer and more user-friendly. Users also required visual examples, icons, and images to better understand the process. Additionally, the form design needed to align with the Corporate Identity and improve text visibility.
        </p>
        <p className="mt-5 text-gray-300 leading-relaxed">
          Process :
I redesigned the visuals by updating images and icons, and simplified the text for better clarity. The form layout was adjusted to match the Corporate Identity, and input steps were reorganized to help users focus on one field at a time.
        </p>
      </div>

      {/* 🚀 Button */}
      <div className="mt-10">
        <a 
          href="https://www.figma.com/proto/T5LxZIGW1h5yQGohhUCFFA/E-KYC-Mock-up--Copy--28-4-2025?node-id=7-138&p=f&t=n3gk5ZkyzhFdmcJ8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A138&show-proto-sidebar=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-purple-600 hover:bg-purple-700  text-white font-jetbrains-mono-medium px-6 py-3 rounded-xl transition transform hover:scale-110 active:scale-95">
            View Prototype
          </button>
        </a>
      </div>

      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-16 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | Premium Payment
      </p>

      {/* 🖼 Hero Image */}
      <div className="mt-6 flex flex-col items-center ">
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Premium_Payment.png')} 
          alt="Premium Payment Screen1" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
        />
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Premium_Payment_BA.png')} 
          alt="Premium Payment Screen2" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
        />
      </div>

      {/* 🧩 Description */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Redesign Overview
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Task :
        </p>
        <p className="mt-5 text-gray-300 leading-relaxed">
          Process :
        </p>
      </div>

      {/* 🚀 Button */}
      <div className="mt-10">
        <a 
          href="https://www.figma.com/proto/woh4tlMwL6gcydp2ysrFFR/Design-_-Premium-Payment?node-id=413-1986&p=f&t=6A0h1tRLhTMt32uJ-1&scaling=min-zoom&content-scaling=fixed&page-id=413%3A2&starting-point-node-id=413%3A1986&show-proto-sidebar=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-purple-600 hover:bg-purple-700  text-white font-jetbrains-mono-medium px-6 py-3 rounded-xl transition transform hover:scale-110 active:scale-95">
            View Prototype
          </button>
        </a>
      </div>
      

      </div>
      <div className="hidden md:block">
        <MouseEffect />
      </div>
      
    </div>
  );
};

export default TMLTH;