import React from "react";

type ReviewStat = {
  label: string;
  value: number;
  badge: string;
  badgeColor: string;
};

const reviewStats: ReviewStat[] = [
  { label: "Total Reviews", value: 1000, badge: "", badgeColor: "" },
  {
    label: "1 star reviews",
    value: 100,
    badge: "1.0",
    badgeColor: "bg-[#EF4444]",
  },
  {
    label: "2 star reviews",
    value: 100,
    badge: "2.0",
    badgeColor: "bg-[#CA8A04]",
  },
  {
    label: "3 star reviews",
    value: 100,
    badge: "3.0",
    badgeColor: "bg-[#FACC15]",
  },
  {
    label: "4 star reviews",
    value: 100,
    badge: "4.0",
    badgeColor: "bg-[#4ADE80]",
  },
  {
    label: "5 star reviews",
    value: 100,
    badge: "5.0",
    badgeColor: "bg-[#16A34A]",
  },
];

const ReviewsBadge: React.FC = () => {
  return (
    <div className="">
      <div className="px-6 py-4 border-gray-200 ">
        <h2 className="text-md font-semibold text-gray-800">Reviews</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 p-4 gap-2">
        {reviewStats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col  shadow-sm rounded-xl bg-white border border-gray-200 p-6"
          >
            <p className="text-gray-700 text-sm mb-1">{stat.label}</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
              {stat.badge && (
                <span
                  className={`text-[#FEF2F2] text-xs font-semibold px-3 py-1 rounded-[2px] ${stat.badgeColor}`}
                >
                  {stat.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsBadge;
