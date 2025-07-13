import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "./ui/button";

const Reviews = () => {
  const [reviews, setReviews] = useState(3);

  const handleReview = () => {
    setReviews((prev) => prev + 2);
  };

  return (
    <div className="flex flex-col bg-white dark:bg-gray-900">
      {/* <h1 className="uppercase font-bold text-2xl">learner reviews</h1> */}
       <main className="flex-1 p-2">
        <h1 className="text-xl font-semibold mb-4">Reviews ({reviews})</h1>
        <div className="flex flex-col gap-4">
          {Array(reviews)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="border rounded-md p-4 bg-white dark:bg-gray-800 shadow-sm"
              >
                <h2 className=" text-gray-600">
                  Course Name:{" "}
                  <span className="font-semibold text-lg text-black">
                    Beginner’s Guide to Design
                  </span>
                </h2>
                <div className="flex items-center gap-1 text-yellow-500">
                  Rating: {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} fontSize="small" />
                  ))}
                </div>
                <p className="mt-2 text-[16px] text-gray-700 dark:text-gray-300">
                <span className="text-sm capitalize">review :</span>  I was initially apprehensive, having no prior design
                  experience. But the instructor, John Doe, did an amazing job
                  of breaking down complex concepts into easily digestible
                  modules. The video lectures were engaging, and the real-world
                  examples really helped solidify my understanding.
                </p>
              </div>
            ))}
          <Button
            onClick={handleReview}
            className="w-fit bg-white text-black border hover:bg-gray-200 mt-2"
          >
            View more Reviews
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Reviews;
