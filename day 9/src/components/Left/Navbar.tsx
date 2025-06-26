import logo from "../../assets/logo.png";
const Navbar: React.FC = () => {
  

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={logo} className="w-15" alt="Company Logo" />
        <span className="text-xl font-semibold">Sellora</span>
      </div>
    </div>
  );
};

export default Navbar;
