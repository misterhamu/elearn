import CardsCourses, { Course } from "@/components/cards-courses";
import { getCourses } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

import React from "react";

type Props = {};

export default function CoursesPage({}: Props) {
  const courses = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await getCourses();
      return res.data as Course[];
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="mt-3 w-full">
      <h2 className="text-4xl font-bold">Courses</h2>
      <div className="grid grid-cols-fluid gap-6 mt-6">
        {courses.isSuccess &&
          courses.data.map((course, key) => {
            return (
              <Link key={key} href={course.link}>
                <CardsCourses key={key} course={course} />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
