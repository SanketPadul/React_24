import { useState } from "react";
import FoodItem from "./singleFoodItem";

let Healthyfoodlist = ({ foodItems }) => {
  
  let [activeState,setactiveState] = useState([]);

  let handleButtonClick = (item,event)=>{
    let activeStatesAre = [...activeState,item];
    setactiveState(activeStatesAre);
  }
  return (
    <>
      <ul className="list-group">
        {foodItems.map((item) => {
          return (
            <FoodItem
              
              key={item}
              foodItem={item}
              bought={activeState.includes(item)}
              handleButtonClick={(event) => handleButtonClick(item,event)}
            ></FoodItem>
          );
        })}
      </ul>
    </>
  );
};

export default Healthyfoodlist;
