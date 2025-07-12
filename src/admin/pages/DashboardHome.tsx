import { Button } from "@/components/ui/button";
import { Chart } from "../components/Chart";
import CommissionCard from "../components/CommissionCard";
import ReviewsBadge from "../components/ReviewsBadge";
import CoursesCard from "../component/CoursesCard";

const cardsData = [
  { amount: "12,345", label: "Total Commission" },
  { amount: "8,192", label: "Pending Payout" },
  { amount: "4,153", label: "Paid Out" },
];

const DashboardHome = () => (
  <div className="pt-6 sm:pt-0">
    {/* Header Section */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-semibold">
        Dashboard
      </h1>
      <Button className="bg-[#2563EB] hover:bg-blue-800 rounded-lg px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-white cursor-pointer w-full sm:w-auto">
        Add Course
      </Button>
    </div>

    {/* Cards and Chart Section */}
    <div className="flex flex-col lg:flex-row gap-6 mb-8">
      {/* Commission Cards - Stack vertically on small/medium, horizontal on large */}
      <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto lg:min-w-[300px]">
        {cardsData.map((card, index) => (
          <div key={index} className="flex-1">
            <CommissionCard amount={card.amount} label={card.label} />
          </div>
        ))}
      </div>
      {/* Chart - Takes remaining space */}
      <div className="flex-1 min-h-[300px] md:min-h-[400px] w-fit">
        <Chart />
      </div>
    </div>
    <ReviewsBadge />
    <CoursesCard />
  </div>
);

export default DashboardHome;
