import { useDispatch, useSelector } from "react-redux";
import BagItem from "../components/bagItem";
import BagItemsDisplay from "../components/bagItemDisplay";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Bag() {
  const bagItems = useSelector((store) => store.bagFunction);
  const actualItems = useSelector((store) => store.items);
  let finalItem = actualItems.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

 
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItem.map((item) => (
              <BagItemsDisplay item={item}></BagItemsDisplay>
            ))}
          </div>
          <div className="bag-summary">
            <BagItem></BagItem>
          </div>
        </div>
      </main>
    </>
  );
}

export default Bag;
