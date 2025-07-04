import { TrendingUp  } from "lucide-react";

interface CommissionCardProps {
  amount: string;
  label: string;
}

const CommissionCard = ({ amount, label }: CommissionCardProps) => {
  return (
    <div className="flex items-center gap-2.5 py-4 px-10 rounded-xl shadow-sm bg-white border border-[#E2E8F0] max-w-[378px] min-h-[119px]">
      <TrendingUp  className="text-[#16A34A] w-12 h-12" />
      <div className="flex flex-col gap-2">
        <div className="lg:text-2xl text-xl font-medium lg:font-semibold text-[#0F172A]">${amount}</div>
        <p className="lg:text-sm text-xs text-[#334155]">{label}</p>
      </div>
    </div>
  );
};

export default CommissionCard;
