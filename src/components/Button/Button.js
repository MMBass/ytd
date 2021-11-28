import "./Button.scss";

function Button(props) {
  return (
    <button type={props.type}>
      {props.children ||props.btnContent}
    </button>
  );
}

export default Button;
