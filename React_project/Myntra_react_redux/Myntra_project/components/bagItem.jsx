import { useSelector } from "react-redux";

function BagItem() {
  const bagItems = useSelector((store) => store.bagFunction);
  const actualItems = useSelector(store=>store.items);
  let finalItem = actualItems.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  let totalMRP = 0;
  let totalDiscount = 0;
  const CONVENIENCE_FEES = 99;

  finalItem.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  const bagSumary = {
    totalItem: bagItems.length,
    totalMRP: totalMRP,
    totalDiscount: totalDiscount,
    finalPayment: finalPayment,
  };
  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagSumary.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{bagSumary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{bagSumary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{bagSumary.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
}

export default BagItem;
