import "./LoaderLine.scss";
import { useSelector } from "react-redux";

function LoaderLine() {
  const loaderLine = useSelector((state) => state.loaderLine);

  if(loaderLine){
    return (
      <div className="loaderLine">
        <div className="innerLoaderLine"></div>
      </div>
    );
  }
  return null;
 
}

export default LoaderLine;
