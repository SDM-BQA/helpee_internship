import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");


  useEffect(()=>{
    inputRef.current?.focus()
  },[])

  return (
    <div className="w-[35rem] border px-8 py-5 border-1 border-gray-400 rounded-xl flex flex-col gap-5">
      <div className="text-center font-bold">Enter Your Details</div>
      <input
        ref={inputRef}
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        name="userName"
        id="userName"
        placeholder="Enter Your Name"
        className="p-3 text-2xl border rounded-lg border-gray-500 outline-hidden"
      />
      <input
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        name="userEmail"
        id="userEmail"
        placeholder="Enter your Email"
        className="p-3 text-2xl border rounded-lg border-gray-500 outline-hidden"
      />
      <Link
        to={`/login/${userName}/${userEmail}`}
        className="bg-blue-500 text-white font-semibold p-2 rounded rounded-full cursor-pointer text-center"
      >
        Login
      </Link>
    </div>
  );
};

export default LoginPage;
