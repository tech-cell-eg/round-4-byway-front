import React, { useState, useEffect } from 'react'
import ProfileHeader from './ProfileHeader'
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import InstructorCard from '@/components/InstructorCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';

type InstructorType = {
  name: string;
  role: string;
  img: string;
  rate: number;
  students: number;
  chapters: string;
};

const TeacherContent = () => {
  const [instructors, setInstructors] = useState<InstructorType[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((item: any): InstructorType => ({
          name: item.title.split(" ").filter((word: string) => !word.includes("-")).slice(0, 2).join(" "),
          role: item.category,
          img: item.image,
          rate: Math.floor(Math.random() * 5) + 1,
          students: Math.floor(Math.random() * 5000),
          chapters: ["1-10", "10-15", "15-20", "20-25", "25-30"][Math.floor(Math.random() * 5)],
        }));
        setInstructors(mapped);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredInstructors = instructors.filter((instructor) => {
    const matchesRating = selectedRating ? instructor.rate === selectedRating : true;
    const matchesChapters = selectedChapters.length > 0 ? selectedChapters.includes(instructor.chapters) : true;
    const matchesSearch = instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesRating && matchesChapters && matchesSearch;
  });

  const totalPages = Math.ceil(filteredInstructors.length / itemsPerPage);
  const paginatedInstructors = filteredInstructors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset on search
            }}
          />
        </div>
      </ProfileHeader>

      <div className="flex flex-wrap gap-4 mt-4 w-fit justify-center lg:justify-start">
        {paginatedInstructors.map((inst, i) => (
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

      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  isActive={false}
                >
                  &lt;
                </PaginationLink>
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  isActive={false}
                >
                  &gt;
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}

export default TeacherContent
