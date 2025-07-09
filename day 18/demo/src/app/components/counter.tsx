"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

const Counter = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  // const { isLoaded, isSignedIn, user } = useUser();
  console.log("Counter Component");

  const [count, setCount] = useState(0);

  if (!isLoaded || !userId) return null;
  // if (!isLoaded || !isSignedIn) return null;

  return (
    <button onClick={() => setCount(count + 1)}>CLicked: {count} times</button>
  );
};

export default Counter;

