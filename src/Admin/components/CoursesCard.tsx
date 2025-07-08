import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import SmartPagination from "./SmartPagination";
type FakeStoreProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

type CourseCardProps = {
  title: string;
  instructor: string;
  rating: number;
  ratingCount: number;
  hours: number;
  lectures: number;
  level: string;
  price: string;
};

const CoursesCard = () => {
  const [courses, setCourses] = useState<CourseCardProps[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: FakeStoreProduct[]) => {
        const allCourses = data.map((item) => ({
          title: item.title.slice(0, 15),
          instructor: "Fake Instructor",
          rating: item.rating.rate,
          ratingCount: item.rating.count,
          hours: Math.floor(Math.random() * 20) + 1,
          lectures: Math.floor(Math.random() * 50) + 5,
          level: "Beginner",
          price: `$${item.price.toFixed(1)}`,
        }));
        setCourses(allCourses);
      });
  }, []);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  return (
    <div className="w-full p-8 bg-gray-100">
      <h2 className="text-[#0F172A] text-[20px] font-bold mb-4">Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCourses.map((course, index) => (
          <Card key={index} className="w-full h-auto p-6 border border-[#E2E8F0] flex flex-col">
            <input
              className="w-[54px] mb-2 text-[12px] bg-gray-100 text-[#0F172A] p-2 border-2 rounded-[10px] hover:bg-gray-500 hover:text-white font-bold"
              type="button"
              value="free"
            />
            <CardHeader>
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <hr />
            </CardHeader>
            <CardContent className="text-black flex flex-col gap-7 mt-2">
              <div className="flex flex-wrap justify-between gap-4">
                <div className="leading-4 flex flex-col gap-1">
                  <p className="text-xl font-bold">{course.price}</p>
                  <p className="text-[18px] text-[#334155]">Price</p>
                </div>
                <div className="leading-4 flex flex-col gap-1">
                  <p className="text-xl font-bold">{course.hours}</p>
                  <p className="text-[18px] text-[#334155]">Chapter</p>
                </div>
                <div className="leading-4 flex flex-col gap-1">
                  <p className="text-xl font-bold">{course.lectures}</p>
                  <p className="text-[18px] text-[#334155]">Orders</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between gap-4">
                <div className="leading-4 flex flex-col gap-1">
                  <p className="text-xl font-bold">{course.ratingCount}</p>
                  <p className="text-[18px] text-[#334155]">Certificates</p>
                </div>
                <div className="leading-4 flex flex-col gap-1">
                  <p className="text-xl font-bold">{course.hours}</p>
                  <p className="text-[18px] text-[#334155]">Reviews</p>
                </div>
                <div className="leading-4 flex flex-col gap-1">
                  <p className="text-xl font-bold">{course.rating}</p>
                  <p className="text-[18px] text-[#334155]">Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <SmartPagination
          totalPages={Math.ceil(courses.length / itemsPerPage)}
          currentPage={page}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    </div>
  );
};

export default CoursesCard;
