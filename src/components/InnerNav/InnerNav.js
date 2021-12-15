import "./InnerNav.scss";

function InnerNav(props) {

  return (
    <div className="inner-nav">
        {props.items.map((item)=>{

          let className = 'inner-nav-link';
          if(props.active === item.id) className += ' active';

          return <p className={className} onClick={()=>props.navClick(item.id)}>{item.text}</p>
        })}
    </div>
  );
}

export default InnerNav;
