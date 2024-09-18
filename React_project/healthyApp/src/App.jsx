import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/displayContainer";
import Appheading from "./components/appHeading";
import Appinput from "./components/appInput";
import Healthyfoodlist from "./components/healthyFoodsList";
import { useState } from "react";
export default function App() {
  // concept of hook to store data

  // let textState = useState("Enter food is");
  // let textStateData = textState[0];
  // let settextState = textState[1];

  let [textState, settextState] = useState("Enter Healthy Food List On Enter!");
  let [foodItems, setfoodItems] = useState([]);
  const displayInputChange = (event) => {
    if (event.key === "Enter") {
      let foodItemAdded = event.target.value;
      event.target.value="";
      let newFoodItems = [...foodItems, foodItemAdded];
      setfoodItems(newFoodItems);
      settextState("");
    }
  };
  return (
    <div>
      <Container>
        <Appheading></Appheading>
        <Appinput displayInputChange={displayInputChange}></Appinput>
        <p className="text-center font-thin text-[23px] opacity-50">{textState}</p>
        <Healthyfoodlist foodItems={foodItems}></Healthyfoodlist>
      </Container>
    </div>
  );
}
