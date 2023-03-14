import RestaurantCard from "./RestaurantCard";
import { RestaurantData } from "../constant";
import { useState } from "react";
const Body = () => {

    const [searchText, setSearchText] = useState("");
    return (<>
        <div className="search">

            <input className="serach-input" value={searchText} placeholder="Search for food" onChange={
                (event) => {
                    setSearchText(event.target.value);
                }} />
            <button className="search-button" type="submit" onClick={
                () => {
                    setSearchText('');
                }
            } >Search</button>
        </div>

        <div className='restaurant-list'>{
            RestaurantData.map((restaurant,) => {
                return <RestaurantCard {...restaurant} key={restaurant['restaurant_id']} />
            })
        }
        </div>
    </>
    )
}

export default Body;