import "./ShowTime.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { resetTime, showTime } from "../features/timer/timeSlice";

const ShowTime = () => {
  const state = useSelector((root: RootState) => root.timer);
  const dispatch = useDispatch();
  const { timer } = state;
  const handleShowTime = () => {
    dispatch(showTime());
  };
  const handleResetTime = () => {
    dispatch(resetTime());
  };

  return (
    <div className="main">
      <h1>ShowTime</h1>
      {timer ? <h3>{timer}</h3> : <h3>Time Reset</h3>}
      <div className="btn_grp">
        <button onClick={handleShowTime} className="btn show_time">
          Show Time
        </button>
        <button onClick={handleResetTime} className="btn reset_time">
          Reset Time
        </button>
      </div>
    </div>
  );
};

export default ShowTime;
