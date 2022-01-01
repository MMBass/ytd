import "./Select.scss";

function Select(props) {

  function handleChange(e) {
    props.handleChange(e.target.value);
  }

  return (
    <div className="select-wrapper">
      { props.title && 
        <p>{props.title}</p>
      }
      <select className="select" onChange={handleChange}>
        <option value={props.first}>{props.first}</option>
        {props.options.map((op) => {
          return <option value={op}>{op}</option>
        })}
      </select>
    </div>
  );
}

export default Select;
