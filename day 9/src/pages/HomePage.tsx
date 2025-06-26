import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../app/store";
import { logOut } from "../features/login/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { fetchUsers } from "../features/users/userInfoSlice";

const HomePage = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const { data: users, loading} = useSelector((state: RootState) => state.user);
  const { email } = authState;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = email ? email.split("@")[0] : "Guest";

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLogOut = () => {
    dispatch(logOut());
    toast.success("Redirected to Login Page");
    setTimeout(() => {
      return navigate("/");
    }, 1000);
  };

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email, navigate]);


  return (
    <div>
      <div className="nav w-full bg-amber-400 px-15 py-6 flex items-center justify-between">
        <div className="font-extrabold text-xl text-white">MyCompanyLogo</div>
        <div className="flex items-center gap-5">
          <div className="flex items-center bg-white px-10 py-3 border border-[#c1c1c1] rounded-lg font-bold cursor-pointer">
            <span>Hi, {user}</span>
            <i className="ml-2 fa fa-solid fa-caret-down"></i>
          </div>
          <div
            className="flex items-center bg-red-500 text-white px-10 py-3 border border-black rounded-lg font-bold cursor-pointer"
            onClick={handleLogOut}
          >
            <span>LogOut</span>
            <i className="ml-2 fa fa-solid fa-sign-out"></i>
          </div>
        </div>
      </div>

      <div className="my-10 px-15">
        <h2 className="text-xl font-bold mb-4">Fetched Users:</h2>
        <ul className="space-y-2">
          {loading && <p>Loading...</p>}
          {users.map((user) => (
            <li key={user.id} className="border p-3 rounded shadow">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
