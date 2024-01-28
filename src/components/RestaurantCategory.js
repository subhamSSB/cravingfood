import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex}) => {
  const handleClick = () => {
    setShowIndex();
  }
  return (
    <div>
      {/** Header */}
      <div className="bg-gray-50 w-6/12 m-auto shadow-lg p-4 my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} - ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* {Body Part} */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
