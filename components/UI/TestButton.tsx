"use client";
import React from "react";

export default function TestButton({ handleDelete, id }) {
  return <button onClick={() => handleDelete(id)}>X</button>;
}
