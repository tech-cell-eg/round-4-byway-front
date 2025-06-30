import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface FilterProps {
  selectedRating: number | null;
  setSelectedRating: (rate: number | null) => void;
  selectedChapters: string[];
  setSelectedChapters: (chapters: string[]) => void;
}

const ratings = [5, 4, 3, 2, 1];
const chapters = ["1-10", "10-15", "15-20", "20-25"];
const moreChapters = ["25-30", "30-35", "35-40"];
const prices = ["Free", "Paid"];
const categories = ["Design", "Development"];

const Filter: React.FC<FilterProps> = ({
  selectedRating,
  setSelectedRating,
  selectedChapters,
  setSelectedChapters,
}) => {
  const [showMoreChapters, setShowMoreChapters] = useState(false);

  const handleRatingClick = (rate: number) => {
    setSelectedRating(rate === selectedRating ? null : rate);
  };

  const handleChapterToggle = (range: string) => {
    setSelectedChapters((prev) =>
      prev.includes(range) ? prev.filter((item) => item !== range) : [...prev, range]
    );
  };

  return (
    <aside className="w-full max-w-[305px] p-4 bg-white space-y-4 text-sm">
      <Accordion type="multiple" defaultValue={["rating", "chapters"]} className="w-full space-y-2">
        
        {/* Rating */}
        <AccordionItem value="rating" className="border-b border-[#E2E8F0]">
          <AccordionTrigger className="border-b border-[#E2E8F0] rounded-none p-4 text-[16px] font-medium hover:no-underline text-[#0F172A]">
            Rating
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 py-2 px-4">
              {ratings.map((rate) => (
                <button
                  type="button"
                  key={rate}
                  onClick={() => handleRatingClick(rate)}
                  className="flex items-center gap-2 group"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < rate
                            ? "text-yellow-500 fill-yellow-500 transition-all"
                            : "text-gray-300 fill-[#CBD5E1] transition-all"
                        }
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Chapters */}
        <AccordionItem value="chapters" className="border-b border-[#E2E8F0]">
          <AccordionTrigger className="text-base border-b border-[#E2E8F0] rounded-none p-4 text-[16px] text-[#0F172A] font-medium hover:no-underline">
            Number of Chapters
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 py-2 px-4">
              {[...chapters, ...(showMoreChapters ? moreChapters : [])].map((range) => (
                <label key={range} className="flex items-center gap-3 cursor-pointer">
                  <Checkbox
                    id={`chap-${range}`}
                    checked={selectedChapters.includes(range)}
                    onCheckedChange={() => handleChapterToggle(range)}
                    className="border border-[#E2E8F0] w-6 h-6 rounded-[5px] transition-colors 
                      data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600
                      data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                  />
                  <span>{range}</span>
                </label>
              ))}
              <Button
                type="button"
                variant="link"
                className="text-xs text-blue-600 px-0 mt-1 py-2.5 gap-1.5 flex h-12 justify-start hover:no-underline cursor-pointer"
                onClick={() => setShowMoreChapters((prev) => !prev)}
              >
                {showMoreChapters ? "See Less" : "See More"}
                {showMoreChapters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price */}
        <AccordionItem value="price" className="border-b border-[#E2E8F0]">
          <AccordionTrigger className="text-base border-b border-[#E2E8F0] rounded-none p-4 text-[#0F172A] text-[16px] font-medium hover:no-underline">
            Price
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 py-2 px-4">
              {prices.map((price, i) => (
                <label key={i} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    id={`price-${i}`}
                    className="border border-[#E2E8F0] w-6 h-6 rounded-[5px] transition-colors
                      data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600
                      data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                  />
                  <span>{price}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Category */}
        <AccordionItem value="category" className="border-b border-[#E2E8F0]">
          <AccordionTrigger className="text-base border-b border-[#E2E8F0] text-[#0F172A] rounded-none p-4 text-[16px] font-medium hover:no-underline">
            Category
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 py-2 px-4">
              {categories.map((cat, i) => (
                <label key={i} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    id={`cat-${i}`}
                    className="border border-[#E2E8F0] w-6 h-6 rounded-[5px] transition-colors
                      data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600
                      data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </aside>
  );
};

export default Filter;
