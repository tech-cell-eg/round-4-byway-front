import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { Button } from "./ui/button";

const Reviews = () => {
  interface Review {
    review_id: number;
    rating: number;
    created_at: string;
    comment: string;
    user: {
      id: number;
      first_name: string;
      last_name: string;
      image: string | null;
    };
  }

  const [reviews, setReviews] = useState<Review[]>([]);
  const [visibleCount, setVisibleCount] = useState(2);

  const getReviews = async () => {
    try {
      const res = await axios.get(
        `https://round-4-lms-api.digital-vision-solutions.com/api/courses/2/reviews`
      );
      setReviews(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <div className="flex flex-col shadow-lg my-5 p-5 bg-white dark:bg-gray-900 w-full rounded-lg">
      <h1 className="uppercase font-bold text-2xl">Learner Reviews</h1>
      <main className="flex-1 p-2">
        <h1 className="text-xl font-bold mb-4">Reviews: {visibleCount}</h1>
        <div className="flex flex-col gap-4">
          {reviews.slice(0, visibleCount).map((review, index) => (
            <div
              key={index}
              className="border rounded-md p-4 bg-white dark:bg-gray-800 shadow-sm"
            >
              <h2 className="font-medium text-gray-600">
                course name{" "}
                <span className="font-bold text-black dark:text-white">
                  {review.user.first_name}
                </span>
              </h2>
              <div className="flex items-center gap-1 text-yellow-500">
                Rating:{" "}
                {[...Array(Math.round(review.rating || 0))].map((_, i) => (
                  <StarIcon key={i} fontSize="small" />
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="uppercase font-bold">Review:</span>{" "}
                {review.comment}
              </p>
            </div>
          ))}

          {visibleCount < reviews.length && (
            <Button
              onClick={() => setVisibleCount((prev) => prev + 2)}
              className="w-fit bg-white text-black border hover:bg-gray-200 mt-2"
            >
              View more Reviews
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Reviews;
