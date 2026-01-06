import {useState, useEffect} from "react"
const useOnlineStatus =()=>{
    const [OnlineStatus , setOnlineStatus] = useState(navigator.onLine);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);  
        });
    },[]);
    return OnlineStatus;

}
export default useOnlineStatus;