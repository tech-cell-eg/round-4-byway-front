import { Ellipsis } from "lucide-react";
import { FaStar } from "react-icons/fa";
import avater from "../../assets/avater.png"; // تأكد من صحة المسار

const ReviewsCard = () => {
  return (
    <section className="peopleReviews p-2  justify-center flex flex-col gap-4">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-white shadow-md text-gray-800"
          >
            <header className="flex items-center justify-between">
              <h1 className="flex items-center gap-1">
                Rating:
                <span className="flex items-center gap-1 ml-2">
                  {Array(5)
                    .fill(0)
                    .map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className="text-yellow-400 w-5 h-5"
                      />
                    ))}
                </span>
              </h1>
              <span>
                <Ellipsis />
              </span>
            </header>

            <main className="flex flex-col gap-4 mt-4">
              <h3 className="text-gray-500">
                Course Name:{" "}
                <span className="text-black">Beginners Guide to Design</span>
              </h3>
              <div className="flex items-center gap-3">
                <img
                  src={avater}
                  alt="User Avatar"
                  className="rounded-full w-10 h-10"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Mark Doe</span>
                  <span className="text-sm text-gray-500">3 days ago</span>
                </div>
              </div>
              <p className="text-gray-500">
                I was initially apprehensive, having no prior design experience.
                But the instructor, John Doe, did an amazing job of breaking
                down complex concepts into easily digestible modules. The video
                lectures were engaging, and the real-world examples really
                helped solidify my understanding.
              </p>
            </main>
          </div>
        ))}
    </section>
  );
};

export default ReviewsCard;
