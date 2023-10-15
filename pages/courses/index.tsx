import CardsCourses from "@/components/cards-courses";
import React from "react";

type Props = {};

export default function CoursesPage({}: Props) {
  return (
    <div className="mt-3 w-full">
      <h2 className="text-4xl font-bold">Courses</h2>
      <div className="grid grid-cols-fluid gap-6 mt-6">
      <CardsCourses/>
      <CardsCourses/>
      <CardsCourses/>
      <CardsCourses/>
      <CardsCourses/>
      <CardsCourses/>
      <CardsCourses/>
      <CardsCourses/>
      </div>
    </div>
  );
}
