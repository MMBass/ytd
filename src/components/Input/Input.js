import "./Input.scss";

function Input(props) {
  return (
    <input placeholder={props.placeholder} onChange={props.onChange}></input>
  );
}

export default Input;