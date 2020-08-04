import React from 'react';

// Style
import {footerTitle,footerWrapper, footerLogo} from './footer.module.scss'

export default function Footer() {
    return (
        <footer className={footerWrapper}>
            <h6 className={footerTitle}>Travel With <span className={footerLogo}>Booking</span></h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
        </footer>
    );
}
