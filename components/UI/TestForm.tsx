"use client";
import React from "react";

import { addUser } from "../../app/actions";
import { useFormState } from "react-dom";

export default function TestForm() {
  const [state, formAction] = useFormState(addUser, null);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="text" name="name" className="bg-slate-300" />
      <input type="text" name="email" className="bg-slate-300" />
      <button disabled={state === "pending"} className="bg-yellow-500">
        Add User
      </button>
    </form>
  );
}
