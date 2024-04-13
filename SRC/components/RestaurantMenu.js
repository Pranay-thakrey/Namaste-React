import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=750337&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data)
  };
const {name, cuisines, costForTwoMessage, areaName} = resInfo?.cards[2]?.card?.card?.info
  return resInfo === null ? (<Shimmer/>):(
    <div>
      <h1>{name}</h1>
      <ul>
        <li>{cuisines}</li>
        <li>{costForTwoMessage}</li>
        <li>{areaName}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
