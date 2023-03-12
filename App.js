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

const Body = () => {
    return <h1>Some thing inside body</h1>
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