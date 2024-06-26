"use server";

import { EditCourse, sqlEditCourse } from "../sql/sql-courses/sqlEditCourse";

export async function editCourse(courseId: number, formData: FormData) {
  const courseObj: EditCourse = {
    courseName: formData.get("name") as string,
    lessons: Number(formData.get("lessons")),
    price: formData.get("price") as number | string,
    duration: formData.get("duration") as string,
    overview: formData.get("overview") as string,
    courseId: courseId,
  };

  await sqlEditCourse(courseObj);
}
