import RestaurantCard from "./RestaurantCard";
import { RestaurantData } from "../constant";
const Body = () => {
    return (
        <div className='restaurant-list'>{
            RestaurantData.map((restaurant, index) => {
                return <RestaurantCard {...restaurant} key={index} />
            })
        }
        </div>
    )
}

export default Body;