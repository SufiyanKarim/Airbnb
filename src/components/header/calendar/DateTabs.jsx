import React, { useState } from "react";

const DateTabs = () => {
  const [activeTab, setActiveTab] = useState("Dates");

  return (
    <div className="flex justify-center space-x-4 my-4">
      <button
        className={`py-2 px-4 rounded-full ${
          activeTab === "Dates"
            ? "bg-white border border-gray-300"
            : "bg-gray-200"
        }`}
        onClick={() => setActiveTab("Dates")}
      >
        Dates
      </button>
      <button
        className={`py-2 px-4 rounded-full ${
          activeTab === "Months"
            ? "bg-white border border-gray-300"
            : "bg-gray-200"
        }`}
        onClick={() => setActiveTab("Months")}
      >
        Months
      </button>
      <button
        className={`py-2 px-4 rounded-full ${
          activeTab === "Flexible"
            ? "bg-white border border-gray-300"
            : "bg-gray-200"
        }`}
        onClick={() => setActiveTab("Flexible")}
      >
        Flexible
      </button>
    </div>
  );
};

export default DateTabs;
