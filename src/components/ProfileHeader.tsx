import { ReactNode,useState } from "react";
import  FillterBtn  from '@/components/FillterBtn';

interface ProfileHeaderProps {
  title: string;
  count?: number;
  children?: ReactNode;
  selectedRating: number | null;
  setSelectedRating: (rate: number | null) => void;
  selectedChapters: string[];
  setSelectedChapters: (chapters: string[]) => void;
}
const ProfileHeader = ({   title,
  count,
  children,
  selectedRating,
  setSelectedRating,
  selectedChapters,
  setSelectedChapters,
}: ProfileHeaderProps) => {
  return (
    <div className="w-full max-w-[920px]  flex-col gap-4 flex">
      <div>
        <h2 className="text-lg font-semibold text-[#0F172A]">
          {title} {count !== undefined && <span className="text-sm text-muted-foreground">({count})</span>}
        </h2>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-between lg:gap-0">
        {children}
        {
        <FillterBtn selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        selectedChapters={selectedChapters}
        setSelectedChapters={setSelectedChapters}/>
        }
      </div>
    </div>
  );
};

export default ProfileHeader;
