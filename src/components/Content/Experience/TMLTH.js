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
          src={require('../../../assets/Images/TMLTH_Photo/TMLTH-touchpoint-logo.png')} 
          alt="TMLTH Logo" 
          className="w-16 h-16 md:w-20 md:h-20 object-contain border bg-white rounded-2xl "
        />
        <h1 className="text-3xl  sm:text-2xl md:text-5xl font-bold font-roboto-mono">
          TMLTH Touch Point - Redesign
        </h1>
      </div>

      {/* 🏷 Subtitle */}
      <p className="text-gray-400 mt-6 max-w-3xl text-xl  sm:text-md md:text-2xl ">
        A UX/UI redesign project based on my internship experience. 
        This project focuses on improving usability, visual hierarchy, 
        and user experience.
      </p>

    
      {/* 📊 Section */}
      <div className="mt-10 grid md:grid-cols-3 gap-10">
        
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
      <p className="text-white-500 mt-16 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | Co-payment
      </p>

      {/* 🖼 Hero Image */}
      <div className="mt-6 flex flex-col items-center ">
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Co_payment.png')} 
          alt="Co-payment Screen" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
        />
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Co_payment_BA.png')} 
          alt="Co-payment Screen" 
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
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition">
          View Prototype
        </button>
      </div>
      

      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-16 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | Change Address
      </p>
      {/* 🖼 Hero Image */}
      <div className="mt-6 flex flex-col items-center ">
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Change_Address.png')} 
          alt="Change Address Screen" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
      />

        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Change_Address_BA.png')} 
          alt="Change Address Screen" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
      />
      </div>

      {/* 🧩 Description */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Redesign Overview
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Task:
The Co-payment page contained a large amount of text, making it difficult for users to read and understand. I was assigned to redesign the page to improve readability and create a more organized layout.
        </p>
        <p className="mt-5 text-gray-300 leading-relaxed">
          Process :
I consolidated information from multiple pop-ups into a single view and presented it in a table format to provide a clearer overview. I also reduced the number of user interactions by minimizing buttons, making it easier for users to access all information in one place.
        </p>
      </div>

      {/* 🚀 Button */}
      <div className="mt-10">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition">
          View Prototype
        </button>
      </div>
      
      



      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-16 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | Intro Screen
      </p>
      {/* 🖼 Hero Image */}
      <div className="mt-6 flex flex-col items-center ">
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Intro_Screen.png')} 
          alt="Intro Screen" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
        />
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/Intro_Screen_BA.png')} 
          alt="Intro Screen" 
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
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition">
          View Prototype
        </button>
      </div>


      {/* 🏷 Subtitle */}
      <p className="text-white-500 mt-16 max-w-2xl text-xl  sm:text-xl md:text-2xl font-bold font-roboto-mono">
        TMLTH Touch Point | EKYC Liveness
      </p>

      {/* 🖼 Hero Image */}
      <div className="mt-6 flex flex-col items-center ">
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/EKYC.png')} 
          alt="ekyc liveness screen" 
          className="mt-2 w-fit h-[850px]-auto rounded-2xl object-cover mx-auto"
        />
        <img 
          src={require('../../../assets/Images/TMLTH_Photo/EKYC_BA.png')} 
          alt="Co-payment Screen" 
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
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition">
          View Prototype
        </button>
      </div>
      

      </div>
      <MouseEffect />
    </div>
  );
};

export default TMLTH;