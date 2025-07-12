import type { RCard } from "../types/types";
import { ArrowUp } from "lucide-react";

function ReuseCard({ cards }: { cards: RCard[] }) {
  return (
    <div className="flex gap-5 mt-8 bg-[#E2E8F061] p-5 flex-wrap" >
      {cards.map((item, index) => {
        return (
          <div
            key={`in-${index}`}
            className="flex-1 shadow min-w-[300px] flex justify-between p-4 rounded-[8px] bg-white items-center"
          >
            <div>
              <h2 className="font-semibold text-2xl text-[#0F172A]">
                {item.isMoney && "$ "}
                {item.count}
              </h2>
              <p className="mt-1 text-sm text-[#334155]">{item.title}</p>
            </div>
            <div className="bg-[#F1F5F9] p-2.5 rounded-[8px] mb-5">
              <span className="flex gap-1 text-[#16A34A]">
                <ArrowUp /> {item.percentage}%
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ReuseCard;
