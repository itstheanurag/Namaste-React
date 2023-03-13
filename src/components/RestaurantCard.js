const RestaurantCard = (restaurant) => {

    const { name, img, place, ratings } = restaurant
    return (
        <div className='card'>
            <img src={img} />
            <h2>{name}</h2>
            <h3>{place.join(', ')}</h3>
            <h4>{ratings}</h4>
        </div>
    )
}


export default RestaurantCard;