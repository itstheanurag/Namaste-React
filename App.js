import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

const Title = () => {
    return (
        <a href='/'>
            <img className='logo' alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiOrlFJ3C70C15eoeu9dfQmfAc9HEGDJI-zLXp64&s" />
        </a>
    )
}

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantData = [{
    name: "Some Restaurant",
    img: 'https://marketplace.canva.com/EAFMvhEzAKw/1/0/1600w/canva-brown-simple-food-store-logo-LPHhlwzIoMQ.jpg',
    place: ['Patiala', 'Punjab'],
    ratings: 4.2
},
{
    name: "Some Restaurant",
    img: 'https://marketplace.canva.com/EAFMvhEzAKw/1/0/1600w/canva-brown-simple-food-store-logo-LPHhlwzIoMQ.jpg',
    place: ['Patiala', 'Punjab'],
    ratings: 4.2
},
{
    name: "Some Restaurant",
    img: 'https://marketplace.canva.com/EAFMvhEzAKw/1/0/1600w/canva-brown-simple-food-store-logo-LPHhlwzIoMQ.jpg',
    place: ['Patiala', 'Punjab'],
    ratings: 4.2
},
{
    name: "Some Restaurant",
    img: 'https://marketplace.canva.com/EAFMvhEzAKw/1/0/1600w/canva-brown-simple-food-store-logo-LPHhlwzIoMQ.jpg',
    place: ['Patiala', 'Punjab'],
    ratings: 4.2
}, {
    name: "Some Restaurant",
    img: 'https://marketplace.canva.com/EAFMvhEzAKw/1/0/1600w/canva-brown-simple-food-store-logo-LPHhlwzIoMQ.jpg',
    place: ['Patiala', 'Punjab'],
    ratings: 4.2
}, {
    name: "Some Restaurant",
    img: 'https://marketplace.canva.com/EAFMvhEzAKw/1/0/1600w/canva-brown-simple-food-store-logo-LPHhlwzIoMQ.jpg',
    place: ['Patiala', 'Punjab'],
    ratings: 4.2
}, {
    name: "Some Restaurant",
    img: 'https://marketplace.canva.com/EAFMvhEzAKw/1/0/1600w/canva-brown-simple-food-store-logo-LPHhlwzIoMQ.jpg',
    place: ['Patiala', 'Punjab'],
    ratings: 4.2
}, {
    name: "Some Restaurant",
    img: 'https://marketplace.canva.com/EAFMvhEzAKw/1/0/1600w/canva-brown-simple-food-store-logo-LPHhlwzIoMQ.jpg',
    place: ['Patiala', 'Punjab'],
    ratings: 4.2
}, {
    name: "Some Restaurant",
    img: 'https://marketplace.canva.com/EAFMvhEzAKw/1/0/1600w/canva-brown-simple-food-store-logo-LPHhlwzIoMQ.jpg',
    place: ['Patiala', 'Punjab'],
    ratings: 4.2
}, {
    name: "Some Restaurant",
    img: 'https://marketplace.canva.com/EAFMvhEzAKw/1/0/1600w/canva-brown-simple-food-store-logo-LPHhlwzIoMQ.jpg',
    place: ['Patiala', 'Punjab'],
    ratings: 4.2
}]

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

const Body = () => {
    return (
        <div className='restaurant-list'>{
            RestaurantData.map((restaurant) => {
                return <RestaurantCard {...restaurant} />
            })
        }
        </div>
    )
}

const Footer = () => {
    return <h1>Some thing inside body</h1>
}


const AppLayOut = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayOut />)