import "./InnerFrame.scss";

function InnerFrame(props) {
  return (
    <div className="inner-frame">
      {props.children}
    </div>
  );
}

export default InnerFrame;
