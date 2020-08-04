import React from 'react';

// Style
import {hotelWrapper, descWrapper, title} from './hotel.module.scss'

export default function Hotel() {
    return (
        <section className={hotelWrapper}>
            <img src="https://unsplash.it/200/200?image=8" alt="Woogo Central Park - Tempo Apartments"/>
            <div className={descWrapper}>
                <h4 className={title}>Woogo Central Park - Tempo Apartments</h4>
                <p>⭐⭐⭐⭐☆</p>
                <span>240 West 73rd Street, United States</span>
            </div>
        </section>
    );
}
