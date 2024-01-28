import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_URL+resId+'&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();

        setResInfo(json.data);


    }

    return resInfo;
}

export default useRestaurantMenu;