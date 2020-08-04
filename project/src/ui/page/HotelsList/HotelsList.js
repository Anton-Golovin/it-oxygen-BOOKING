// Core
import 'date-fns';
import React, {Component} from 'react';
// Ui
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
// Parts
import Filter from '../../components/Filter/Filter';
// Styles
import hotelsListStyles from './hotelsListStyles';
import HotelsItem from "../../components/HotelsItem/HotelsItem";
// import
import hotelItems from '../../../engine/data/hotels.json'


class HotelsList extends Component {
    render() {
        const { classes } = this.props;
        const itemComponent = hotelItems && hotelItems.length
            ? hotelItems.map((item) => (
                    <HotelsItem
                        key={item.id}
                        itemData={item}
                    />
                ))
            : (
                <Card className={classes.notFoundMessage}>
                    We could not find anything according to your request.
                </Card>
            );
        return (
            <Container component="main" maxWidth="lg" className={classes.container}>
                <Grid container spacing={3} className={classes.root}>
                    <Filter />
                    <Grid item xs={12} sm={7} md={8}>
                        { itemComponent }
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default withStyles(hotelsListStyles)(HotelsList);
