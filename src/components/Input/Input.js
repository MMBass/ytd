import "./Input.scss";

function Input(props) {
  return (
    <input name={props.name} placeholder={props.placeholder} onChange={props.onChange} ></input>
  );
}

export default Input;