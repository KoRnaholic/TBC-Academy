import React from "react";
import { Logout } from "@/app/actions";

export default function LogOut(props) {
  return (
    <>
      <form action={Logout}>
        <button>Logout</button>
      </form>
    </>
  );
}
