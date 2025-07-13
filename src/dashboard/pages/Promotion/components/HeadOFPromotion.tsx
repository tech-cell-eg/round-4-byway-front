import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function HeadOFPromotion() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-[#0F172A] font-semibold text-xl">Coupons</h2>
      <Button className="bg-[#3B82F6] text-white h-[48px] cursor-pointer hover:bg-[#3B82F6E5]">
        <Plus /> Create New Coupon
      </Button>
    </div>
  );
}

export default HeadOFPromotion;
