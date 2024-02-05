import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";
import { PROXY_URL } from "./mockData";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(PROXY_URL + encodeURIComponent(MENU_URL+resId+'&catalog_qa=undefined&submitAction=ENTER'));
        const json = await data.json();

        setResInfo(json.data);
        console.log(json.data)

    }

    return resInfo;
}

export default useRestaurantMenu;