import React, { useState } from "react";
import {
  IoPlayOutline,
  IoSchoolOutline,
  IoMedalOutline,
} from "react-icons/io5";
import {
  FaAngleDown,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaStar,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiChevronRight, FiGlobe } from "react-icons/fi";

import instructor from "../assets/instructor.png";
import courseImage from "../assets/shopping-cart.png";
import Tabs from "../components/Tabs";
import CustomerCard from "@/components/CustomerCard";

interface Tab {
  id: string;
  label: string;
}

interface SyllabusItem {
  title: string;
}

const CoursePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("details");

  const tabs: Tab[] = [
    { id: "details", label: "Description" },
    { id: "instructor", label: "Instructor" },
    { id: "syllabus", label: "Syllabus" },
    { id: "reviews", label: "Reviews" },
  ];

  const syllabus: SyllabusItem[] = [
    { title: "Introduction to UX Design" },
    { title: "Basics of User-Centered Design" },
    { title: "Elements of User Experience" },
    { title: "Visual Design Principles" },
  ];

  return (
    <>
      <div className="min-h-screen py-4 px-4 sm:py-6 sm:px-6 lg:px-20">
        {/* Breadcrumb - Responsive */}
        <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm mb-4">
          <span className="text-gray-900">Home</span>
          <FiChevronRight className="text-gray-300" />
          <span className="text-gray-900">Categories</span>
          <FiChevronRight className="text-gray-300" />
          <span className="text-blue-500 truncate max-w-[120px] sm:max-w-none">
            Introduction to UX Design
          </span>
        </div>

        {/* Main Grid - Responsive columns */}
        <div className="flex flex-col-reverse sm:flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Left Section - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Section */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-bold">
                Introduction to User Experience Design
              </h1>
              <p className="text-gray-700 text-sm sm:text-base">
                This course provides foundational understanding of UX principles
                and tools.
              </p>

              {/* Rating and Info */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">
                <div className="flex items-center">
                  <span className="text-amber-300 font-medium mr-1">4.6</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-amber-300 w-3 h-3 sm:w-4 sm:h-4"
                      />
                    ))}
                  </div>
                </div>
                <span className="text-gray-700">
                  (651,651 ratings) · 22 Hours · 155 Lectures
                </span>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-2 sm:gap-3 mt-3">
                <img
                  src={instructor}
                  alt="Instructor"
                  className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                />
                <span className="text-xs sm:text-sm text-gray-700">
                  Created by{" "}
                  <span className="text-blue-600 font-medium">
                    Ronald Richards
                  </span>
                </span>
              </div>

              {/* Languages */}
              <div className="flex items-center gap-2 mt-2">
                <FiGlobe className="text-gray-500 w-4 h-4" />
                <span className="text-xs sm:text-sm text-gray-700">
                  English, Spanish, Italian, German
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="pt-4">
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <div className="border-t pt-4" />

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === "details" && (
                <>
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Course Description
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700">
                    This interactive e-learning course will introduce you to
                    User Experience (UX) design, the art of creating products
                    and services that are intuitive, enjoyable, and
                    user-friendly. Gain a solid foundation in UX principles and
                    learn to apply them in real-world scenarios through engaging
                    modules and interactive exercises.
                  </p>
                  <h2 className="text-lg sm:text-xl font-semibold mt-4">
                    Certification
                  </h2>
                  <p className="text-sm sm:text-base text-gray-700">
                    At Byway, we understand the significance of formal
                    recognition for your hard work and dedication to continuous
                    learning. Upon successful completion of our courses, you
                    will earn a prestigious certification that not only
                    validates your expertise but also opens doors to new
                    opportunities in your chosen field.{" "}
                  </p>
                </>
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
                    <h5 className="text-gray-700 font-normal">
                      UI/UX Designer
                    </h5>
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
                    wealth of practical knowledge to the classroom. He has
                    played a pivotal role in designing user-centric interfaces
                    for renowned tech companies, ensuring seamless and engaging
                    user experiences.
                  </p>
                </div>
              )}

              {activeTab === "syllabus" && (
                <div className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-semibold">Syllabus</h2>
                  <div className="">
                    {syllabus.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row justify-between p-3 sm:p-4 bg-white border rounded-[4px]"
                      >
                        <span className="text-sm sm:text-base font-medium flex items-center gap-3">
                          <FaAngleDown />
                          {item.title}
                        </span>
                        <div className="text-xs sm:text-sm text-gray-500 flex gap-4 mt-1 sm:mt-0">
                          <span>5 Lessons</span>
                          <span>1 hour</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Learner Reviews Component
                  </h2>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar - Always visible, moves to top on mobile */}
          <aside className="lg:sticky lg:top-4 space-y-4 border p-4 rounded-lg shadow-sm bg-white h-fit">
            <img
              src={courseImage}
              alt="Course Image"
              className="rounded-md w-full"
            />
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold">$49.5</span>
              <span className="text-sm line-through text-gray-400">$99.0</span>
              <span className="text-sm text-green-600 font-medium">
                50% Off
              </span>
            </div>
            <button className="mt-4 w-full bg-gray-950 transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer text-white py-2 rounded-md font-semibold text-center block">
              Add to Cart
            </button>
            <button className="w-full border border-black py-2 rounded text-sm sm:text-base cursor-pointer transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              Buy Now
            </button>
            <div className="flex justify-center gap-4 pt-3">
              <FaGoogle className="text-gray-600 hover:text-black cursor-pointer" />
              <FaFacebookF className="text-gray-600 hover:text-black cursor-pointer" />
              <FaTelegramPlane className="text-gray-600 hover:text-black cursor-pointer" />
              <FaLinkedinIn className="text-gray-600 hover:text-black cursor-pointer" />
            </div>
          </aside>
        </div>
      </div>
      <CustomerCard />
    </>
  );
};

export default CoursePage;
