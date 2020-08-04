// Core
import React from 'react';
import clsx from 'clsx';
import { compose } from 'recompose';
// Hooks
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
// Ui
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Rating from '@material-ui/lab/Rating';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
// Parts
import TextField from '../Form_Fields/TextField';
// Styles
import filterStyle from './filterStyle';

function Filter(props) {
  const { classes, width } = props;
  const matchesSmUp = isWidthUp('sm',width);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={matchesSmUp}
      classes={{
        paper: clsx({
          [classes.paperMobile]: !matchesSmUp,
          [classes.paperDesktop]: matchesSmUp,
        }),
      }}
    >
      <form className={classes.container}>
        <Typography gutterBottom variant="h5" component="h2">
          Filter Box
        </Typography>
        <TextField
          name={'name'}
          label="Filter by hotel name"
          variant="outlined"
          color="secondary"
          className={classes.name}
        />
        <Typography component="legend">Filter by rating</Typography>
        <FormGroup>
          {[5, 4, 3, 2, 1].map((number) => (
            <FormControlLabel
              key={number.toString()}
              control={(
                <Checkbox />
              )}
              label={(
                <span className={classes.ratingWrapper}>
                  <Rating
                    name="simple-controlled"
                    value={number}
                    readOnly
                  />
                </span>
              )}
            />
          ))}
        </FormGroup>
        <Button variant="contained" color="primary" type="submit" fullWidth>Filter</Button>
      </form>
    </Drawer>
  );
}

export default compose(
    withStyles(filterStyle),
    withWidth()
)(Filter);
