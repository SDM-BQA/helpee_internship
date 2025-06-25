import dash from "../../assets/dash.jpg";

const Right: React.FC = () => {
  return (
    <div className="w-1/2 border border-white rounded-lg p-5 bg-[url(https://img.freepik.com/free-vector/blank-blue-halftone-background_53876-114466.jpg)] flex flex-col justify-center text-white bg-no-repeat bg-cover">
      <div className="text-[35px] max-w-[500px] font-semibold mb-5 ml-10">
        Effortlessly manage your team and operations
      </div>
      <p className="text-lg ml-10">
        Log in to access your CRM Dashboard and manage your team
      </p>
      <img className="w-xl rounded-lg mt-10 ml-10" src={dash} alt="dash" />
    </div>
  );
};

export default Right;
