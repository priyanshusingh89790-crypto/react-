import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"
import {lazy, Suspense} from "react";
import useOnlineStatus from "../utils/useonlinestatus";


const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const OnlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between pb-2 border-b-zinc-500 bg-orange-100 shadow-lg">
            <div className="size-20 flex items-center ml-2 pl-4 ">
                <img className="logo" src={LOGO_URL}/>
                <Link to = "/home"><header className="pl-10 flex items-center w-full text-center text-5xl font-extrabold text-red-950 drop-shadow-2xl">MealTime</header></Link>

            </div>
            <div className="flex items-center space-x-6 justify-center">
                <ul className="flex gap-12 font-serif"  >
                    <Link to = "/home" className="text-">Home</Link>
                    <Link to="/About" className="gap-6">About</Link>
                    <Link to="/Contact" className="gap-6">Contact</Link>
                    <Link to="/Cart" className="gap-6">Cart</Link>
                    <li>

                    <button className="Login"onClick={()=>{btnNameReact==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login")}}>{btnNameReact}</button>
                    </li>
                    <li>online status: {OnlineStatus? "online" : "offline"}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
