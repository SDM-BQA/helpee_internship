import { FaStar } from "react-icons/fa";

const Star = ({ id, handleClick, color, num }) => {
  return (
    <FaStar
      id={id}
      onClick={()=>handleClick(id)}
      size={50}
      color={color && id <= num ? color : 'white'}
      className="cursor-pointer"
    />
  );
};

export default Star;
