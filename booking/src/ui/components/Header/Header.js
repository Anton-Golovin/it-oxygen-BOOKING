// Core
import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom';
// Ui
import IconButton from '@material-ui/core/IconButton';
import FilterList from '@material-ui/icons/FilterList';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
// Styles
import headerStyles from './headerStyles';
// Engine
import routerLink from '../../../engine/config/routerLink';

function Header(props) {
  const { classes } = props;
  return (
    <AppBar position="static" color="transparent">
      <Toolbar className={classes.root}>
        <NavLink to="/" className={classes.logoWrapper}>
          <div title="Booking" className={classes.logoIcon} />
          <Typography variant="h1" className={classes.logoTitle}>Booking</Typography>
        </NavLink>
        <div className={classes.content}>
          {window.location.pathname === routerLink.hotels
          && (
          <Hidden smUp>
            <IconButton>
              <FilterList />
            </IconButton>
          </Hidden>
          )}
          <Hidden xsDown>
            <Button variant="contained" className={classes.button}>About</Button>
            <Button variant="contained" className={classes.button}>My Booking</Button>
            <Button variant="contained" className={classes.button}>Sign In</Button>
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(headerStyles)(Header);
