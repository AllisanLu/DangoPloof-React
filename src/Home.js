import React from 'react'
import './site.css';
import OrdersList from './OrdersList'
//import { useNavigate } from "react-router-dom";

export default function Home() {

    // let navigate = useNavigate(); 
    // const routeChange = (newPath) =>{ 
    //     let path = newPath; 
    //     navigate(path);
    // }
  
    return(
        <div>
        <section className="welcome">
        <div className="welcome-content" style={{ borderRadius: 20 }}>
            <div className="non-transparent" style={{ opacity: 1 }}>
                <img id="dango" src="images/dango_fin.png" alt="Dango logo" />
                <h1>Dango Ploof Crochets</h1>
                <section>
                    <h2>❤ Ploofs of love</h2>
                </section>
                <section className="button-row">
                    <a href="/commissions"><button className="button">Customs</button></a>
                    <a href="https://www.etsy.com/shop/DangoPloof"><button className="button">Etsy (Patterns)</button></a>
                    <a href="https://www.instagram.com/dango.ploof/"><button className="button">Instagram</button></a>
                    {/* <button className="button" onClick= {routeChange("/shop")}>Shop</button> */}
                </section>
            </div>
        </div>
      </section>
      <section className="featured section">
        <h2>Updates</h2>
        <OrdersList />
      </section>
    {/* <section className="calendar section">
        <h2>Calendar</h2>
    </section>
    <section>
        <div className="details">
            <div className="smgc-calendar-placeholder" id="smgc-cal-B9i79U7BV2GOXOmWDYqz"></div>
        </div>
    </section> */}
    </div>
    );
}