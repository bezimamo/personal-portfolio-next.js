// components/HeroSection.tsx
import React from "react";
import Typed from "react-typed";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen pt-20 px-10 max-w-7xl mx-auto items-center"
    >
      <div className="flex-1 max-w-2xl">
        <h3 className="text-3xl mb-4 text-gray-900">
          Hello, I'm{" "}
          <span className="font-clicker-script text-4xl font-bold text-red-500">
            Bezawit
          </span>
        </h3>
        <h3 className="text-4xl font-semibold mb-4">
          <Typed
            strings={[
              "Software Engineering student",
              "Junior Web Designer",
              "Junior Web Developer",
            ]}
            typeSpeed={100}
            backSpeed={60}
            loop
            className="text-red-500"
          />
        </h3>
        <p className="text-xl text-gray-700 mb-10">
          Passionate about technology and development. I love crafting
          beautiful and functional user experiences.
        </p>
      </div>

      {/* Image with border corners */}
      <div className="flex-1 relative max-w-lg ml-20">
        <img
          src="/pic3.jpg" // Replace with your actual image path
          alt="Hero"
          className="rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
          style={{ height: 400 }}
        />{/* Bottom right border - 10px outside image */}
<div
  className="absolute w-20 h-20 border-b-8 border-r-8 border-red-500"
  style={{ bottom: "-10px", right: "-10px" }}
></div>

{/* Top left border - 10px outside image */}
<div
  className="absolute w-20 h-20 border-t-8 border-l-8 border-red-500"
  style={{ top: "-10px", left: "-10px" }}
></div>

      </div>
    </section>
  );
}
