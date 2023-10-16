import HttpClient from "./http-clients";

export const getCourses = async () => {
  return HttpClient.get(`/courses`, {});
};

export interface GetCourseByIdReqest {
  id: string;
}

export const getCourseById = async (req: GetCourseByIdReqest) => {
  return HttpClient.get(`/courseById?id=${req.id}`, {});
};
