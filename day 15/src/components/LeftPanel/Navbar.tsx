import { FaSearch } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-full rounded-full">
          <img
            src={logo}
            alt="logo"
            className="w-full h-full "
          />
        </div>
        <div className="">
          <p className="font-bold text-[2rem]">Welcome, Kristin</p>
          <p className="text-gray-400 text-lg">
            Your personal dashboard overview
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center border border-gray-200 px-2 py-3 rounded-3xl gap-2 bg-[#e1e3e7] text-gray-400">
          <FaSearch />
          <input type="text" name="" id="" placeholder="Search" className="border-none outline-none text-lg text-gray-600"/>
        </div>
        <div className="bg-white p-2 rounded-full">
          <IoPersonCircleSharp size={35} color="black"/>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
