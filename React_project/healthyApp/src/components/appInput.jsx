function Appinput({displayInputChange}){

 

  return(
    <>
      <input type="text" placeholder="Enter Healthy Food Here" className="border w-[100%] p-2 rounded-md my-2"
      onKeyDown={displayInputChange}/>
    </>
  );

}

export default Appinput;