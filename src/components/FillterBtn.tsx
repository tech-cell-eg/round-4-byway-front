import { useRef, useState } from "react";
import { ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Filter from "@/components/Fillter";

interface FilterToggleProps {
  selectedRating: number | null;
  setSelectedRating: (rate: number | null) => void;
  selectedChapters: string[];
  setSelectedChapters: (chapters: string[]) => void;
}

const FilterBtn = ({
  selectedRating,
  setSelectedRating,
  selectedChapters,
  setSelectedChapters,
}: FilterToggleProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleRatingChange = (rate: number | null) => {
    setSelectedRating(rate);
    setOpen(false);
  };

  const handleChaptersChange = (chapters: string[]) => {
    setSelectedChapters(chapters);
    setOpen(false);
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="text-[14px] min-w-[112px] flex items-center gap-1.5 px-6 py-2.5 h-12 rounded-lg border border-[#0F172A] bg-white text-[#0F172A] hover:bg-slate-100 transition-colors"
      >
        <ListFilter className="w-4 h-4" />
        Filter
      </Button>

      {open && (
        <div className="absolute top-[52px] z-50 w-[320px]">
          <Filter
            selectedRating={selectedRating}
            setSelectedRating={handleRatingChange}
            selectedChapters={selectedChapters}
            setSelectedChapters={handleChaptersChange}
          />
        </div>
      )}
    </div>
  );
};

export default FilterBtn;
