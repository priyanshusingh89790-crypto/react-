import { RestarauntCard2 } from "./RestarauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { images } from "../utils/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useonlinestatus";
import { CARD_URL } from "../utils/constants";
import  Menu from "./useRestarauntmenu";

const Body = () => {
  const [listofRestaraunts, setlistofRestaraunts] = useState([]);
  const [allRestaraunts, setAllRestaraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus===false)
    return (
    <h1>looks like you're offline!!</h1>  
    )


  useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
    const carRes = await fetch(CARD_URL);

    if (!carRes.ok) {
      throw new Error(`Status ${carRes.status}`);
    }

    const cardResJson = await carRes.json();

    const restaurants =
      cardResJson?.data?.data?.cards
        ?.flatMap(
          (c) =>
            c?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        ) || [];

    setlistofRestaraunts(restaurants);
    setAllRestaraunts(restaurants);
  } catch (err) {
    console.error("REAL Fetch Error:", err.message);
  } finally {
    setLoading(false);
  }
};
  if (loading) return <Shimmer />;
  return (
    <div className="bg-yellow-50">
     <div className="flex items-center gap-2 m-2 p-2">
  <input
    className={`transition-all duration-300 ease-in-out
      ${open ? "w-64 opacity-100 px-4" : "w-0 opacity-0 px-0"}
      h-10 border rounded-full outline-none`}
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    placeholder="Search restaurants..."
  />

  <button
    onClick={() => {
      if (open) {
        const filtered = allRestaraunts.filter((res) =>
          res.info?.name
            ?.toLowerCase()
            .includes(searchText.toLowerCase())
        );
        setlistofRestaraunts(filtered);
      }
      setOpen(!open);
    }}
    className="w-10 h-10 rounded-full bg-red-400 hover:bg-red-500
      flex items-center justify-center text-white text-lg"
  >
    🔍
  </button>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ml-4 mr-4">
        {listofRestaraunts.map((meal) => {
          const imageIndex = Number(meal.info.id) % images.length;

          const fixedData = {
            id: meal.info.id,
            name: meal.info.name,
            image:images[imageIndex], 
            avgRating: meal.info.avgRating,
            cuisines: meal.info.cuisines || [],
            costForTwo: meal.info.costForTwo,
            deliveryTime: meal.info.sla?.deliveryTime,
            price: meal.info.price,
          };


          return (
          <Link key={fixedData.id} to={`/restaurant/${fixedData.id}`}>
            <RestarauntCard2 resData={fixedData} />
            </Link>
              );
        })}
      </div>
    </div>
  );
};

export default Body;
