// Core
import 'date-fns';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
// Ui
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// Parts
import { Container } from '@material-ui/core';
import AutocompleteField from '../../components/Form_Fields/AutocompleteField';
import DatePickerField from '../../components/Form_Fields/DatePickerField';
import TextField from '../../components/Form_Fields/TextField';
import Footer from '../../components/Footer/Footer';
// Styles
import searchFormStyles from './searchFormStyles';
// Data and config
import appendix from './appendix';
// Engine
import routerLink from '../../../engine/config/routerLink'

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  sendSearch() {
    this.setState({
      redirect: true
    })
  }

  render() {
    const { classes } = this.props;
    const { redirect } = this.state;
    return (
        <Container component="main" maxWidth="lg">
          { redirect && <Redirect to={routerLink.hotels} /> }
          <Paper className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <AutocompleteField
                    options={appendix}
                    id={'destination'}
                    label="Destination"
                    color="secondary"
                    name={'destination'}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <DatePickerField
                    color="secondary"
                    id={'checkIn'}
                    label="Check-in"
                    name={'checkIn'}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <DatePickerField
                    color="secondary"
                    id={'checkOut'}
                    label="Check-out"
                    name={'checkOut'}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Grid container justify="space-between" alignItems="flex-end" spacing={3}>
                  <Grid item xs={5} md={4}>
                    <TextField
                        id={'adults'}
                        name={'adults'}
                        type="number"
                        label="Adults"
                        color="secondary"
                    />
                  </Grid>
                  <Grid item xs={5} md={4}>
                    <TextField
                        id={'children'}
                        name={'children'}
                        type="number"
                        label="Children"
                        color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button variant="contained" color="primary" type="submit" onClick={() => this.sendSearch()} fullWidth>Search</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Footer />
        </Container>
    );
  }
}

export default withStyles(searchFormStyles)(SearchForm);
