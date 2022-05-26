import React from "react";

import hero from '../images/homeimage.jpg';
import Navigation from "./navigation";

function Home() {
    return (
        <>
            <Navigation />
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
                    <h1>Welcome to</h1>
                    <h2 className="text-warning">Spartan Manage Football</h2>
                </div>
            </div>
        </>
    );
}

export default Home;
