"use client";
import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialState) {
  const [value, setValue] = useState(function () {
    if (typeof window !== "undefined") {
      console.log("we are running on the client");
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
