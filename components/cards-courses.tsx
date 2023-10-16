import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import Image from "next/image";
import { Sheet } from "lucide-react";

export interface Course {
  id: number;
  title: string;
  description: string;
  link: string;
  instructor: string;
  vidoes: Video[];
  createAt: number;
  updateAt: number;
}
export interface Video {
  id: number;
  title: string;
  description: string;
  link: string;
  videoUrl: string;
  instructor: string;
  sheets: Sheet[];
  createAt: number;
  updateAt: number;
}
export interface Sheet {
  id: number;
  title: string;
  link: string;
}

type Props = {
  course: Course;
};

export default function CardsCourses({ course }: Props) {
  return (
    <Card className=" cursor-pointer  duration-300 ease-in-out hover:bg-gray-100">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <div>
            <CardTitle>{course.title}</CardTitle>
            <CardDescription className="mt-2">
              {course.description}
            </CardDescription>
          </div>

          <button>
            <Image
              src={"/images/play.svg"}
              width={32}
              height={32}
              alt=""
            ></Image>
          </button>
        </div>
      </CardHeader>

      {/* <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}
