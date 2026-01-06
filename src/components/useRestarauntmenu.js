
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import mockmenus from "../utils/Mockdata.json";
import Shimmer from "./Shimmer";


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
        .filter((section) => section.title)
        .map((section) => ( 
          <div key={section.sectionId}>
            <h2 className="text-xl font-semibold">{section.title}</h2>

            {section.items.map((item) => (
              <p key={item.id}>
                <img src={item.imageUrl} alt={item.name} /> 
                <p>{item.name} – ₹{item.price}</p>
                <p>{item.cuisineDesc}</p>
              </p>
              
            ))}
          </div>
        ))}
    </div>
    </div>
  );
};

export default Menu;
