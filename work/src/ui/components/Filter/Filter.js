import React from 'react';

// Style
import { filterWrapper,filterTitle, starsList, filterSubTitle } from './filter.module.scss'
import Button from "../_Forms/Button/Button";
import Input from "../_Forms/Input/Input";

export default function Filter() {
    return (
        <aside className={filterWrapper}>
            <h4 className={filterTitle}>Filter Box</h4>
            <Input placeholder='Filter by hotel name' />
            <h6 className={filterSubTitle}>Filter by rating</h6>
            <ul className={starsList}>
                <li><label><input type="checkbox" /> ⭐⭐⭐⭐⭐</label></li>
                <li><label><input type="checkbox" /> ⭐⭐⭐⭐☆</label></li>
                <li><label><input type="checkbox" /> ⭐⭐⭐☆☆</label></li>
                <li><label><input type="checkbox" /> ⭐⭐☆☆☆</label></li>
                <li><label><input type="checkbox" /> ⭐☆☆☆☆</label></li>
            </ul>
            <Button name="Filter" backgroundColor="orange" color="white" fullWidth />
        </aside>
    );
}
