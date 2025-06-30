import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import avater from "../assets/avater.png";
import { Button } from "./ui/button";

const Reviews = () => {
  const [reviews, setReviews] = useState(3);

  const handleReview = () => {
    setReviews((prev) => prev + 2);
  };

  return (
    <div className="flex flex-col shadow-lg my-5 p-5 bg-white dark:bg-gray-900">
      <h1 className="uppercase font-bold text-2xl">learner reviews</h1>
      <main className="flex gap-4 mt-4 md:flex-row flex-col">
        <section className="rating w-[200px] flex flex-col gap-2">
          <div className="flex items-center justify-start">
            <span className="text-yellow-400">
              <StarIcon />
            </span>
            <h2 className="text-2xl font-bold">4.8</h2>
            <h5 className="px-1">146,951 reviews</h5>
          </div>
          <div className="flex flex-col">
            {[80, 10, 5, 3, 2].map((percent, i) => (
              <span key={i} className="flex items-center gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <StarIcon
                      key={index}
                      className={
                        index >= 5 - i ? "text-gray-300" : "text-yellow-400"
                      }
                    />
                  ))}
                <span className="text-lg text-black dark:text-white font-bold">
                  {percent}%
                </span>
              </span>
            ))}
          </div>
        </section>
        <section className="peopleReviews p-2 flex-1 flex flex-col gap-4">
          {Array(reviews)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col rounded-lg border-2 p-5 gap-8"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={avater}
                    alt="User Avatar"
                    className="rounded-full"
                  />
                  <span className="text-xl uppercase font-bold">Mark Doe</span>
                </div>
                <div className="flex-1">
                  <h3 className="flex items-center gap-1">
                    <span className="text-yellow-400">
                      <StarIcon />
                    </span>
                    5 Reviewed on 22nd March, 2024
                  </h3>
                  <p>
                    I was initially apprehensive, having no prior design
                    experience. But the instructor, John Doe, did an amazing job
                    of breaking down complex concepts into easily digestible
                    modules.
                  </p>
                </div>
              </div>
            ))}
          <Button
            onClick={handleReview}
            className="w-fit bg-white text-black border-2 hover:bg-gray-200"
          >
            View more Reviews
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Reviews;
