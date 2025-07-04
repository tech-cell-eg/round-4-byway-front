import React from 'react'
import { Button } from "@/components/ui/button"
import img1 from "../assets/instructor.avif"
import { Share2 } from 'lucide-react'
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const navItems: string[] = [
  "Profile",
  "My Courses",
  "Teachers",
  "Message",
  "My Reviews",
];

interface SidebarProps {
  onSelect: (tab: string) => void;
  activeTab: string;
  profileImage: string;
}

const ProfileSidebar = ({ activeTab, onSelect, profileImage }: SidebarProps) => {
  return (
    <aside className="flex flex-col items-center rounded-2xl py-6 gap-6 overflow-hidden 
                  w-full lg:w-[290px] lg:h-[607px] bg-transparent lg:bg-[#F8FAFC] mx-auto lg:mx-0">
      <div className="flex-col items-center gap-4 w-[164px] h-[270px] hidden lg:flex">
        <div className="w-full h-40 bg-white rounded-full overflow-hidden">
          <img src={profileImage || img1} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h4 className="text-[#0F172A] text-[20px] font-semibold">John Doe</h4>
        <Button
  className="flex items-center gap-1.5 text-sm text-[#0F172A] hover:text-white hover:bg-[#0F172A] cursor-pointer border border-[#E2E8F0] rounded-md px-6 py-2.5 bg-white shadow-sm w-[164px] h-12"
  onClick={() => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => toast.success("Profile link copied!"))
      .catch(() => toast.error("Failed to copy link"));
  }}
>
  Share Profile
  <Share2 className="w-5 h-5" />
</Button>
 <Toaster richColors />
      </div>

      <div className="border-[#E2E8F0] border w-[274px] hidden lg:flex" />

      <ul className="w-full flex flex-row lg:flex-col flex-wrap bg-[#F8FAFC]">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => onSelect(item)}
            className={`flex-1 justify-center lg:justify-start h-[53px] flex items-center gap-2 p-4 text-sm font-medium border-b border-[#E2E8F0] cursor-pointer
              ${
                item === activeTab
                  ? "bg-[#0F172A] text-white"
                  : "bg-white text-[#0F172A] hover:bg-gray-100 transition"
              } last:border-b-0 lg:border-0`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default ProfileSidebar
