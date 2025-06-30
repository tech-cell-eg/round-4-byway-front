import React, { useState } from "react";
import {
  IoPlayOutline,
  IoSchoolOutline,
  IoMedalOutline,
  IoPlayCircleSharp,
} from "react-icons/io5";
import instructor from "../assets/instructor.png";
import videoImage from "../assets/course-learning-page.jpg";
import Tabs from "../components/Tabs";
import CourseProgress from "@/components/ui/CourseProgress";

const CourseLearningPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    { id: "details", label: "Details" },
    { id: "instructor", label: "Instructor" },
    { id: "content", label: "Courses" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 pt-4 md:pt-0">
              Introduction to User Experience Design
            </h1>
            <div className="relative group transition-all duration-300">
              <img
                src={videoImage}
                alt="Course Preview"
                className="rounded-lg w-full object-cover"
              />
              {/* Responsive play button */}
              <div className="absolute text-5xl sm:text-6xl md:text-7xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer">
                <IoPlayCircleSharp className="text-white/90 hover:text-white hover:scale-110" />
              </div>
            </div>
          </div>
          {/* Tabs - Responsive version */}
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          <div className="border-t m-3"></div>
          {/* Tab Content */}
          <div className="pt-4">
            {activeTab === "details" && (
              <>
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Course Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Embark on a transformative journey into the dynamic world of
                    User Experience (UX) Design with our comprehensive course,
                    "Introduction to User Experience Design." This course is
                    meticulously crafted to provide you with a foundational
                    understanding of the principles, methodologies, and tools
                    that drive exceptional user experiences in the digital
                    landscape.
                  </p>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">
                    Key Learning Objectives
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li className="pl-2">
                      Gain a clear understanding of what User Experience (UX)
                      Design entails and its importance in today's digital
                      world.
                    </li>
                    <li className="pl-2">
                      Explore the fundamental principles of user-centered design
                      and how to apply them to create intuitive and
                      user-friendly interfaces.
                    </li>
                    <li className="pl-2">
                      Learn about the various elements that contribute to a
                      positive user experience, including information
                      architecture, interaction design, and visual design.
                    </li>
                  </ul>
                </div>
              </>
            )}
            {activeTab === "content" && (
              <div className="space-y-4">
                {/* Course Card Component */}
                <h1 className="text-xl font-semibold text-gray-900">
                  Course Card Component
                </h1>
              </div>
            )}
            {activeTab === "instructor" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Instructor
                </h2>
                <div className="py-5">
                  <h3 className="text-xl font-semibold text-blue-500">
                    Ronald Richards
                  </h3>
                  <h5 className="text-gray-700 font-normal">UI/UX Designer</h5>
                </div>
                <div className="flex sm:flex-row items-center gap-4">
                  <div>
                    <img
                      src={instructor}
                      alt="Instructor"
                      className="w-[120px] h-[120px] rounded-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="flex items-center gap-2">
                      <IoMedalOutline size={22} />
                      40,445 Reviews
                    </span>
                    <span className="flex items-center gap-2">
                      <IoSchoolOutline size={22} />
                      500 Students
                    </span>
                    <span className="flex items-center gap-2">
                      <IoPlayOutline size={22} />
                      15 Courses
                    </span>
                  </div>
                </div>
                <p className="font-normal text-gray-700 py-5">
                  With over a decade of industry experience, Ronald brings a
                  wealth of practical knowledge to the classroom. He has played
                  a pivotal role in designing user-centric interfaces for
                  renowned tech companies, ensuring seamless and engaging user
                  experiences.
                </p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="space-y-4">
                {/* Learner Review Component */}
                <h1 className="text-xl font-semibold text-gray-900">
                  Learner Review Component
                </h1>
              </div>
            )}
          </div>
        </div>
        {/* Course-Progress Component */}
        <aside className="space-y-6">
          <CourseProgress/>
        </aside>
      </div>
    </div>
  );
};

export default CourseLearningPage;
