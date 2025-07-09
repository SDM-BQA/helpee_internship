"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const {push} = useRouter()
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputValue}`)
  };

  return (
    <div className="w-[50rem] shadow shadow-md px-8 py-5 rounded-xl border border-gray-100">
      <div className="font-bold text-[3rem] text-center mb-10">
        Enter Your Name
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-10"
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Type your name..."
          className="px-5 py-3 text-2xl border border-gray-600 rounded-lg"
        />
        <input
          type="submit"
          value="Predict Data"
          className="px-10 py-3 bg-blue-500 cursor-pointer text-white text-2xl rounded-xl transition-all duration-500 active:scale-[.9] outline:none active:outline-none"
        />
      </form>
    </div>
  );
}
