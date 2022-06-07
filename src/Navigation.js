import React from 'react'
import './site.css';

export default function Navigation() {
    return(
        <header>
        <div class="navigation-bar">
            <div class="navigation-item"><p>Dango Ploof</p></div>
            <div class="links">
                <div class="navigation-item"><p><a href="index">Home</a></p></div>
                <div class="navigation-item"><p><a href="about">About</a></p></div>
                <div class="navigation-item"><p><a href="shop">Shop</a></p></div>
                <div class="navigation-item"><p><a href="commissions">Commissions</a></p></div>
                <div class="navigation-item"><p><a href="pay">Cart</a></p></div>
            </div>
        </div>
        </header>
    );
}