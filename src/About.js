import React from 'react'
import './site.css';
import './about.css'

export default function Navigation() {
    return(
        <div>
            <section className="about">
        <h2>About</h2>
        <div className="box">
            <div><img className="chibi" src="images/zebs_outline.png" alt="chibi allison" /></div>
            <div>
                <p>
                    Hello! I'm Allison, and I make crochets~
                    <br />
                    ​I am a current college student studying CS!
                    <br />
                    I really like drawing "dangos" hence the name dango ploof.
                    <br />
                    ​I personally really like stuffed animals :)
                    <br />
                    I started crocheting in 2020 because my friend joked about me crocheting!
                    <br />
                    Surprisingly, I fell in love and have been crocheting, a LOT, since then.
                    <br />
                    I hope to keep crochet as a fun hobby for myself, and I hope to make others happy with my crochets. :3
                </p>
            </div>
        </div>
    </section>
    </div>
    );
}