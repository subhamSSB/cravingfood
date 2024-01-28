import { useDispatch } from "react-redux";
import { RES_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item))
  }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className=" w-8/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> ₹ - {item.card.info.price / 100}</span>
            </div>
            <p className="text-s">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className=" bg-black text-white shadow-lg m-auto p-2 mx-16 rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +{" "}
              </button>
            </div>
            <img src={RES_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
