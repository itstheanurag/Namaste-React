import RestaurantCard from "./RestaurantCard";
import { RestaurantData } from "../constant";
import { useState, useEffect } from "react";

function filterData(input, restaurants) {
    return restaurants.filter((restaurant) => {
        return restaurant.locations.includes(input) || restaurant.name.includes(input) || restaurant.speciality.includes(input) || restaurant.last_name.includes(input)
    });
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(RestaurantData);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); // add a new state to hold filtered data

    const handleSearch = () => {
        const input = searchText.charAt(0).toUpperCase() + searchText.slice(1);
        const dataFiltered = filterData(input, restaurants);
        setFilteredRestaurants(dataFiltered); // update the new state instead of updating the original "restaurants" state
        setSearchText('');
    };

    return (
        <>
            <div className="search">
                <input
                    className="search-input"
                    value={searchText}
                    placeholder="Search by Country, Name or Food"
                    onChange={(event) => {
                        setSearchText(event.target.value);
                    }}
                />
                <button className="search-button" type="submit" onClick={handleSearch}>
                    Search
                </button>
            </div>

            <div className="restaurant-list">
                {
                    filteredRestaurants.length > 0 // render the filtered restaurants if there are any, otherwise render the original list
                        ? filteredRestaurants.map((restaurant) => (
                            <RestaurantCard {...restaurant} key={restaurant.restaurant_id} />
                        ))
                        : restaurants.map((restaurant) => (
                            <RestaurantCard {...restaurant} key={restaurant.restaurant_id} />
                        ))
                }
            </div>
        </>
    );
};

export default Body;
