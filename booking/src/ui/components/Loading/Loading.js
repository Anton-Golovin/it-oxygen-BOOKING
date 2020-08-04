// Core
import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
// UI
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
// Styles
import loadingStyles from './loadingStyles';

function Loading(props) {
  const {
    color, isLoading, request, classes,
  } = props;

  return (
    isLoading && (
      <Grid
        className={clsx({ [classes.loading]: request })}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <CircularProgress
          className={clsx({ [classes.request]: request })}
          color={color}
        />
      </Grid>
    )
  );
}

Loading.displayName = 'Loading';

Loading.propTypes = {
  color: PropTypes.string,
  isLoading: PropTypes.bool,
  request: PropTypes.bool,
};

Loading.defaultProps = {
  color: 'secondary',
  isLoading: false,
  request: false,
};

export default withStyles(loadingStyles)(Loading);