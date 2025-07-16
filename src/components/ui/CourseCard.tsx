import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Course = {
  id: string;
  title: string;
  instructor_name: string;
  average_rating: number;
  rating_count: number;
  total_hours: number;
  lectures: number;
  level: string;
  price: number;
  image: string | null;
};

const CourseCard = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const paginatedCourses = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const fetchCourses = async () => {
    try {
      const authData = localStorage.getItem("auth");
      const token = authData ? JSON.parse(authData).token : null;

      const response = await axios.get(
        "https://round-4-lms-api.digital-vision-solutions.com/api/courses",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;

      if (!Array.isArray(data.courses)) {
        console.error("❌ API 'courses' field is not an array:", data);
        setCourses([]);
      } else {
        setCourses(data.courses);
      }
    } catch (error) {
      console.error("❌ Error fetching courses:", error);
      setCourses([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <div className="w-full">
      <div className="flex justify-end mb-4 gap-4 px-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-[#E2E8F0] hover:bg-[#CBD5E1] transition text-black px-3 py-1 rounded disabled:opacity-50"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="bg-[#E2E8F0] hover:bg-[#CBD5E1] transition text-black px-3 py-1 rounded disabled:opacity-50"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[24px] px-4">
        {paginatedCourses.map((course) => {
          const courseImage =
            course.image || "src/components/ui/images/cources.jpg";

          return (
            <Card
              key={course.id}
              className="w-full max-w-[298px] sm:h-[420px] lg:h-[390px] p-[16px] border border-[#E2E8F0] flex flex-col mx-auto"
            >
              <img
                src={courseImage}
                alt={course.title}
                className="w-full h-[170px] object-cover p-2 rounded-md"
              />

              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription className="text-sm">
                  By {course.instructor_name}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i <= Math.round(course.average_rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-muted-foreground font-semibold">
                    ({course.rating_count} Ratings)
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {course.total_hours} Total Hours. {course.lectures} Lectures.{" "}
                  {course.level}
                </p>
              </CardContent>

              <CardFooter>
                <p className="text-xl font-bold">{course.price} EGP</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCard;
