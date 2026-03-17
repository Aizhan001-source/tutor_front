import { useState } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Students", "Tutors", "Courses", "Payments", "Reports"];

  return (
    <div className="bg-white rounded-xl shadow-md mb-6">
      <div className="border-b border-gray-200 overflow-x-auto">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 ${
                activeTab === tab
                  ? "text-red-600 border-red-600"
                  : "text-gray-600 border-transparent hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {activeTab === "Overview" && <div></div>}
        {activeTab === "Students" && <div></div>}
        {activeTab === "Tutors" && <div></div>}
        {activeTab === "Courses" && <div></div>}
        {activeTab === "Payments" && <div></div>}
        {activeTab === "Reports" && <div></div>}
      </div>
    </div>
  );
}