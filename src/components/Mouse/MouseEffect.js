import React, { useEffect, useState } from "react";

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // 👇 ตรวจ element ที่ hover อยู่
      const target = e.target;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".hover-target")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-none">
      {/* 🔵 cursor เล็ก */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-200 ease-out ${
          isHovering ? "w-6 h-6 bg-white" : "w-4 h-4 bg-white"
        }`}
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
          zIndex: 60,
        }}
      />

      {/* 🟢 cursor ใหญ่ */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-300 ease-out ${
          isHovering
            ? "w-16 h-16 border-2 border-white opacity-100"
            : "w-12 h-12 border border-white opacity-50"
        }`}
        style={{
          transform: `translate(${position.x - 30}px, ${position.y - 30}px)`,
          zIndex: 60,
        }}
      />
    </div>
  );
};

export default MouseEffect;