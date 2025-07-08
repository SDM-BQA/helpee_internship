import { useParams } from "react-router-dom";

const UserInfoPage = () => {
  const { userName, userEmail } = useParams();
  return (
    <div className="flex flex-col gap-8 p-8 border rounded rounded-xl">
        <div className="font-bold text-center">Getting Parameter from URL</div>
      <div className="">
        <span className="font-semibold">Username:</span> {userName}
      </div>
      <div className="">
        <span className="font-semibold">UserEmail:</span> {userEmail}
      </div>
    </div>
  );
};

export default UserInfoPage;
