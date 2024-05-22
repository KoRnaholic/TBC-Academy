"use server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { baseUrl } from "./[locale]/(dashboard)/admin/page";
import {
  sqlCreateUser,
  sqlCreateUserCart,
  sqlDecrementQuantity,
  sqlGetCartList,
  sqlGetCartQuantity,
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

async function getUserObj(): Promise<
  | {
      id: number;
      name: string;
      lastName: string;
      email: string;
    }
  | undefined
> {
  const cookieStore = cookies();

  const authObject = cookieStore.get("auth")?.value;
  if (authObject) {
    const valueObject = JSON.parse(authObject);
    const userObj = {
      id: valueObject?.id,
      name: valueObject?.firstName,
      lastName: valueObject?.lastName,
      email: valueObject?.email,
    };

    console.log(userObj);
    return userObj;
  } else {
    return;
  }
}

//Login server action
export async function Login(formData: FormData) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: formData.get("username"),
      password: formData.get("password"),
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to log in");
  }

  const user = await response.json();
  const cookieStore = cookies();
  cookieStore.set("auth", JSON.stringify(user));

  //Creating user in database
  const userObj = await getUserObj();
  await sqlCreateUser(userObj);

  if (user.username === formData.get("username")) {
    return redirect("/");
  }
}

//LogOut server action
export async function Logout() {
  const cookieStore = cookies();
  cookieStore.delete("auth");

  return redirect("/login");
}

//Add user
export async function addUser(formData: FormData) {
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  const age = formData.get("age");
  await fetch(
    `${baseUrl}/api/add-user?name=${name}&email=${email}&age=${age}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );

  revalidatePath("/users");
}

//Delete user
export async function handleUserDelete(id?: number) {
  "use server";
  await fetch(`${baseUrl}/api/delete-user/${id}`, {
    method: "DELETE",
  });

  revalidatePath("/users");
}

//Edit user
export async function editUser(id: number, formData: FormData) {
  "use server";
  const name = formData.get("name");
  const email = formData.get("email");
  const age = formData.get("age");
  await fetch(
    `${baseUrl}/api/edit-user/${id}?name=${name}&email=${email}&age=${age}`,
    {
      method: "POST",
      next: { revalidate: 0 },
    }
  );

  revalidatePath("/admin");
}

//Get all users
export async function getUsers() {
  const response = await fetch(`${baseUrl}/api/get-users`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 0 },
  });

  let data;
  if (response.headers.get("Content-Type")?.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text(); // Treat non-JSON responses as text
  }

  if (data.users) {
    revalidatePath("/users");
    return data.users.rows; // Assuming the JSON structure contains 'users' object
  } else {
    // Handle HTML response or other non-JSON data
    console.error("Received unexpected data:", data);
    return [];
  }
}

//creating cart
export async function createUserCart(productId: number) {
  const userId = await getUserId();
  await sqlCreateUserCart(userId, productId);
  revalidatePath("/checkout");
}

//get cart list
export async function getCartList() {
  const userId = await getUserId();
  const cartList = await sqlGetCartList(userId);
  revalidatePath("/checkout");

  return cartList;
}

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
