import React from 'react';

const MainContent = () => {
    return (
        <main>
            <section className="hero">
                <h1>Welcome to Deluxe</h1>
                <h2>Hotels &amp; Resorts</h2>
            </section>
            <section className="booking">
                <form action="">
                    <label for="checkin-date">Check-In Date</label>
                    <input type="date" name="checkin-date"></input>
                    <label for="checkout-date">Check-Out Date</label>
                    <input type="date" name="checkout-date"></input>
                    <label for="room">Room</label>
                    <select name="room">
                        <option>Suite</option>
                        <option>Family Room</option>
                        <option>Deluxe Room</option>
                        <option>Classic Room</option>
                        <option>Superior Room</option>
                        <option>Luxury Room</option>
                    </select>
                    <label for="guests">Guests</label>
                    <select name="guests">
                        <option>1 Adult</option>
                        <option>2 Adults</option>
                        <option>3 Adults</option>
                        <option>4 Adults</option>
                        <option>5 Adults</option>
                        <option>6 Adults</option>
                    </select>
                    <button type="submit">Check Availability</button>
                </form>
            </section>
            <section className="welcome">
                <img src="" alt/>
                <a href="" className="video-player-icon"></a>
                <h1>Welcome to Our Hotel</h1>
                <article>
                    <p>I sat relevancy lonely his tis open for press, shadow my oer i december but. Stern dared you oer hath word repeating what, curious flown rare tapping thing thee whispered more. Black desert bleak i the, thy raven longer ease thereat being with tinkled on bust. As quoth and of dying plutonian. Nevermore and it my sure thou chamber nevermore the let, i all nevermore grew nevermore quoth as was, me than back sat pondered, my engaged seraphim stood nothing a followed, hesitating thou tis a made implore my purple nights quoth. Betook meant thereis i grim nothing the and.</p>
                    <p>Came whether soul the tossed wheeled perched that. Meaninglittle that here surely this the i. The dreams to and as ever. It door tufted in he thing. Presently or fancy his forgiveness was only rare i of, something my dying.</p>
                </article>
                <ul className="social-media">
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Google+</a></li>
                    <li><a href="">Instagram</a></li>
                </ul>
            </section>
            <section className="amenities"></section>
            <section className="rooms"></section>
            <section className="counters"></section>
            <section className="testimonials"></section>
            <section className="blog"></section>
            <section className="instagram"></section>
        </main>
    );
}

export default MainContent;