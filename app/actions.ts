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

export async function getCurrentUser() {
  const user = await fetch("http://localhost:3000/api/get-user");

  return user;
}
