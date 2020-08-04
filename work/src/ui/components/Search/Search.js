import React, {Component} from 'react';

// Style
import { searchWrapper } from './search.module.scss'
import Button from "../../components/_Forms/Button/Button";
import Input from "../_Forms/Input/Input";
// Parts
class Search extends Component {
    render() {
        return (
            <form className={searchWrapper}>
                <Input placeholder='Destination'/>
                <Input placeholder='Check-in'/>
                <Input placeholder='Check-out'/>
                <Input placeholder='Adults'/>
                <Input placeholder='Children'/>
                <Button backgroundColor="orange" color="white" name="search"/>
            </form>
        );
    }
}

export default Search;