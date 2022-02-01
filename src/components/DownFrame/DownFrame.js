import "./DownFrame.scss";

function DownFrame(props) {
  
  return (
    <iframe className="down-frame" src={props.src} title="down"></iframe>
  );
}

export default DownFrame;
