import React, { useState, useEffect } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import CourseCard from "./ui/CourseCard";
import { Pagination } from "@/components/ui/pagination";

type CourseType = {
  id: number;
  name: string;
  image: string;
  rating: number;
  chapters: string;
};

const CoursesContent = () => {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map(
          (item: any): CourseType => ({
            id: item.id,
            name: item.name,
            image: item.image,
            rating: Math.floor(item.rating),
            chapters:
              item.chapters_count <= 10
                ? "1-10"
                : item.chapters_count <= 15
                ? "10-15"
                : item.chapters_count <= 20
                ? "15-20"
                : item.chapters_count <= 25
                ? "20-25"
                : "25-30",
          }),
        );
        setCourses(mapped);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesRating = selectedRating
      ? course.rating === selectedRating
      : true;
    const matchesChapters =
      selectedChapters.length > 0
        ? selectedChapters.includes(course.chapters)
        : true;
    const matchesSearch = course.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesRating && matchesChapters && matchesSearch;
  });

  return (
    <>
      <ProfileHeader
        title="Courses"
        count={filteredCourses.length}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        selectedChapters={selectedChapters}
        setSelectedChapters={setSelectedChapters}
      >
        <div className="relative w-[300px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            className="w-[300px] min-h-11 border border-[#E2E8F0] gap-2 rounded-lg p-2.5"
            placeholder="Search Course"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </ProfileHeader>

      <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.name}
            image={course.image}
            rating={course.rating}
            chapters={course.chapters}
          />
        ))}
      </div>
    </>
  );
};

export default CoursesContent;
