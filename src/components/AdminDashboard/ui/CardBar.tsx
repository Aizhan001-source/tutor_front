import { useEffect } from "react";
import MetricCard from "./MetricCard";

import StudentsIcon from "../../../assets/person2.svg";
import TutorsIcon from "../../../assets/hat2.svg";
import SessionsIcon from "../../../assets/book2.svg";
import RevenueIcon from "../../../assets/dollar.svg";

import { useStudentStore } from "../../../store/students/studentStore";
import { useTutorCountStore } from "../../../store/tutors/tutorCountStore";

export const CardBar = () => {
  const {
    count: studentsCount,
    fetchStudentsCount,
    isLoading: studentsLoading,
  } = useStudentStore();

  const {
    count: tutorsCount,
    fetchTutorsCount,
    isLoading: tutorsLoading,
  } = useTutorCountStore();

  useEffect(() => {
    fetchStudentsCount();
    fetchTutorsCount();
  }, [fetchStudentsCount, fetchTutorsCount]);

  return (
    <div>
      <section className="px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <span className="text-gray-500 mt-2">
          Manage users, courses, and platform operations
        </span>
      </section>

      <section className="px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          <MetricCard
            title="Total Students"
            value={
              studentsLoading
                ? "Loading..."
                : studentsCount.toLocaleString()
            }
            color="bg-blue-500"
            imgSrc={StudentsIcon}
          />

          <MetricCard
            title="Total Tutors"
            value={
              tutorsLoading
                ? "Loading..."
                : tutorsCount.toLocaleString()
            }
            color="bg-purple-500"
            imgSrc={TutorsIcon}
          />

          <MetricCard
            title="Active Sessions"
            value="487"
            color="bg-green-500"
            imgSrc={SessionsIcon}
          />

          <MetricCard
            title="Revenue (MTD)"
            value="$45,892"
            color="bg-yellow-500"
            imgSrc={RevenueIcon}
          />

        </div>
      </section>
    </div>
  );
};