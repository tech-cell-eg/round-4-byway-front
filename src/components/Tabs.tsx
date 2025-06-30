// components/Tabs.tsx
import React from "react";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: {
    id: string;
    label: string;
  }[];
  variant?: "default" | "rounded";
}

const Tabs: React.FC<TabsProps> = ({
  activeTab,
  setActiveTab,
  tabs,
  variant = "default",
}) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 sm:px-12 sm:py-3 text-xs sm:text-sm font-medium cursor-pointer relative border rounded transition-colors duration-300 ${
            activeTab === tab.id
              ? "text-gray-900 bg-blue-100"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          } ${variant === "rounded" ? "rounded-full" : ""}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
