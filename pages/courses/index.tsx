import CardsCourses, { Course } from "@/components/cards-courses";
import React from "react";

type Props = {};

const course: Course[] = [
  {
    id: 1,
    title: "Course 1",
    description: "This is the first course",
    link: "/courses/1",
    instructor: "Instructor 1",
    vidoes: [
      {
        id: 1,
        instructor: "Instructor 1",
        title: "Video 1",
        description: "This is the first video",
        link: "/courses/1/videos/1",
        sheets: [
          { id: 1, title: "Sheet 1", link: "/courses/1/videos/1/sheets/1" },
        ],
        createAt: 0,
        updateAt: 0,
      },
    ],
    createAt: 0,
    updateAt: 0,
  },
  {
    id: 2,
    title: "Course 2",
    description: "This is the second course",
    link: "/courses/2",
    instructor: "Instructor 2",
    vidoes: [
      {
        id: 1,
        instructor: "Instructor 2",
        title: "Video 1",
        description: "This is the first video",
        link: "/courses/2/videos/1",
        sheets: [
          { id: 1, title: "Sheet 1", link: "/courses/2/videos/1/sheets/1" },
        ],
        createAt: 0,
        updateAt: 0,
      },
    ],
    createAt: 0,
    updateAt: 0,
  },
  {
    id: 3,
    title: "Course 3",
    description: "This is the third course",
    link: "/courses/3",
    instructor: "Instructor 3",
    vidoes: [
      {
        id: 1,
        instructor: "Instructor 3",
        title: "Video 1",
        description: "This is the first video",
        link: "/courses/3/videos/1",
        sheets: [
          { id: 1, title: "Sheet 1", link: "/courses/3/videos/1/sheets/1" },
        ],
        createAt: 0,
        updateAt: 0,
      },
    ],
    createAt: 0,
    updateAt: 0,
  },
  {
    id: 4,
    title: "Course 4",
    description: "This is the fourth course",
    link: "/courses/4",
    instructor: "Instructor 4",
    vidoes: [
      {
        id: 1,
        instructor: "Instructor 4",
        title: "Video 1",
        description: "This is the first video",
        link: "/courses/4/videos/1",
        sheets: [
          { id: 1, title: "Sheet 1", link: "/courses/4/videos/1/sheets/1" },
        ],
        createAt: 0,
        updateAt: 0,
      },
    ],
    createAt: 0,
    updateAt: 0,
  },
  {
    id: 5,
    title: "Course 5",
    description: "This is the fifth course",
    link: "/courses/5",
    instructor: "Instructor 5",
    vidoes: [
      {
        id: 1,
        instructor: "Instructor 5",
        title: "Video 1",
        description: "This is the first video",
        link: "/courses/5/videos/1",
        sheets: [
          { id: 1, title: "Sheet 1", link: "/courses/5/videos/1/sheets/1" },
        ],
        createAt: 0,
        updateAt: 0,
      },
    ],
    createAt: 0,
    updateAt: 0,
  },
  {
    id: 6,
    title: "Course 6",
    description: "This is the sixth course",
    link: "/courses/6",
    instructor: "Instructor 6",
    vidoes: [
      {
        id: 1,
        instructor: "Instructor 6",
        title: "Video 1",
        description: "This is the first video",
        link: "/courses/6/videos/1",
        sheets: [
          { id: 1, title: "Sheet 1", link: "/courses/6/videos/1/sheets/1" },
        ],
        createAt: 0,
        updateAt: 0,
      },
    ],
    createAt: 0,
    updateAt: 0,
  },
  {
    id: 7,
    title: "Course 7",
    description: "This is the seventh course",
    link: "/courses/7",
    instructor: "Instructor 7",
    vidoes: [
      {
        id: 1,
        instructor: "Instructor 7",
        title: "Video 1",
        description: "This is the first video",
        link: "/courses/7/videos/1",
        sheets: [
          { id: 1, title: "Sheet 1", link: "/courses/7/videos/1/sheets/1" },
        ],
        createAt: 0,
        updateAt: 0,
      },
    ],
    createAt: 0,
    updateAt: 0,
  },
  {
    id: 8,
    title: "Course 8",
    description: "This is the eighth course",
    link: "/courses/8",
    instructor: "Instructor 8",
    vidoes: [
      {
        id: 1,
        instructor: "Instructor 8",
        title: "Video 1",
        description: "This is the first video",
        link: "/courses/8/videos/1",
        sheets: [
          { id: 1, title: "Sheet 1", link: "/courses/8/videos/1/sheets/1" },
        ],
        createAt: 0,
        updateAt: 0,
      },
    ],
    createAt: 0,
    updateAt: 0,
  },
  {
    id: 9,
    title: "Course 9",
    description: "This is the ninth course",
    link: "/courses/9",
    instructor: "Instructor 9",
    vidoes: [
      {
        id: 1,
        instructor: "Instructor 9",
        title: "Video 1",
        description: "This is the first video",
        link: "/courses/9/videos/1",
        sheets: [
          { id: 1, title: "Sheet 1", link: "/courses/9/videos/1/sheets/1" },
        ],
        createAt: 0,
        updateAt: 0,
      },
    ],
    createAt: 0,
    updateAt: 0,
  },
  {
    id: 10,
    title: "Course 10",
    description: "This is the tenth course",
    link: "/courses/10",
    instructor: "Instructor 10",
    vidoes: [
      {
        id: 1,
        instructor: "Instructor 10",
        title: "Video 1",
        description: "This is the first video",
        link: "/courses/10/videos/1",
        sheets: [
          { id: 1, title: "Sheet 1", link: "/courses/10/videos/1/sheets/1" },
        ],
        createAt: 0,
        updateAt: 0,
      },
    ],
    createAt: 0,
    updateAt: 0,
  },
];

export default function CoursesPage({}: Props) {
  return (
    <div className="mt-3 w-full">
      <h2 className="text-4xl font-bold">Courses</h2>
      <div className="grid grid-cols-fluid gap-6 mt-6">
        {course.map((course, key) => {
          return <CardsCourses key={key} course={course} />;
        })}
      </div>
    </div>
  );
}
