import ReuseCard from "@/dashboard/shared/reusableComponents/ReuseCard";
import { AreaChartComponent } from "./components/AreaChartComponent";
import HeadOFPromotion from "./components/HeadOFPromotion";
import { ReuseTable } from "@/dashboard/shared/reusableComponents/ReuseTable";

function Promotion() {
  let items = [
    {
      title: "Total Redeemed",
      percentage: 8,
      count: 200.0,
      isMoney: true,
    },
    {
      title: "Total Coupons",
      percentage: 8,
      count: 551,
      isMoney: false,
    },
    {
      title: "Redeemed Amount",
      percentage: 8,
      count: 8.723,
      isMoney: true,
    },
  ];
  return (
    <div>
      <HeadOFPromotion />
      <AreaChartComponent />
      <ReuseCard cards={items} />
      <ReuseTable />
    </div>
  );
}

export default Promotion;
