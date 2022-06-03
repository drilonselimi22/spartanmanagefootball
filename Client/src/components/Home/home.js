import React from "react";
import Navigation from "../Navigation/navigation";
import './home.css';

function Home() {
    return (
        <div>
            <Navigation />

            <div className="home__container">
                <div className="home__header" >
                    <h3>Welcome to</h3>
                    <h1>Spartan Manage Football</h1>
                </div>
            </div>

        </div>
    );
}

export default Home;