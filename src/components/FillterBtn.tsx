import { useEffect, useRef, useState } from "react";
import { ListFilter, X } from "lucide-react";
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

  const handleRatingChange = (rate: number | null) => {
    setSelectedRating(rate);
    setOpen(false);
  };

  const handleChaptersChange = (chapters: string[]) => {
    setSelectedChapters(chapters);
    setOpen(false);
  };

  // إغلاق عند الضغط خارج العنصر
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

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
        <>
          {/* شاشة صغيرة: Modal-style */}
          <div className="lg:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setOpen(false)}></div>
          <div className="lg:hidden fixed top-1/2 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-4">
            <div className="flex justify-end mb-2">
              <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <Filter
              selectedRating={selectedRating}
              setSelectedRating={handleRatingChange}
              selectedChapters={selectedChapters}
              setSelectedChapters={handleChaptersChange}
            />
          </div>

          {/* شاشة كبيرة: Dropdown-style */}
          <div className="hidden lg:block absolute top-full mt-2 right-0 z-50 w-[320px] bg-white shadow-xl border border-gray-200 rounded-lg">
            <Filter
              selectedRating={selectedRating}
              setSelectedRating={handleRatingChange}
              selectedChapters={selectedChapters}
              setSelectedChapters={handleChaptersChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FilterBtn;
