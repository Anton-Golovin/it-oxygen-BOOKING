// Core
import 'date-fns';
import * as PropTypes from 'prop-types';
import React from 'react';
import { countries } from 'country-data';
// Ui
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { Hidden } from '@material-ui/core';
// Styles
import hotelsItemStyles from './hotelsItemStyles';

function HotelsItem(props) {
  const { itemData, classes } = props;
  const {
    name,
    address,
    state,
    country_code: countryCode,
    hotel_rating: hotelRating,
    website,
  } = itemData;
  return (
    <Card className={classes.card} variant="outlined">
      <div className={classes.images}>
        <img
          alt={name}
          src={`https://unsplash.it/200/200?image=${Math.floor(Math.random() * 10)}`}
        />
      </div>
      <div className={classes.content}>
        <Typography className={classes.name} gutterBottom variant="h5" component="h2">{name}</Typography>
        <Rating
          name="simple-controlled"
          value={hotelRating}
          readOnly
        />
        <Typography variant="body2" color="textSecondary" component="p" className={classes.placeWrapper}>
          <Typography component="span" className={classes.place}>{ address }</Typography>
          {state && (
          <Typography component="span" className={classes.place}>
            ,&nbsp;
            { state }
          </Typography>
          )}
          {countryCode && countries[countryCode] && (
          <Typography component="span" className={classes.place}>
            ,&nbsp;
            { countries[countryCode].name }
          </Typography>
          )}
        </Typography>
      </div>
      {website && (
      <Hidden mdDown>
        <a href={website} className={classes.websiteLink}>
          <Button variant="contained" color="primary">
                Show details
          </Button>
        </a>
      </Hidden>
      )}
    </Card>
  );
}

HotelsItem.propTypes = {
  itemData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    state: PropTypes.string,
    country_code: PropTypes.string.isRequired,
    hotel_rating: PropTypes.number,
    website: PropTypes.string,
  }),
};

HotelsItem.defaultProps = {
  itemData: {
    state: '',
    hotel_rating: 0,
    website: null,
  },
};

export default withStyles(hotelsItemStyles)(HotelsItem);