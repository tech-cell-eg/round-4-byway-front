import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { Mail } from 'lucide-react';

type InstructorCardProps = {
  name: string;
  role: string;
  img?: string;
  rate: number;
  students: number;
  variant?: "default" | "compact";  
};

const getName = (name: string) =>
  name
    .split(" ")
    .map((instructorName) => instructorName[0])
    .join("")
    .slice(0, 2);

const InstructorCard = ({
  name,
  role,
  img,
  rate,
  students,
  variant = "default",
}: InstructorCardProps) => {
  return (
    <div className="rounded-xl border w-[216px] border-[#E2E8F0] shadow-sm p-4  h-auto bg-white transition-all">
      <div className="flex flex-col gap-4 ">
        <Avatar className="rounded-lg w-[177px] h-[132px] mx-auto">
          <AvatarImage className="object-cover w-full h-full" src={img} />
          <AvatarFallback>{getName(name)}</AvatarFallback>
        </Avatar>

        <div className="text-center border-b border-[#E2E8F0] pb-2">
          <h3 className="text-base font-semibold text-slate-900">{name}</h3>
          <p className="text-sm text-slate-600">{role}</p>
        </div>

        <div className="flex justify-between items-center text-sm font-medium text-slate-700 px-2">
          <div className="flex items-center gap-1 text-[#F59E0B]">
            <Star className="fill-[#F59E0B] w-4 h-4" />
            <span className="text-slate-900 text-xs">{rate}</span>
          </div>
          <span className="text-slate-700 text-xs">{students} Students</span>
        </div>

        {variant === "default" && (
          <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg flex justify-center items-center gap-2">
            Send Message
            <Mail/>
          </button>
        )}
      </div>
    </div>
  );
};

export default InstructorCard;
