import React from "react";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, RadioTower } from "lucide-react";
import xmas from "../../assets/xmas.jpg";

const announcements = [
  {
    id: 1,
    title: "20% off on Xmas",
    content: "Hurry, get the last change for discount of courses.",
    date: "Draft on 25 Jan 2022",
    link: "https://test.com/cources",
    img: xmas,
  },
  {
    id: 2,
    title: "20% off on Xmas",
    content: "Hurry, get the last change for discount of courses.",
    date: "Draft on 25 Jan 2022",
    link: "https://test.com/cources",
    img: xmas,
  },
];

const NotificationAnnouncements: React.FC = () => {
  return (
    <div className="p-3 sm:p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Communication Announcements
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Manage and view all your outgoing communications.
          </p>
        </div>
        <Button className="bg-white text-black hover:bg-gray-300 border border-[#E2E8F0] rounded-xl h-[48px] cursor-pointer px-4 sm:px-6 w-full sm:w-auto min-w-[200px]">
          <span className="truncate">Make A New Announcement</span>
          <RadioTower className="text-gray-900 w-[18px] h-[20px] ml-2 flex-shrink-0" />
        </Button>
      </div>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-[130px] md:flex-shrink-0">
                <img
                  src={announcement.img}
                  alt="Announcement"
                  className="w-full h-auto md:w-[130px] md:h-[94px] object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {announcement.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {announcement.date}
                    </p>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <MoreHorizontal className="w-4 sm:w-5 h-4 sm:h-5" />
                  </Button>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-gray-700">
                  {announcement.content}
                </p>
                <a
                  href={announcement.link}
                  className="mt-2 text-xs sm:text-sm text-blue-600 hover:underline block break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {announcement.link}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationAnnouncements;
