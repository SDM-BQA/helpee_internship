import {useState } from "react";
import InputContainer from "../components/InputContainer";
import TaskContainer from "../components/TaskContainer";
import TaskTypeContainer from "../components/TaskTypeContainer";
import ProgressBar from "../components/ProgressBar";

const Home = () => {
  const [dateTime, setDateTime] = useState({
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  });

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     setDateTime({
  //       date: now.toLocaleDateString(),
  //       time: now.toLocaleTimeString(),
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval); 
  // }, []);

  return (
    <div className="w-[800px] mx-auto flex flex-col gap-5 items-center py-5">
      <div className="flex w-full justify-between font-bold text-2xl">
        <div className="text-blue-600">TODO App</div>
        <div>{dateTime.date}</div>
      </div>
      <InputContainer />
      <TaskTypeContainer />
      <ProgressBar/>
      <TaskContainer />
    </div>
  );
};

export default Home;
