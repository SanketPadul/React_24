function Container(props) {
  return (
    <>
      <div className="flex">{props.children}</div>
    </>
  );
}

export default Container;
