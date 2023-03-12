import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

const Title = () => {
    return (
        <h1 id='title' key="title">
            Food Villa
        </h1>
    )
}


const Heading = () => {
    return (
        <h1>DO SOMETHING AWESOME TODAY</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Heading />)