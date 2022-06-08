import React from 'react'
import './site.css';

export default function Navigation() {
    return(
        <div className="card-row">
        <div className="card">
            <h3>Status</h3>
            <ul>
                <li>Customs: Closed - Back in July</li>
                <li>Etsy: Open w/ Patterns!</li>
            </ul>
        </div>
        <div className="card">
            <h3>Current Orders</h3>
            <ol>
                <li>Nadeshiko</li>
                <li>Jroo's Baby</li>
            </ol>
        </div>
        </div>
    );
}