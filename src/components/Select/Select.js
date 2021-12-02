import "./Select.scss";

function Select(props) {

  function handleChange(e){
     props.handleChange(e.target.value);
  }

  return (
      <select className="select" onChange={handleChange}>
        {props.options.map((op)=>{
          return <option value={op}>{op}</option>
        })}
      </select>
  );
}

export default Select;
