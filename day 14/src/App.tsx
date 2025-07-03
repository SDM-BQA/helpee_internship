import { Flex } from "antd"
import Calender from "./components/Calender"

const App = () => {
  return (
    <Flex style={{
      padding:"2rem",
      backgroundColor:"#000",
      height:"100vh"
    }} align="center" vertical={true} gap={"2rem"}>
      <div style={{
        fontWeight:"bolder",
        fontSize:"1.8rem",
        color:"#fefefe"
      }}>
        Calender
      </div>
      <Calender/>
    </Flex>
  )
}

export default App