import "./Button.scss";

function Button(props) {
  return (
    <button>
      {props.children ||props.btnContent}
    </button>
  );
}

export default Button;
