import React, { useState } from 'react'
import ProfileHeader from './ProfileHeader'
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import instructorImg from "@/assets/instructor.avif"
import InstructorCard from '@/components/InstructorCard';

const TeacherContent = () => {
  const instructors = [
    {
      name: "Ronald Richards",
      role: "UI/UX Designer",
      img: instructorImg,
      rate: 4,
      students: 2400,
    },
    {
      name: "Jane Doe",
      role: "Frontend Developer",
      img: instructorImg,
      rate: 5,
      students: 3100,
    },
    {
      name: "Ronald Richards",
      role: "UI/UX Designer",
      img: instructorImg,
      rate: 4,
      students: 2400,
    },
    {
      name: "Jane Doe",
      role: "Frontend Developer",
      img: instructorImg,
      rate: 5,
      students: 3100,
    },
    {
      name: "Ronald Richards",
      role: "UI/UX Designer",
      img: instructorImg,
      rate: 4,
      students: 2400,
    },
    {
      name: "Jane Doe",
      role: "Frontend Developer",
      img: instructorImg,
      rate: 5,
      students: 3100,
    },
    {
      name: "Ronald Richards",
      role: "UI/UX Designer",
      img: instructorImg,
      rate: 4,
      students: 2400,
    },
    {
      name: "Jane Doe",
      role: "Frontend Developer",
      img: instructorImg,
      rate: 5,
      students: 3100,
    },
  ];
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');


 const filteredInstructors = instructors.filter((instructor) => {
    const matchesRating = selectedRating ? instructor.rate === selectedRating : true;
    const matchesChapters = selectedChapters.length > 0 ? selectedChapters.includes(instructor.chapters) : true;
    const matchesSearch = instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesRating && matchesChapters && matchesSearch;
  });

  return (
    <div className='flex flex-col flex-1'>
      <ProfileHeader 
       title="Teachers"
        count={filteredInstructors.length}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        selectedChapters={selectedChapters}
        setSelectedChapters={setSelectedChapters}>
        <div className="relative w-[300px]">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            className="w-[300px] min-h-11 border border-[#E2E8F0] gap-2 rounded-lg p-2.5"
            placeholder="Search User"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
</ProfileHeader>
<div className="flex flex-wrap gap-4 mt-4 w-fit justify-center lg:justify-start">
        {filteredInstructors.map((inst, i) => (
          <InstructorCard
            key={i}
            name={inst.name}
            role={inst.role}
            img={inst.img}
            rate={inst.rate}
            students={inst.students}
          />
        ))}
      </div>
    </div>
  )
}

export default TeacherContent