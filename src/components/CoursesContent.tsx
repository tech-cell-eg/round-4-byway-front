import React, { useState } from 'react'
import ProfileHeader from '@/components/ProfileHeader';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CoursesContent = () => {
  
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
      const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
      const [searchQuery, setSearchQuery] = useState('');
  
  
  //  const filteredCourses = courses.filter((course) => {
  //     const matchesRating = selectedRating ? course.rate === selectedRating : true;
  //     const matchesChapters = selectedChapters.length > 0 ? selectedChapters.includes(course.chapters) : true;
  //     const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase());
  
  //     return matchesRating && matchesChapters && matchesSearch;
  //   });
  

  return (
    <>
      <ProfileHeader 
       title="Courses"
        // count={filteredCourses.length}
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

    </>
  )
}

export default CoursesContent