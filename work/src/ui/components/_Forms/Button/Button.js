import React from 'react';

// Style
import { button } from './button.module.scss'
function Button(props) {
    const { name, backgroundColor, color, fullWidth } = props;
    return (
        <button className={button} style={{ backgroundColor, color, width: fullWidth ? '100%' : 'auto' }}>
            {name}
        </button>
    );
}

export default Button;