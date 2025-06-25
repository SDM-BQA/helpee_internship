import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface LoginFormState {
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const [showEye, setShowEye] = useState(false);

  const [loginData, setLoginData] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate()

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(loginData.email !== 'sdm@g.com' && loginData.password !== '123456'){
      toast.error('Check Credential')
      return
    }
    
    console.log(loginData);

    setTimeout(()=>{
      return navigate('/home')
    }, 1000)
    
    toast.success("yesssssssssssssssssssssssssssssssssssssss")
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-1/2 mx-auto">
      {/* head */}
      <div className="text-center flex flex-col gap-2 mb-10">
        <div className="text-4xl font-bold mb-2">Welcome Back</div>
        <p className="text-[#c1c1c1]">
          Enter your Email and Password to access your account
        </p>
      </div>

      {/* fields */}
      <div className="input-box mb-5">
        <p className="mb-1.5 font-semibold">Email</p>
        <input
          value={loginData.email}
          type="text"
          placeholder="Enter Your Email Address"
          name="email"
          id="email"
          className="w-full border-2 border-[#c1c1c1] p-1.5 rounded outline-none"
          onChange={handleChange}
        />
      </div>
      <div className="input-box">
        <p className="mb-1.5 font-semibold">Password</p>
        <div className="flex gap-1 items-center border-2 border-[#c1c1c1] rounded">
          <input
            value={loginData.password}
            type={showEye ? "text" : "password"}
            placeholder="Enter Your Password"
            name="password"
            id="password"
            className="w-full  p-1.5 outline-none"
            onChange={handleChange}
          />
          {showEye ? (
            <i
              className="fa fa-solid fa-eye-slash p-2 cursor-pointer"
              onClick={() => setShowEye(!showEye)}
            ></i>
          ) : (
            <i
              className="fa fa-solid fa-eye p-2 cursor-pointer"
              onClick={() => setShowEye(!showEye)}
            ></i>
          )}
        </div>
      </div>

      {/* remember me */}
      <div className="flex items-center justify-between mt-2 mb-4">
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            name="check"
            id="check"
            className="accent-[#c1c1c1]"
          />
          <span className="text-[#c1c1c1] font-semibold">Remember Me</span>
        </div>
        <div className="">
          <a
            href="/"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Forgot Password?
          </a>
        </div>
      </div>

      {/* button */}
      <button
        type="submit"
        className="p-2 w-full bg-[#3f39e4] text-center text-white rounded-lg cursor-pointer hover:bg-[#3e41f3]"
      >
        Log In
      </button>

      {/* bottom */}
      <div className="my-4 flex items-center justify-between">
        <div className="border border-[#c1c1c1] w-full"></div>
        <div className="text-[#c1c1c1] w-full text-center">Or Login With</div>
        <div className="border border-[#c1c1c1] w-full"></div>
      </div>

      {/* auth-btn */}
      <div className="mt-2 flex w-full justify-between gap-2">
        <div className="w-1/2 bg-[#fbfbfa] p-3 text-center border border-[#f4f5f4] rounded-sm cursor-pointer hover:bg-[#cacaca]">
          <i className="fa-brands fa-solid fa-google"></i>
          <span className="ml-2 font-semibold">Google</span>
        </div>
        <div className="w-1/2 bg-[#fbfbfa] p-3 text-center border border-[#f4f5f4] rounded-sm cursor-pointer hover:bg-[#cacaca]">
          <i className="fa-brands fa-solid fa-apple"></i>
          <span className="ml-2 font-semibold">Apple</span>
        </div>
      </div>

      {/* footer */}
      <div className="my-5 text-center text-[#c1c1c1]">
        <span>Don't have a account? </span>
        <a href="/" className="text-blue-500 hover:text-blue-700 font-semibold">
          Register Now.
        </a>
      </div>
    </form>
  );
};

export default Form;
