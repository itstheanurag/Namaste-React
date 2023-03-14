const RestaurantCard = (restaurant) => {

    const { name, img, place, ratings } = restaurant
    return (
        <div className='card'>
            <img src={restaurant['image_url']} />
            <h2>{restaurant['name'] + ' ' + restaurant['last_name']}</h2>
            <h2>{restaurant['locations']}</h2>
            <span className="rating-food">
                <h4>{restaurant['speciality']}</h4>
                <h4>{restaurant['ratings']}</h4>
            </span>

        </div>
    )
}


export default RestaurantCard;