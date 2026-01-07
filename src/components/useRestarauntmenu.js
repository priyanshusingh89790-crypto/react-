
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mockmenus from "../utils/Mockdata.json";
import Shimmer from "./Shimmer";
import {MENU_IMAGE_URLs} from "../utils/constants";

const Menu = () => {
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    const data = mockmenus[id];
    const menuData=mockmenus.data?.[id];
    setRestaurantData(data || menuData || null);
  }, [id]);

  if (!restaurantData) return <Shimmer />;

  return (
    <div className="flex justify-center pt-3">

    <div className=" h-auto w-6/12 bg-red-50 p-4 gap-4 ">
      <h1 className="text-2xl font-bold flex justify-center">{restaurantData.restaurantName}</h1>
      <p className="flex justify-center pt-2 text-lg">{restaurantData.cuisineDescription}</p>

       {restaurantData.menu.sections
        .filter((section, index) => section.title)
        .map((section, index) => ( 
          <div key={index}>
            <h2 className="text-xl font-semibold">{section.title}</h2>

            {section.items.map((item, index) => (
              <div className="flex gap-4 p-4 w-full border-gray-200 hover:bg-gray-200 cursor-pointer border-b-2" key={index}>
                <div className="flex rounded-lg justify-center w-36 "><img src={MENU_IMAGE_URLs[id]} /></div>
                <ul className="p-4 gap-6">
                <div className="flex w-full text-xl gap-2">{item.name}
                <li className="flex justify-center text-3xl ">₹{item.price}</li></div>

                <li className="w-full flex-wrap gap-2">{item.cuisineDesc}</li>
                <li className="w-full flex-wrap gap-2">{item.veg ? "🟢Veg" : "🔴Non-Veg"}</li>
                <li className="bg-white w-fit rounded-md text-black gap-2">{item.rating}⭐</li>
                </ul>
              </div>
            ))}
          </div>
        ))}
    </div>
    </div>
    
  );
};

export default Menu;
