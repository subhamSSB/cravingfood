import { RES_URL } from "../utils/constant";
const Restaurantcard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;
  return (
    <div className="res-card m-4 p-4 w-[220px] h-[400px]" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo w-44 h-44"
        alt="res-logo"
        src={RES_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-2">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} Minutes</p>
    </div>
  );
};

//Higher order components
export const withPromotedLabel = (Restaurantcard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <Restaurantcard {...props}/>
            </div>
        )
    }
}

export default Restaurantcard;
