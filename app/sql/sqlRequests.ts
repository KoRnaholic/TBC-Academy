"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath, revalidateTag } from "next/cache";

export async function sqlCreateUser({ id, name, lastName, email }: any) {
  await sql`
    INSERT INTO users (user_id, name, last_name, email)
    SELECT ${id}, ${name}, ${lastName}, ${email}
    WHERE NOT EXISTS (
      SELECT 1 FROM users WHERE user_id = ${id}
    )
  `;
}

//adding product to cart and creating user relationship
export async function sqlCreateUserCart(userId: number, productId: number) {
  const { rows } = await sql`
  SELECT quantity 
  FROM cart
  WHERE user_id = ${userId}
  AND product_id = ${productId}`;
  const quantity = rows[0]?.quantity;

  if (quantity > 0) {
    await sql`
      UPDATE cart
      SET quantity = quantity + 1
      WHERE user_id = ${userId}
      AND product_id = ${productId};
    `;
  } else {
    await sql`
      INSERT INTO cart (user_id, product_id, quantity)
      values (${userId}, ${productId}, 1)
      `;
  }

  revalidateTag("cart");
}

//get all cart items list
export async function sqlGetCartList(userId: number) {
  const { rows } = await sql`
    SELECT products.brand, products.price, cart.product_id, products.product_image, cart.quantity
    FROM cart
    JOIN products ON cart.product_id = products.product_id
    JOIN users ON cart.user_id = users.user_id
    WHERE cart.user_id = ${userId}
    ORDER BY cart.cart_id`;

  return rows;
}

//get cart quantity
// export async function sqlGetCartQuantity(userId: number) {
//   const { rows } = await sql`
//   SELECT SUM(quantity) FROM cart
//   WHERE user_id = ${userId}`;
//   revalidateTag("cart");
//   return rows[0].sum;
// }

export async function sqlIncrementQuantity(
  studentId: string,
  courseId: number
) {
  await sql`
  UPDATE cart
  SET quantity = quantity + 1
  WHERE student_id = ${studentId}
  AND course_id = ${courseId}`;

  revalidatePath("/cart");
}

export async function sqlDecrementQuantity(
  studentId: string,
  courseId: number
) {
  const { rows } = await sql`
  SELECT quantity 
  FROM cart
  WHERE student_id = ${studentId}
  AND course_id = ${courseId}`;
  const quantity = rows[0]?.quantity;

  if (quantity === 1) {
    await sql`
      DELETE FROM cart
      WHERE student_id = ${studentId}
      AND course_id = ${courseId};
    `;
  } else if (quantity > 1) {
    await sql`
      UPDATE cart
      SET quantity = quantity - 1
      WHERE student_id = ${studentId}
      AND course_id = ${courseId};
    `;
  }

  revalidatePath("/cart");
}

export async function sqlClearCart(userId: string) {
  await sql`
  DELETE FROM cart
  WHERE student_id = ${userId};
`;
}

//new
export async function sqlGetCourses() {
  const { rows } = await sql`SELECT 
  courses.*,
  instructors.name AS instructor_name,
  instructors.surname AS instructor_surname,
  instructors.email AS instructor_email,
  courses.price
  FROM courses
  INNER JOIN 
  instructors ON courses.instructor_id = instructors.id
  ORDER BY courses.id;
`;
  revalidatePath("/");
  return rows;
}

export async function sqlGetSingleCourse(course_id: string) {
  const { rows } = await sql`
  SELECT 
  courses.*,
  instructors.name AS instructor_name,
  instructors.surname AS instructor_surname,
  instructors.email AS instructor_email,
  courses.overview,
  courses.price
  FROM courses
  INNER JOIN 
  instructors ON courses.instructor_id = instructors.id
  WHERE courses.id = ${course_id}`;

  return rows;
}

export async function sqlGetInstructors() {
  const { rows } = await sql`SELECT * FROM instructors`;

  return rows;
}

export async function sqlGetCartQuantity(studentId: string) {
  const { rows } = await sql`
    SELECT SUM(quantity) FROM cart
    WHERE student_id = ${studentId}`;

  return rows[0].sum;
}
