"use client"

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div className="">
      <div>About Us</div>
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => router.push("/")}>Go Home</button>
    </div>
  );
};

export default About;
