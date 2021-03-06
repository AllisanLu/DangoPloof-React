import React from 'react'
import './site.css';

export default function Commissions() {
  return (
    <> <section className="small-section">
    <h1>Commissions</h1>
    <p>
        Thank you so much for considering a custom!
    </p>
    <h3><strong>Currently my customs are: OPEN</strong></h3>
    <br />
</section>
<section className="small-section">
    <h2>How to Order:</h2>
    <p>
        Please fill out the form below to order! I then will contact you (by email, unless preference stated otherwise) to start the order and work out details, payment, delivery, etc.
        <br />
        <em>It is very important that you fill out your contact information with something you will reply to since this is how I will work out your order and ask questions if need be!</em>
        <br />
        For updates on an order I have accepted, look at the calendar on the front page!
    </p>
</section>
<section className="small-section">
    <h2>Sizes & Prices</h2>
    <table>
        <tbody>
            <tr>
                <td><img src="images/mini.jpg" alt='mini ploof'/></td>
                <td><img src="images/small.jpg" alt='small ploof'/></td>
                <td><img src="images/medium.jpg" alt='medium ploof'/></td>
                <td><img src="images/jumbo.jpg" alt='jumbo ploof'/></td>
            </tr>
            <tr>
                <td>Mini Ploof</td>
                <td>Small Ploof</td>
                <td>Medium Ploof</td>
                <td>Jumbo Ploof</td>
            </tr>
            <tr>
                <td>~2"x2"x2"</td>
                <td>~3"x3"x3"</td>
                <td>~5"x5"x5"</td>
                <td>~9"x9"x9"+!</td>
            </tr>
            <tr>
                <td>So tiny!</td>
                <td>A great buddy!</td>
                <td>A good old ploof</td>
                <td>BIG!!</td>
            </tr>
            <tr>
                <td>$5-10</td>
                <td>$15-20</td>
                <td>$40-45</td>
                <td>$80+</td>
            </tr>
        </tbody>
    </table>
</section>

<section className="small-section">
    <h2>Form</h2>
    <p>Form coming soon!</p>
    <form>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" />
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" placeholder="name@domain.com" pattern="[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*" />
        </div>
        <div>
            <p>
                Size:
                <input type="radio" id="Mini" name="Size" value="Mini" />
                <label htmlFor="Mini">Mini</label>
                
                <input type="radio" id="Small" name="Size" value="Small" />
                <label htmlFor="Small">Small</label>

                <input type="radio" id="Medium" name="Size" value="Medium" />
                <label htmlFor="Medium">Medium</label>

                <input type="radio" id="Jumbo" name="Size" value="Jumbo" />
                <label htmlFor="Jumbo">Jumbo</label>
            </p>
        </div>
        <div>
            <label htmlFor="description"></label>
            <textarea id="description" rows="4" placeholder="Description here"></textarea>
        </div>
    </form>
</section>
</>
  )
}
