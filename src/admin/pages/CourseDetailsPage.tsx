import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Tabs from "@/components/Tabs";

const tabItems = [
  { id: "description", label: "Description" },
  { id: "syllabus", label: "Syllabus" },
  { id: "faqs", label: "FAQs" },
];

const CourseDetailsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [description, setDescription] = useState("");
  const [introVideo, setIntroVideo] = useState<File | null>(null);
  const [introImage, setIntroImage] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIntroVideo(e.target.files[0]);
      setIntroImage(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-6 sm:p-6 space-y-4 sm:space-y-6">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-semibold">
              NCERT Solutions for Class 12 Chemistry
            </h2>
            <p className="text-sm text-gray-500">Details</p>
          </div>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <Button className="bg-white hover:bg-gray-400 border rounded-[8px] w-full sm:w-[82px] h-[48px] border-[#E2E8F0] cursor-pointer">
              Draft
            </Button>
            <Button className="bg-[#16A34A] hover:bg-green-800 border rounded-[8px] w-full sm:w-[82px] h-[48px] text-white cursor-pointer">
              Save
            </Button>
            <Button className="bg-[#3B82F6] hover:bg-blue-800 border rounded-[8px] w-full sm:w-[82px] h-[48px] text-white cursor-pointer">
              Publish
            </Button>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Course Name
            </label>
            <Input
              placeholder="Course Title"
              defaultValue="NCERT Solutions for Class 12 Chemistry"
            />
          </div>

          {/* Upload Intro Video */}
          <div>
            <label className="block mb-1 text-sm text-gray-700">
              Upload Intro Video
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center min-h-[200px] flex flex-col items-center justify-center">
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                id="video-upload"
              />
              <label
                htmlFor="video-upload"
                className="cursor-pointer text-gray-600 hover:text-gray-800"
              >
                {introVideo ? (
                  <span>{introVideo.name}</span>
                ) : (
                  <span className="text-gray-900 text-lg font-semibold">
                    Drag and drop files, or{" "}
                    <span className="text-blue-600 hover:text-blue-800">
                      browse
                    </span>
                  </span>
                )}
              </label>
              <p className="text-sm text-gray-900 mt-1">
                Upload Video at .Mov, .MP4
              </p>
            </div>
          </div>

          {/* Upload Intro Image */}
          <div>
            <label className="block mb-1 text-sm text-gray-700">
              Upload Intro Image
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center min-h-[200px] flex flex-col items-center justify-center">
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                id="thumbnail-upload"
              />
              <label
                htmlFor="thumbnail-upload"
                className="cursor-pointer text-gray-600 hover:text-gray-800"
              >
                {introImage ? (
                  <span>{introImage.name}</span>
                ) : (
                  <span className="text-gray-900 text-lg font-semibold">
                    Drag and drop files, or{" "}
                    <span className="text-blue-600 hover:text-blue-800">
                      browse
                    </span>
                  </span>
                )}
              </label>
              <p className="text-sm text-gray-900 mt-1">
                Upload Image in .JPEG, .PNG
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabs={tabItems}
          />
          <Button variant="link" className="text-blue-600 text-sm">
            + Add Section
          </Button>
        </div>

        {/* Tab Content */}
        {activeTab === "description" && (
          <div className="mt-4 space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <div className="border rounded-md bg-white p-2 w-full">
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                className="lg:h-[200px] md:h-[200px] sm:h-[100px]"
              />
            </div>
          </div>
        )}

        {activeTab === "syllabus" && (
          <div className="mt-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Syllabus
            </label>
            <Textarea placeholder="Add syllabus content..." rows={8} />
          </div>
        )}

        {activeTab === "faqs" && (
          <div className="mt-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              FAQs
            </label>
            <Textarea placeholder="Add FAQ content..." rows={8} />
          </div>
        )}
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-[300px] flex-shrink-0 space-y-6 md:pt-8">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Course Price
          </label>
          <Input placeholder="$199.00" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Language
          </label>
          <Select defaultValue="english">
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="arabic">Arabic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Level
          </label>
          <Select defaultValue="beginner">
            <SelectTrigger>
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </aside>
    </div>
  );
};

export default CourseDetailsPage;
