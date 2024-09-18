function FoodItem({ foodItem, handleButtonClick, bought }) {
  return (
    <li className={`list-group-item ${bought && "bg-orange-300"} my-1`}>
      {foodItem}
      <button
        className="bg-blue-600 text-white font-semibold px-3 py-1 border rounded-md float-right hover:bg-blue-500 delay-150 transition-all"
        onClick={handleButtonClick}
      >
        Buy
      </button>
    </li>
  );
}

export default FoodItem;
