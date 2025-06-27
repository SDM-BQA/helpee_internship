import { useState } from "react";
import Star from './Star'
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const Stars = () => {
  const [num, setNum] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const handleClick = (e: number) => {
    setNum(e);
    setColor("yellow");
  };

  const ids = [1, 2, 3, 4, 5];
  const { width, height } = useWindowSize();
  return (
    <div className="bg-black h-dvh flex items-center justify-center flex-col gap-5">
      {num >= 3 && <Confetti width={width} height={height} />}
    <div className="flex items-center justify-center gap-5">
      {ids.map((id) => (
        <Star
          key={id}
          id={id}
          handleClick={handleClick}
          color={color}
          num={num}
        />
      ))}
    </div>
      {num && <p className="text-slate-400">Thank you for rating {num} star</p>}
    </div>
  );
};

export default Stars;
