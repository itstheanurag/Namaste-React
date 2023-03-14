import RestaurantCard from "./RestaurantCard";
import { RestaurantData } from "../constant";
import { useState } from "react";

function filterData(input, restaurants) {

    return restaurants.filter((restaurant) => {
        return restaurant.locations.includes(input) || restaurant.name.includes(input)
    })


}
const Body = () => {
    const [restaurants, setRestaurants] = useState(RestaurantData)
    const [searchText, setSearchText] = useState("");

    return (<>
        <div className="search">

            <input className="serach-input" value={searchText} placeholder="Search by Country" onChange={
                (event) => {
                    setSearchText(event.target.value);
                }} />
            <button className="search-button" type="submit" onClick={
                () => {
                    const dataFiltered = filterData(searchText, restaurants);
                    setRestaurants(dataFiltered)
                    console.log(dataFiltered)
                    setSearchText('');
                }
            }>Search</button>
        </div>

        <div className='restaurant-list'>{
            restaurants.map((restaurant,) => {
                return <RestaurantCard {...restaurant} key={restaurant['restaurant_id']} />
            })
        }
        </div>
    </>
    )
}

export default Body;