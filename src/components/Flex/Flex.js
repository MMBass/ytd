import "./Flex.scss";

function Flex(props) {
  return (
    <div className="flex-container">
      {props.children}
    </div>
  );
}

export default Flex;