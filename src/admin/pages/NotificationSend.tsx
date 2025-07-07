import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const NotificationSend: React.FC = () => {
  const [notificationStatus, setNotificationStatus] =
    useState<string>("Published");
  const [title, setTitle] = useState<string>(
    "20% Flat Off for First 100 Students",
  );
  const [description, setDescription] = useState<string>(
    "Buy NCERT Solutions for Class 12 Chemistry and get 20% off on your course. Only first hundred students can avail this offer. Hurry!",
  );
  const [link, setLink] = useState<string>("https://test.com/courses");
  const [customerGroup, setCustomerGroup] = useState<string>("All Group");
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header Section - Unchanged */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            Communication
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <Button className="bg-[#2563EB] hover:bg-blue-800 border rounded-[8px] w-full sm:w-[128px] h-[40px] sm:h-[48px] text-white cursor-pointer text-sm sm:text-base">
            Add Course
          </Button>
        </div>
      </div>

      {/* Action Buttons - Unchanged */}
      <section className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <div>
            <div className="py-1 sm:py-2 text-sm sm:text-base text-gray-700">
              Communication / Notification /{" "}
              <span className="text-[#3B82F6]">Announcement</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <Button className="bg-white hover:bg-gray-400 border rounded-[8px] w-full sm:w-[82px] h-[40px] sm:h-[48px] border-[#E2E8F0] cursor-pointer text-sm sm:text-base">
              Draft
            </Button>
            <Button className="bg-[#16A34A] hover:bg-green-800 border rounded-[8px] w-full sm:w-[82px] h-[40px] sm:h-[48px] text-white cursor-pointer text-sm sm:text-base">
              Save
            </Button>
            <Button className="bg-[#3B82F6] hover:bg-blue-800 border rounded-[8px] w-full sm:w-[82px] h-[40px] sm:h-[48px] text-white cursor-pointer text-sm sm:text-base">
              Publish
            </Button>
          </div>
        </div>
      </section>

      {/* Create Announcement Section - Responsive with Right Space */}
      <div className="flex flex-col lg:flex-row gap-6">
        <section className="mb-6 sm:mb-8 lg:w-[800px] p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">
            Create Announcement
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {/* All your existing form fields remain exactly the same */}
            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-1">
                Notification Status
              </label>
              <select
                value={notificationStatus}
                onChange={(e) => setNotificationStatus(e.target.value)}
                className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded-md"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
                <option value="Archived">Archived</option>
              </select>
            </div>

            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-1">
                Notification Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded-md h-24"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-1">
                Link
              </label>
              <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-1">
                Customer Group
              </label>
              <select
                value={customerGroup}
                onChange={(e) => setCustomerGroup(e.target.value)}
                className="w-full p-2 text-sm sm:text-base border border-gray-300 rounded-md"
              >
                <option value="All Group">All Group</option>
                <option value="Students">Students</option>
                <option value="Teachers">Teachers</option>
              </select>
            </div>

            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-1">
                Upload Thumbnail
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center min-h-[150px] sm:min-h-[200px] flex flex-col items-center justify-center w-full">
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
                  {thumbnail ? (
                    <span className="text-sm sm:text-base">
                      {thumbnail.name}
                    </span>
                  ) : (
                    <span className="text-gray-900 text-base sm:text-lg font-semibold">
                      Drag and drop files, or{" "}
                      <span className="text-blue-600 hover:text-blue-800">
                        browse
                      </span>
                    </span>
                  )}
                </label>
                <p className="text-xs sm:text-sm text-gray-900 mt-1">
                  Upload Thumbnail at .JPEG, .PNG
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Empty space on the right - only visible on lg screens and up */}
        <div className="hidden lg:block flex-1"></div>
      </div>
    </div>
  );
};

export default NotificationSend;
