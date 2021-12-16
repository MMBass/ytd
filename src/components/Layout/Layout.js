import "./Layout.scss";

function Layout(props) {
  
  return (
    <div className="layout">
      {props.children}
    </div>
  );
}

export default Layout;