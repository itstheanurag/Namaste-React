const RestaurantCard = (restaurant) => {
    return (
        <div className='card'>
            <img src={restaurant['image_url']} />
            <h2>{restaurant['name'] + ' ' + restaurant['last_name']}</h2>
            <h3>{restaurant['locations']}</h3>
            <span className="rating-food">
                <p>{restaurant['speciality']}</p>
                <p>{restaurant['ratings']}</p>
            </span>

        </div>
    )
}


export default RestaurantCard;