import Left from "../components/Left/Left";
import Right from "../components/right/Right";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row h-screen p-5 flex justify-between ">
      <Left />
      <Right/>
    </div>
  );
};

export default Login;
