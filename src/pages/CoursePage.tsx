import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useParams } from "react-router-dom";
import Reviews from "@/components/LearnerReviews";

interface Tab {
  id: string;
  label: string;
}

interface Lesson {
  id: number;
  title: string | null;
  description: string;
}

interface SyllabusItem {
  Syllabus_id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

const CoursePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("description");
  const [syllabus, setSyllabus] = useState<SyllabusItem[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);

  const { id } = useParams();
  const token = "24|0Brd0elNLkSdhRwajDtbK6GGQ8nYuF42JQN1ZJeBd9973a08";

  const tabs: Tab[] = [
    { id: "description", label: "Description" },
    { id: "instructor", label: "Instructor" },
    { id: "syllabus", label: "Syllabus" },
    { id: "reviews", label: "Reviews" },
  ];

  useEffect(() => {
    axios
      .get(
        `https://round-4-lms-api.digital-vision-solutions.com/api/courses/${id}/syllabuses`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        setSyllabus(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching syllabuses:", error);
      });
  }, [id]);

  const toggleExpand = (id: number) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="min-h-screen py-4 px-4 sm:py-6 sm:px-6 lg:px-20">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm mb-4">
          <span className="text-gray-900">Home</span>
          <FiChevronRight className="text-gray-300" />
          <span className="text-gray-900">Categories</span>
          <FiChevronRight className="text-gray-300" />
          <span className="text-blue-500 truncate max-w-[120px] sm:max-w-none">
            Introduction to UX Design
          </span>
        </div>

        <div className="flex flex-col-reverse sm:flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title Section */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-bold">
                Introduction to User Experience Design
              </h1>
              <p className="text-gray-700 text-sm sm:text-base">
                This course is meticulously crafted to provide you with a
                foundational understanding of the principles, methodologies, and
                tools that drive exceptional user experiences in the digital
                landscape.
              </p>

              {/* Rating */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">
                <div className="flex items-center">
                  <span className="text-amber-300 font-medium mr-1">4.6</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-amber-300 w-4 h-4" />
                    ))}
                  </div>
                </div>
                <span className="text-gray-700">
                  (651,651 ratings) · 22 Hours · 155 Lectures
                </span>
              </div>

              {/* Instructor Info */}
              <div className="flex items-center gap-3 mt-3">
                <img
                  src={instructor}
                  alt="Instructor"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm text-gray-700">
                  Created by{" "}
                  <span className="text-blue-600 font-medium">
                    Ronald Richards
                  </span>
                </span>
              </div>

              {/* Languages */}
              <div className="flex items-center gap-2 mt-2">
                <FiGlobe className="text-gray-500 w-4 h-4" />
                <span className="text-sm text-gray-700">
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
              {activeTab === "description" && (
                <>
                  <h2 className="text-xl font-semibold">Course Description</h2>
                  <p className="text-gray-700">
                    This interactive e-learning course will introduce you to
                    User Experience (UX) design, the art of creating products
                    and services that are intuitive, enjoyable, and
                    user-friendly. Gain a solid foundation in UX principles and
                    learn to apply them in real-world scenarios through engaging
                    modules and interactive exercises.
                  </p>
                  <h2 className="text-xl font-semibold">Certification</h2>
                  <p className="text-gray-700">
                    At Byway, we understand the significance of formal
                    recognition for your hard work and dedication to continuous
                    learning. Upon successful completion of our courses, you
                    will earn a prestigious certification that not only
                    validates your expertise but also opens doors to new
                    opportunities in your chosen field.
                  </p>
                </>
              )}

              {activeTab === "instructor" && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Instructor
                  </h2>
                  <h3 className="text-blue-500 text-lg font-semibold">
                    Ronald Richards
                  </h3>
                  <p className="text-gray-700">UI/UX Designer</p>
                  <div className="flex gap-4">
                    <img
                      src={instructor}
                      alt="Instructor"
                      className="w-[120px] h-[120px] rounded-full"
                    />
                    <div className="flex flex-col gap-2">
                      <span className="flex items-center gap-2">
                        <IoMedalOutline /> 40,445 Reviews
                      </span>
                      <span className="flex items-center gap-2">
                        <IoSchoolOutline /> 500 Students
                      </span>
                      <span className="flex items-center gap-2">
                        <IoPlayOutline /> 15 Courses
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 pt-5">
                    With over a decade of industry experience, Ronald brings a
                    wealth of practical knowledge...
                  </p>
                </div>
              )}

              {activeTab === "syllabus" && (
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold">Syllabus</h2>
                  {syllabus.map((item) => (
                    <div
                      key={item.Syllabus_id}
                      className="border rounded-md bg-white p-4 cursor-pointer"
                      onClick={() => toggleExpand(item.Syllabus_id)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm sm:text-base flex items-center gap-2">
                          <FaAngleDown
                            className={`transition-transform duration-300 ${
                              expanded === item.Syllabus_id ? "rotate-180" : ""
                            }`}
                          />
                          {item.title}
                        </span>
                        <div className="text-sm text-gray-500 hidden sm:flex gap-4">
                          <span>
                            {item.lessons?.length || 0} Lesson
                            {item.lessons?.length === 1 ? "" : "s"}
                          </span>
                          <span>1 hour</span>{" "}
                          {/* You can replace this with real time if available */}
                        </div>
                      </div>
                      {expanded === item.Syllabus_id && (
                        <div className="mt-2 space-y-2">
                          <p className="text-sm text-gray-700">
                            {item.description}
                          </p>
                          {/* Optional: List lessons if you want */}
                          {item.lessons?.length > 0 && (
                            <ul className="pl-4 list-disc text-sm text-gray-600">
                              {item.lessons.map((lesson, idx) => (
                                <li key={lesson.id}>
                                  {lesson.description || `Lesson ${idx + 1}`}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "reviews" && (
                <div>
                  <Reviews />
                </div>
              )}
            </div>
          </div>
          {/* Right Sidebar */}
          <aside className="lg:sticky lg:top-4 space-y-4 border p-4 rounded-lg bg-white shadow-sm h-fit">
            <img src={courseImage} alt="Course" className="w-full rounded-md" />
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold">$49.5</span>
              <span className="text-sm line-through text-gray-400">$99.0</span>
              <span className="text-sm text-green-600 font-medium">
                50% Off
              </span>
            </div>
            <button className="w-full py-2 bg-gray-950 text-white rounded-md font-semibold hover:bg-gray-700">
              Add to Cart
            </button>
            <button className="w-full border py-2 rounded-md text-sm hover:bg-gray-100">
              Buy Now
            </button>
            <div className="flex justify-center gap-4 pt-3 text-gray-600">
              <FaGoogle />
              <FaFacebookF />
              <FaTelegramPlane />
              <FaLinkedinIn />
            </div>
          </aside>
        </div>
      </div>
      <CustomerCard />
    </>
  );
};

export default CoursePage;
