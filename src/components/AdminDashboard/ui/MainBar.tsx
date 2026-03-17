import { useState } from "react";
import {StudentsBar} from "./table/StudentsBar"
import {TutorsBar} from "./table/TutorsBar"
import {CoursesBar} from "./table/CoursesBar"
import {PaymentsBar} from "./table/PaymentsBar"
import { ReportsBar } from "./table/ReportsBar";
import {OverviewContent } from "./table/OverviewContent"

export const MainBar = () => {
    const [activeTab, setActiveTab] = useState("Overview");

    const tabs = [
        "Overview",
        "Students",
        "Tutors",
        "Courses",
        "Payments",
        "Reports"
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "Students":
                return <StudentsBar />;
            case "Tutors":
                return <TutorsBar />;
            case "Courses":
                return <CoursesBar />;
            case "Payments":
                return <PaymentsBar />;
            case "Reports":
                return <ReportsBar />;
            default:
                return <OverviewContent />;
        }
    };

    return (
        <section className="px-8 py-8">
            <div className="bg-white rounded-lg shadow-sm p-6 gap-4">

                <div className="flex gap-6 border-b pb-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-5 border-b-2 transition-colors duration-200 ${
                                activeTab === tab
                                    ? "border-red-500 text-gray-900"
                                    : "border-transparent text-gray-500 hover:text-gray-800"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {renderContent()}

            </div>
        </section>
    );
};