import React from "react";
import shoppingCart from "../assets/shopping-cart.png";
import { FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  title: string;
  instructor: string;
  image: string;
  price: number;
  rating: number;
  peopleRating: string;
  lectures: number;
  totalHours: number;
  level: string;
}

const ShoppingCart: React.FC = () => {
  const cartItems: CartItem[] = [
    {
      id: 1,
      title: "Introduction to User Experience Design",
      instructor: "John Doe",
      image: shoppingCart,
      price: 45,
      rating: 4.6,
      peopleRating: "250 rating",
      lectures: 155,
      totalHours: 22,
      level: "All Levels",
    },
    {
      id: 2,
      title: "Introduction to User Experience Design",
      instructor: "John Doe",
      image: shoppingCart,
      price: 45,
      rating: 4.6,
      peopleRating: "250 rating",
      lectures: 155,
      totalHours: 22,
      level: "All Levels",
    },
    {
      id: 3,
      title: "Introduction to User Experience Design",
      instructor: "John Doe",
      image: shoppingCart,
      price: 45,
      rating: 4.6,
      peopleRating: "250 rating",
      lectures: 155,
      totalHours: 22,
      level: "All Levels",
    },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discount = 10;
  const tax = 20;
  const finalTotal = totalPrice - discount + tax;

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10 mb-4">
        <h1 className="text-2xl sm:text-[32px] font-semibold text-gray-900">
          Shopping Cart
        </h1>
        <div className="flex flex-wrap gap-2 items-center text-sm sm:gap-3">
          <span className="text-gray-900 font-normal">Categories</span>
          <FiChevronRight className="text-gray-300" />
          <span className="text-gray-900 font-normal">Details</span>
          <FiChevronRight className="text-gray-300" />
          <span className="text-blue-500">Shopping Cart</span>
        </div>
      </div>
      <div className="my-6 border-t border-gray-200" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row border p-4 rounded-md shadow-sm gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full sm:w-[192px] rounded-md object-cover"
              />
              <div className="flex flex-col sm:flex-row sm:justify-between flex-grow gap-4">
                <div className="flex flex-col">
                  <h5 className="font-semibold text-lg">{item.title}</h5>
                  <p className="text-sm text-gray-700">by {item.instructor}</p>
                  <div className="flex flex-wrap items-center text-sm mt-2 gap-3">
                    <div className="flex gap-1 items-center">
                      <div className="text-amber-300 font-medium text-base">
                        {item.rating}
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-amber-300 w-4 h-4" />
                        ))}
                      </div>
                      <div className="text-sm text-slate-500">
                        ({item.peopleRating})
                      </div>
                    </div>
                    <div className="font-normal text-sm text-gray-950">
                      {item.totalHours} Hours · {item.lectures} Lectures ·{" "}
                      {item.level}
                    </div>
                  </div>
                </div>
                <div className="text-left sm:text-right font-semibold text-lg sm:text-2xl text-gray-900">
                  ${item.price.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Right Side */}
        <div className="border p-4 rounded-md shadow-md h-fit">
          <h2 className="font-semibold text-lg mb-4">Order Details</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Price</span>
              <span className="font-semibold text-lg">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="font-semibold text-lg">
                -${discount.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span className="font-semibold text-lg">${tax.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between">
              <span className="font-bold text-base">Total</span>
              <span className="font-semibold text-xl">
                ${finalTotal.toFixed(2)}
              </span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="mt-4 w-full bg-gray-950 transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer text-white py-2 rounded-md font-semibold text-center block"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
