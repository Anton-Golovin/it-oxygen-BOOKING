import React, {Component} from 'react';

// Style
import {logoIcon , logoWrapper} from './logo.module.scss';

class Logo extends Component {
    render() {
        const { color } = this.props;
        return (
            <div className={logoWrapper} style={{ color: color }}>
                <div className={logoIcon} style={{ backgroundColor: color }}/>
                <h1>Booking</h1>
            </div>
        );
    }
}

export default Logo;