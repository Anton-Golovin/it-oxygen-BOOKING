import React from 'react';

// Style
import { input } from './input.module.scss'
function Input(props) {
    const { placeholder } = props;
    return (
        <input className={input} type="text" placeholder={placeholder}/>
    );
}

export default Input;