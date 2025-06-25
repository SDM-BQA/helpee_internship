import Left from "../components/Left/Left";
import Right from "../components/right/Right";

const Login: React.FC = () => {
  return (
    <div className="h-screen p-5 overflow-hidden flex justify-between">
      <Left />
      <Right/>
    </div>
  );
};

export default Login;
