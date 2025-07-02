import { useState } from "react";
import InputContainer from "../components/InputContainer";
import TaskContainer from "../components/TaskContainer";
import TaskTypeContainer from "../components/TaskTypeContainer";
import ProgressBar from "../components/ProgressBar";
import { Flex } from "antd";

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
    <Flex
      style={{
        margin: "2rem auto",
        width: "800px",
      }}
      vertical={true}
      align="center"
      gap={"1.2rem"}
    >
      <Flex
        justify="space-between"
        style={{
          width: "100%",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
        className="text-2xl"
      >
        <div style={{ color: "#1677ff" }}>TODO App</div>
        <div>{dateTime.date}</div>
      </Flex>
      <InputContainer />
      <TaskTypeContainer />
      <ProgressBar />
      <TaskContainer />
    </Flex>
  );
};

export default Home;
