import Footer from "./Footer"
import Form from "./Form"
import Navbar from "./Navbar"

const Left: React.FC = () => {
  return (
    <div className="h-screen flex flex-col gap-20 w-full 2xl:w-1/2 p-5">
     <Navbar/>   
     <Form/>
     <Footer/>
    </div>
  )
}

export default Left