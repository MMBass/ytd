import "./BlockLayout.scss";

function BlockLayout(props) {
  return (
    <div className="block-layout">
          {props.children}
    </div>
  );
}

export default BlockLayout;
