import { Link } from "react-router-dom";


export const RestarauntCard2 = ({ resData }) => {
  const {
    name,
    image,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime, 
  } = resData;

  return (
    <div className="flex flex-col w-full h-full p-3 bg-white rounded-lg hover:bg-gray-300">
      <img src={image} alt={name} className="w-full h-[250px] object-cover rounded-t-lg rounded-b-lg"/>

             <p className="font-bold text-lg font-sans  gap-3 p-1 flex justify-between w-full ">{name}
       <span className="bg-green-500 text-white text-sm px-2 py-1 rounded">{avgRating}⭐</span> </p>

      <p className="p-1 text-sm w-32 truncate">{cuisines.join(", ")}</p>
      <p className="p-1 w-full flex justify-between text-lg"> {costForTwo}
      <span className="text-sm">{deliveryTime} mins </span></p>
    </div>

  );
};
