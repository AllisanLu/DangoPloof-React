import React from 'react'
import './site.css';

export default function Navigation() {
    return(
        <header>
        <div className="navigation-bar">
            <div className="navigation-item"><p>Dango Ploof</p></div>
            <div className="links">
                <div className="navigation-item"><p><a href="index">Home</a></p></div>
                <div className="navigation-item"><p><a href="about">About</a></p></div>
                <div className="navigation-item"><p><a href="shop">Shop</a></p></div>
                <div className="navigation-item"><p><a href="commissions">Commissions</a></p></div>
                <div className="navigation-item"><p><a href="pay">Cart</a></p></div>
            </div>
        </div>
        </header>
    );
}