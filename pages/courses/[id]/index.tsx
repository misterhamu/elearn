import { Course } from "@/components/cards-courses";
import { Button } from "@/components/ui/button";
import { GetCourseByIdReqest, getCourseById } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function CourseById({}: Props) {
  const router = useRouter();
  const { id } = router.query;
  const courseById = useQuery({
    queryKey: ["courseById", String(id)],
    queryFn: async () => {
      const req: GetCourseByIdReqest = { id: String(id) };
      const res = await getCourseById(req);
      return res.data as Course;
    },
    enabled: !!id,
    refetchOnWindowFocus: false,
  });

  if (courseById.isLoading) return <div>Loading...</div>;
  if (courseById.isError) return <div>Error</div>;
  return (
    <div className="mt-3 w-full">
      <div className="flex flex-row justify-between gap-3">
        <div>
          <h1 className=" font-bold text-4xl"> {courseById.data.title}</h1>
        </div>
      </div>
      <div className="mt-6 w-full">
        <div className="mt-3 flex flex-row justify-between gap-3 ">
          <Card className="basis-3/4">
            <CardHeader>
              <CardTitle>Detail</CardTitle>
              <CardDescription>
                <p className="text-lg">{courseById.data.description}</p>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="basis-1/4">
            <CardHeader>
              <CardTitle>Instructor</CardTitle>
              <CardDescription>
                <p className="text-lg">{courseById.data.instructor}</p>
              </CardDescription>
            </CardHeader>
            <CardHeader>
              <CardTitle>Lesson</CardTitle>
              <CardDescription>
                {courseById.data.vidoes.length} lesson
                {courseById.data.vidoes.length > 1 ? "s" : ""}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="mt-6">
        {courseById.data.vidoes.map((video, key) => {
          return (
            <Link key={key} href={video.link}>
            <Card >
              <CardHeader className="flex flex-row justify-between">
                <div>
                  <CardTitle>{video.title}</CardTitle>
                  <CardDescription>
                    <p className="text-lg">{video.description}</p>
                  </CardDescription>
                </div>
                <div>
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
            </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
