// Core
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withStyles } from "@material-ui/core/styles";
// Global Style
import 'normalize.css/normalize.css';
// Parts
import SearchForm from '../../page/SearchForm/SearchForm';
import HotelsList from '../../page/HotelsList/HotelsList';
import Header from '../../components/Header/Header';
// Style
import appStyles from './appStyles';
// Engine
import routerLink from '../../../engine/config/routerLink';

function App(props) {
  const { classes } = props;
  return (
      <BrowserRouter>
          <Switch>
              <>
                  <div className={classes.root}>
                      <Header />
                      <Route exact component={SearchForm} path={routerLink.main} />
                      <Route exact component={HotelsList} path={routerLink.hotels} />
                  </div>
              </>
          </Switch>
      </BrowserRouter>
  );
}

export default withStyles(appStyles)(App);
