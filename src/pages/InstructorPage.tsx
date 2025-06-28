import React from "react";
import instructorImage from "../assets/instructor-page.png";

const InstructorPage: React.FC = () => {
  const expertiseAreas = [
    "User Experience (UX) Design",
    "User Interface (UI) Design",
    "Information Architecture",
    "Interaction Design",
    "Visual Design",
    "Usability Testing",
    "Wireframing and Prototyping",
    "Design Thinking",
  ];
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-20 py-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <p className="text-sm text-gray-700">Instructor</p>
            <h1 className="text-[28px] sm:text-[32px] font-bold text-gray-900">
              Ronald Richards
            </h1>
            <p className="text-gray-700 text-sm mt-1">
              Web developer, UX/UI Designer, and Teacher
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-4 text-sm text-gray-700">
              <div className="flex flex-col items-start sm:items-center">
                <span className="text-sm text-gray-700">Total Students</span>
                <span className="text-2xl font-semibold text-gray-900">
                  1000
                </span>
              </div>
              <div className="flex flex-col items-start sm:items-center">
                <span className="text-sm text-gray-700">Reviews</span>
                <span className="text-2xl font-semibold text-gray-900">
                  154
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-900">
              About Ronald Richard
            </h2>
            <p className="text-gray-700">
              Ronald Richard is a highly skilled UX/UI Designer with over a
              decade of experience in crafting user-centric digital solutions.
              With a background in graphic design and a keen eye for detail,
              Ronald specializes in creating intuitive interfaces that delight
              users and drive business results.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-900">
              Areas of Expertise
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              {expertiseAreas.map((li, index) => (
                <li key={index}>{li}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-900">
              Professional Experience
            </h2>
            <p className="text-gray-700">
              Ronald Richard has an extensive professional background in UX/UI
              design, having worked with renowned companies such as [Company
              Name] and [Company Name]. His portfolio includes a diverse range
              of projects spanning web applications, mobile apps, and e-commerce
              platforms.
            </p>
          </div>
          {/* Course Card Component */}
          <div className="pt-6">
            <h2 className="text-base font-medium text-gray-800">
              Course Card Component
            </h2>
          </div>
        </div>
        {/* Right Sidebar */}
        <aside className="flex flex-col items-center gap-4">
          <img
            src={instructorImage}
            alt="Instructor"
            className="rounded-full w-32 sm:w-40 h-32 sm:h-40 object-cover shadow-md"
          />
          <div className="w-full sm:w-56 space-y-3">
            <button className="w-full border border-gray-400 py-2 rounded text-gray-700 text-sm">
              Website
            </button>
            <button className="w-full border border-gray-400 py-2 rounded text-gray-700 text-sm flex justify-center items-center gap-2">
              Twitter
            </button>
            <button className="w-full border border-gray-400 py-2 rounded text-gray-700 text-sm flex justify-center items-center gap-2">
              YouTube
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default InstructorPage;
