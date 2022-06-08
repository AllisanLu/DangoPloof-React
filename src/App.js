//import React, { useState } from 'react';
import './App.css';
import './site.css';
import './index.css';

import Navigation from './Navigation'
import OrdersList from './OrdersList'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navigation />
      <section className="welcome">
        <div className="welcome-content" style={{ borderRadius: 20 }}>
            <div className="non-transparent" style={{ opacity: 1 }}>
                <img id="dango" src="images/dango_fin.png" alt="Dango logo" />
                <h1>Dango Ploof Crochets</h1>
                <section>
                    <h2>❤ Ploofs of love</h2>
                </section>
                <section className="button-row">
                    <button className="button" onClick="window.location.href = 'commissions'">Customs</button>
                    <button className="button" onClick="window.location.href = 'https://www.etsy.com/shop/DangoPloof'">Etsy (Patterns)</button>
                    <button className="button" onClick="window.location.href = 'https://www.instagram.com/dango.ploof/'">Instagram</button>
                    <button className="button" onClick="window.location.href = 'shop'">Shop</button>
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
    <Footer />
    </>
  );
}

export default App;
