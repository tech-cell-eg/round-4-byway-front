import { useState } from "react";
import { Check } from 'lucide-react';
import { CirclePercent } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import visaIcon from "@/assets/visa.png"
import paypalIcon from "@/assets/paypal.png"
import orderDetails from "@/assets/orderDetails.png"
import CoursePage from "./CoursePage";
const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [orderComplete, setOrderComplete] = useState(false);
   const [showCourses, setShowCourses] = useState(false);

  const handleCheckout = () => {
    setOrderComplete(true);

    setTimeout(() => {
      setShowCourses(true);
    }, 3000); 
  };

  if (showCourses) {
    return <CoursePage/>;
  }


  if (orderComplete) {
    return (
      <div className="flex items-center justify-center min-h-screen">
  <div className="flex flex-col items-center justify-center gap-4">
    <div className="w-50 h-50 rounded-full bg-[#16A34A] flex justify-center items-center">
      <Check className="text-white w-24 h-32" />
    </div>
    <h2 className="text-2xl font-bold text-[#0F172A] text-[40px]">Order Complete</h2>
    <p className="text-[#0F172A] mt-2 text-center text-[24px] font-semibold">
      You will now be redirected to your courses page.
    </p>
  </div>
</div>

    );
  }

  return (
    <div className="container w-[85%] mx-auto flex gap-10 mt-6">
      {/* Left Section: Billing + Payment */}
      <div className="flex flex-col gap-4 flex-1 border border-[#E2E8F0] rounded-lg p-6 " >
              <h1 className="text-[#0F172A] font-semibold text-2xl">Checkout Page</h1>
<div className="lg:col-span-2 space-y-6 ">
        <div className="flex lg:flex-row flex-col gap-[17px]">
          <div className="flex flex-col w-1/2">
            <label className="text-[#0F172A] font-semibold text-lg">Country</label>
            <Input className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full  h-[58px] " placeholder="Enter Country" />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-[#0F172A] font-semibold text-lg">State/Union Territory</label>
            <Input className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full  h-[58px] " placeholder="Enter State" />
          </div>
        </div>

        <div className="flex gap-2 flex-col">
          <p className="text-[#0F172A] font-semibold text-lg">Payment Method</p>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="">
            <div className="p-4 rounded-md space-y-4 bg-[#F8FAFC] ">
              <label className="flex items-center gap-2">
                <RadioGroupItem value="card" id="card" className="w-6 h-6 rounded-full border-[2px] border-[#94A3B8]
             data-[state=checked]:border-[#94A3B8] 
             data-[state=checked]:bg-white 
             relative after:content-[''] after:absolute after:inset-1 after:rounded-full 
             after:bg-blue-600 data-[state=checked]:after:block after:hidden"/>
                
                  <span className="text-[#0F172A] font-semibold text-lg">Credit/Debit Card</span>
                <img src={visaIcon} alt="Visa" className="ml-auto w-18" />
              </label>
              {paymentMethod === "card" && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[#0F172A]  text-sm">Name of Card</label>
                  <Input className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full h-[58px] bg-white" placeholder="Name of card" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[#0F172A]  text-sm">Card Number</label>
                  <Input className="border border-[#E2E8F0] p-4 gap-2 rounded-lg w-full h-[58px] bg-white" placeholder="Card Number" />
                  </div>
                  <div className="flex lg:flex-row flex-col gap-4">
                    <div className="flex flex-col w-1/2 gap-2">
                      <label className="text-[#0F172A]  text-sm">Expiry Date</label>
                    <Input className="border border-[#E2E8F0] p-4 gap-2 rounded-lg  h-[58px] bg-white" placeholder="Expiry Date" />
                    </div>
                    <div className="flex flex-col w-1/2 gap-2">
                      <label className="text-[#0F172A]  text-sm">CVC/CVV</label>
                    <Input className="border border-[#E2E8F0] p-4 gap-2 rounded-lg  h-[58px] bg-white" placeholder="CVC/CVV" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 rounded-md bg-[#F8FAFC] ">
              <label className="flex items-center gap-2">
                <RadioGroupItem value="paypal" id="paypal" className="w-6 h-6 rounded-full border border-gray-400 
             data-[state=checked]:border-[#94A3B8] 
             data-[state=checked]:bg-white 
             relative after:content-[''] after:absolute after:inset-1 after:rounded-full 
             after:bg-blue-600 data-[state=checked]:after:block after:hidden" />
                <span className="text-[#0F172A] font-semibold text-lg">PayPal</span>
                <img src={paypalIcon} alt="PayPal" className="ml-auto w-18" />
              </label>
            </div>
          </RadioGroup>
        </div>
      </div>
      </div>
      {/* Right Section: Summary */}
      <div className=" flex-1 max-w-md gap-4 flex flex-col">
        <h4 className="text-[#0F172A] font-semibold text-xl">Order Details</h4>
        
        <div className="flex gap-4 bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] rounded-lg p-6 ">
          <img  src={orderDetails}
            alt="Course"
            className="rounded w-33 h-33 object-cover"
          />
          <div className="flex flex-col gap-1">
            <p className="text-sm text-blue-600 ">Design</p>
            <p className="font-semibold text-lg">Introduction to User Experience Design</p>
            <p className="text-sm text-gray-500">155 Lectures · 22 Total Hours</p>
            <p className="font-semibold text-lg mt-1">$45.00</p>
          </div>
        </div>
            <div className="relative flex">
              <CirclePercent className="absolute left-6 bottom-1/2 translate-y-1/2 w-6 h-6 text-[#0F172A]"/>
        <Input className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] rounded-lg px-14  w-full h-[58px] placrholder:text-[#0F172A] placrholder:text-sm uppercase" placeholder="Apply Coupon Code" />
            </div>

        <div className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] rounded-lg p-4 flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-[16px] text-[#0F172A]">Price</p>
            <h5 className="font-semibold text-lg text-[#0F172A]">$300.00</h5>
          </div>
          <div className="flex justify-between">
            <p className="text-[16px] text-[#0F172A]">Discount</p>
            <h5 className="font-semibold text-lg text-red-500">- $10.00</h5>
          </div>
          <div className="flex justify-between">
            <p className="text-[16px] text-[#0F172A]">Tax</p>
            <h5 className="font-semibold text-lg text-[#0F172A]">$20.00</h5>
          </div>
          <div className="border-t border-[#E2E8F0] pt-4 flex justify-between font-semibold">
            <p className="text-xl text-[#0F172A]">Total</p>
            <h5 className="font-semibold text-xl text-[#0F172A]">$290.00</h5>
          </div>
        </div>

        <Button onClick={handleCheckout} className="w-full h-12 text-white text-sm cursor-pointer font-medium bg-[#020617] flex justify-center items-center gap-1.5 py-2.5 px-6 rounded-lg">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};
export default Checkout;
