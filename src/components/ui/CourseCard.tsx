import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";

type CourseCardProps = {
  title: string;
  instructor_name: string;
  average_rating: number;
  rating_count: number;
  total_hours: number;
  lectures: number;
  level: string;
  price: string;
  image: string;
};

const CourseCard = ({
  title,
  instructor_name,
  average_rating,
  rating_count,
  total_hours,
  lectures,
  level,
  price,
  image,
}: CourseCardProps) => {
   const courseImage  = image || "src/components/ui/images/Frame 427319048.png"; // صورة افتراضية لو مفيش صورة

  return (
    <Card className="w-full max-w-[298px] sm:h-[420px] lg:h-[390px] p-[16px] border border-[#E2E8F0] flex flex-col mx-auto">
      <img
        src={courseImage}
        alt={title}
        className="w-full h-[170px] object-cover p-2 rounded-md"
      />

      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">
          By {instructor_name}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`text-lg ${i <= Math.round(average_rating) ? "text-yellow-500" : "text-gray-300"}`}
            >
              ★
            </span>
          ))}
          <span className="text-sm text-muted-foreground font-semibold">
            ({rating_count} Ratings)
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {total_hours} Total Hours. {lectures} Lectures. {level}
        </p>
      </CardContent>

      <CardFooter>
        <p className="text-xl font-bold">{price}</p>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
