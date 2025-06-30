import React from 'react'
import { Button } from "@/components/ui/button"
import img1 from "../assets/instructor.avif"
import { Share2 } from 'lucide-react';

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
const ProfileSidebar = ({ activeTab, onSelect , profileImage }: SidebarProps) => {
  return (
    <aside className='flex flex-col items-center rounded-2xl bg-transparent py-6 gap-6 overflow-hidden 
                  w-full lg:w-[290px] lg:h-[607px] lg:bg-[#F8FAFC] mx-auto lg:mx-0'>
      <div className=' flex-col items-center gap-4 w-[164px] h-[270px] hidden lg:flex'>
        
        <div className='w-full h-40 bg-white rounded-full overflow-hidden'>
          <img src={profileImage || img1} alt="" className='w-full h-full object-cover ' />
        </div>
        <h4 className='text-slate-900 text-[20px] SemiBold'>John Doe</h4>
        
        <Button className='flex items-center gap-1.5 text-sm text-[#0F172A] border border-[#E2E8F0] rounded-md px-6 py-2.5 bg-white shadow-sm w-[164px] h-12 '>
          Share Profile
          <Share2 className="w-6 h-6"/>
        </Button>

      </div>
      <div className="border-[#E2E8F0] border w-[274px] h-.5 hidden lg:flex">
      </div>
       <ul className="w-full flex flex-row lg:flex-col flex-wrap">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => onSelect(item)}
            className={`flex-1 justify-center lg:justify-start h-[53px] flex items-center lg:text-start gap-2 p-4 text-sm font-medium border-b border-[#E2E8F0] cursor-pointer
              ${item === activeTab ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"} last:border-b-0 lg:border-0
            `}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default ProfileSidebar