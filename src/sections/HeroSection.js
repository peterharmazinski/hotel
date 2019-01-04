import React from 'react';

const HeroSection = (props) => {
    return (
        <section className='hero'>
            <img src={props.imgSrc} alt={props.imgAlt} />
            <h1>{props.h1}</h1>
            <h2>{props.h2}</h2>
        </section>
    );
}

export default HeroSection;