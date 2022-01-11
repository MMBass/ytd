import "./ProgressBar.scss";
import { useSelector } from "react-redux";

function ProgressBar() {
  const progressList = useSelector((state) => state.progressList);

  return (
    <div className="progress-conainer">
      <h3>Downloading {progressList.position}/{progressList.listLength}</h3>
      <progress className="progress-bar" value={progressList.percentage} max="100"></progress>
    </div>
  );
}

export default ProgressBar;
