import { useDispatch, useSelector } from "react-redux";
import { BagSliceActions } from "../Store/bagSlice";
import { useState } from "react";

function HomeItem({ item }) {
  // let [check, setCheck] = useState(false);
  const bagitems = useSelector((store) => store.bagFunction);
  const check = bagitems.indexOf(item.id) >= 0;
  const dispatch = useDispatch();

  const handleAddButton = () => {
    dispatch(BagSliceActions.itemAddedToBag(item.id));
  };

  const handleRemoveButton = () => {
    dispatch(BagSliceActions.itemRemoveFromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {check === true && (
          <button className="btn-add-bag-2" onClick={handleRemoveButton}>Remove</button>
        )}
        {check === false && (
          <button className="btn-add-bag" onClick={handleAddButton}>
            Add To Bag
          </button>
        )}
      </div>
    </>
  );
}

export default HomeItem;
