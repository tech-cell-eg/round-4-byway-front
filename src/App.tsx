import { useEffect, useState } from 'react';
import './App.css';
import CourseCard from './components/ui/CourseCard';

type CourseCardProps = {
  image: string;
  title: string;
  instructor: string;
  rating: number;
  ratingCount: number;
  hours: number;
  lectures: number;
  level: string;
  price: string;
};

type FakeStoreProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

function App() {
  const [Courses, setCourses] = useState<CourseCardProps[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data: FakeStoreProduct[]) => {
        const allCourses = data.map((item) => ({
          image: item.image,
          title: item.title.slice(0, 20),
          instructor: 'Fake Instructor',
          rating: item.rating.rate,
          ratingCount: item.rating.count,
          hours: Math.floor(Math.random() * 20) + 1,
          lectures: Math.floor(Math.random() * 50) + 5,
          level: 'Beginner',
          price: `$${item.price}`,
        }));
        setCourses(allCourses);
      });
  }, []);

  return (
    <div className="px-[80.5px] py-10 w-full">
      <div className="flex justify-between items-center mb-[60px]">
        <h2 className="text-xl font-bold">Courses</h2>
        <a
          href="/courses"
          className="text-blue-600 hover:underline text-sm font-medium">See More
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] px-4">
        {Courses.slice(0,4).map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

    </div>
  );
}

export default App;
