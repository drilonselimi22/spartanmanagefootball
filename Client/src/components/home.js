import React from "react";

import hero from '../images/homeimage.jpg';

function Home() {
    return (
        <div style={{
            backgroundImage: `url(${hero})`,
            height: '85vh',
            objectFit: "cover"
        }}>
            <div style={{
                position: "absolute",
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white'
            }}>
                <h1>Welcome to <span className="text-warning">FFK</span></h1>
                <h3>Federata e futbollit te Kosoves</h3>
            </div>
        </div>
    );
}

export default Home;
