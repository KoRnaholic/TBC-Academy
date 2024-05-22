import { sql } from "@vercel/postgres";
import { revalidateTag } from "next/cache";

// interface UserObj {
//   id: number;
//   name: string;
//   lastName: string;
//   email: string;
// }

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
export async function sqlGetCartQuantity(userId: number) {
  const { rows } = await sql`
  SELECT SUM(quantity) FROM cart
  WHERE user_id = ${userId}`;
  revalidateTag("cart");
  return rows[0].sum;
}

export async function sqlIncrementQuantity(userId: number, productId: number) {
  await sql`
  UPDATE cart
  SET quantity = quantity + 1
  WHERE user_id = ${userId}
  AND product_id = ${productId}`;
}

export async function sqlDecrementQuantity(userId: number, productId: number) {
  const { rows } = await sql`
  SELECT quantity 
  FROM cart
  WHERE user_id = ${userId}
  AND product_id = ${productId}`;
  const quantity = rows[0]?.quantity;

  if (quantity === 1) {
    await sql`
      DELETE FROM cart
      WHERE user_id = ${userId}
      AND product_id = ${productId};
    `;
  } else if (quantity > 1) {
    await sql`
      UPDATE cart
      SET quantity = quantity - 1
      WHERE user_id = ${userId}
      AND product_id = ${productId};
    `;
  }
}

export async function sqlResetCart(userId: number) {
  await sql`
  DELETE FROM cart
  WHERE user_id = ${userId};
`;
}
