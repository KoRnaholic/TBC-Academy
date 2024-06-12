"use server";

import { z } from "zod";

//Contact us form action

const schema = z.object({
  name: z.string().trim().min(3, "Name must be at least 3 chars long *"),
  lastName: z.string().trim().min(3, "Name must be at least 3 chars long *"),
  email: z.string().email(),
  phone: z
    .number({
      invalid_type_error: "Phone must be a number *",
      required_error: "Required *",
    })
    .min(5, "Provide relevant phone"),
  text: z.string().min(15, "text must be at least 15 chars long *"),
});
export async function submitContactForm(_: any, formData: FormData) {
  console.log(formData);

  //validation
  const result = schema.safeParse({
    name: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: Number(formData.get("phone")),
    text: formData.get("text"),
  });

  if (result.error) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  return;
}
