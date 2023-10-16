import { Course, Video } from "@/components/cards-courses";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GetCourseByIdReqest, getCourseById } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";
import Player from "@/components/player";

type Props = {};

export default function VideoDetail({}: Props) {
  const router = useRouter();
  const { id, videoId } = router.query;
  const [video, setVideo] = useState<Video>();
  const courseById = useQuery({
    queryKey: ["courseById", String(videoId)],
    queryFn: async () => {
      const req: GetCourseByIdReqest = { id: String(id) };
      const res = await getCourseById(req);
      return res.data as Course;
    },
    onSuccess: (data) => {
      setVideo(data.vidoes[Number(videoId) - 1]);
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
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => {
              router.push(`/courses/${id}`);
            }}
          >
            Back To Course
          </Button>
          <Button>Next Chapter</Button>
        </div>
      </div>

      {video && (
        <div>
          <div>
            <Player videoUrl={video.videoUrl}></Player>
          </div>

          <div className="mt-6 w-full">
            <div className="mt-3 flex flex-row justify-between gap-3 ">
              <Card className="basis-3/4">
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                  <CardDescription>
                    <p className=" font-light">last update: {video.updateAt}</p>
                  </CardDescription>
                  <CardContent className="p-0">
                    <p className=" font-medium mt-3">{video.instructor}</p>
                    <p className="mt-3">{video.description}</p>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card className="basis-1/4">
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
       
                  <CardContent className="p-0">
                  {video.sheets.map((sheet, key) => {
                return (
                  <Link href={sheet.link} key={key}>
                    <div className="flex flex-row items-center gap-2">
                      <i className="ic ic-file"></i>
                      <p>{sheet.title}</p>
                    </div>
                  </Link>
                );
              })}
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
