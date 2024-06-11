"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { baseUrl } from "./[locale]/(dashboard)/admin/page";
import {
  sqlDecrementQuantity,
  sqlGetCartQuantity,
  sqlGetCourses,
  sqlGetInstructors,
  sqlGetSingleCourse,
  sqlIncrementQuantity,
  sqlResetCart,
} from "./sql/sqlRequests";
import { sqlAddCourse } from "./sql/sql-courses/sqlAddCourse";
import { put } from "@vercel/blob";
import { z } from "zod";
import { CreatedCourse } from "../types/types";
import { sqlUpdateUserProfile } from "./sql/sq-profile/sqlUpdateUserProfile";

async function getUserId() {
  const cookieStore = cookies();

  const authObject = cookieStore.get("auth")?.value;
  if (authObject) {
    try {
      const valueObject = JSON.parse(authObject);
      const userId = valueObject.id;
      return userId;
    } catch (error) {
      console.error("Failed to parse authObject:", error);
    }
  }
}

// async function getUserObj(): Promise<
//   | {
//       id: number;
//       name: string;
//       lastName: string;
//       email: string;
//     }
//   | undefined
// > {
//   const cookieStore = cookies();

//   const authObject = cookieStore.get("auth")?.value;
//   if (authObject) {
//     const valueObject = JSON.parse(authObject);
//     const userObj = {
//       id: valueObject?.id,
//       name: valueObject?.firstName,
//       lastName: valueObject?.lastName,
//       email: valueObject?.email,
//     };

//     console.log(userObj);
//     return userObj;
//   } else {
//     return;
//   }
// }

//get cart quantity
export async function getCartQuantity() {
  const userId = await getUserId();
  const cartQuantity = await sqlGetCartQuantity(userId);
  revalidatePath("/");
  return cartQuantity;
}

//increment quantity
export async function incrementQuantity(productId: number) {
  const userId = await getUserId();
  await sqlIncrementQuantity(userId, productId);
  revalidatePath("/checkout");
}
//decrement/delete product quantity
export async function decrementQuantity(productId: number) {
  const userId = await getUserId();
  await sqlDecrementQuantity(userId, productId);
  revalidatePath("/checkout");
}

//reset cart
export async function resetCart() {
  const userId = await getUserId();
  await sqlResetCart(userId);
  revalidatePath("/checkout");
}

export async function getCourses() {
  const courses = await sqlGetCourses();
  revalidatePath("/");

  return courses;
}
export async function getSingleCourse(course_id: string) {
  const course = await sqlGetSingleCourse(course_id);
  revalidatePath("/courses");
  return course;
}

export async function getInstructors() {
  const instructors = await sqlGetInstructors();
  return instructors;
}

// server action for Adding Course
const schema = z.object({
  name: z.string().trim().min(10, "Name must be at least 10 chars long"),
  lessons: z
    .number({ invalid_type_error: "Lessons must be a number" })
    .gt(0)
    .min(1, "Lessons are required"),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .gt(0)
    .lt(100)
    .min(1, "Price is required"),
  duration: z.string().min(1, "Duration is required"),
  overview: z
    .string()
    .trim()
    .min(40, "Overview must be at least 20 chars long")
    .max(300, "Overview must be less then 300 chars long"),
});

const initialState = {
  name: "",
  lessons: "",
  price: "",
  duration: "",
  overview: "",
  errors: {
    name: [""],
    price: [""],
    duration: [""],
    lessons: [""],
    overview: [""],
  },
  success: false,
};
export async function uploadImage(prevState: any, formData: FormData) {
  "use server";
  console.log(typeof Number(formData.get("lessons")));

  //validation
  const result = schema.safeParse({
    name: formData.get("name"),
    lessons: Number(formData.get("lessons")),
    price: Number(formData.get("price")),
    duration: formData.get("duration"),
    overview: formData.get("overview"),
  });

  if (result.success) {
    const imageFile = formData.get("image") as File;
    const blob = await put(imageFile.name, imageFile, {
      access: "public",
    });
    revalidatePath("/");

    const courseInfo: CreatedCourse = {
      name: formData.get("name") as string,
      lessons: Number(formData.get("lessons")) as number,
      price: formData.get("price") as string,
      duration: formData.get("duration") as string,
      overview: formData.get("overview") as string,
      image: blob.url,
    };

    await sqlAddCourse(courseInfo);

    return { success: true, errors: initialState };
  } else {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  // return initialState;
}

//Update user info
export async function updateUserInfo(
  role: string,
  sub: string,
  formData: FormData
) {
  const imageFile = formData.get("image") as File;
  const blob = await put(imageFile.name, imageFile, {
    access: "public",
  });
  console.log(role, sub);
  const userInfo = {
    name: formData.get("name"),
    surname: formData.get("surname"),
    email: formData.get("email"),
    image: blob.url,
    role: role,
    userId: sub,
  };

  await sqlUpdateUserProfile(userInfo);
  revalidatePath("/");
}
