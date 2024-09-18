// passing childeren as props

function Container(props) {
  return <div className="min-w-[250px] w-[30%] border  my-10 mx-auto p-3"
  >{props.children}</div>;
}

export default Container;
