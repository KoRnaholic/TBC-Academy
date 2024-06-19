"use server";

import { Resend } from "resend";
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
  const resend = new Resend(process.env.RESEND_API_KEY);
  const name = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = Number(formData.get("phone"));
  const text = formData.get("text");

  // resend.contacts.create({
  //   email: `${email}`,
  //   firstName: `${name}`,
  //   lastName: `${lastName}`,
  //   unsubscribed: false,
  //   audienceId: "a0242a62-7b7d-4223-9b3e-90834243f6b8",
  // });

  //validation
  const result = schema.safeParse({
    name: name,
    lastName: lastName,
    email: email,
    phone: phone,
    text: text,
  });

  if (result.error) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  } else {
    //Sending To Email
    await resend.emails.send({
      from: `${name} ${lastName} <onboarding@resend.dev>`,
      to: ["a_arnoup@cu.edu.ge"],
      subject: "Hello world",
      text: `${text}`,
    });
    return { success: true };
  }
}
