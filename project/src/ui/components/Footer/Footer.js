// Core
import React from 'react';

// Ui
import {withStyles} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// Styles
import footerStyles from './footerStyles';

function Footer(props) {
  const { classes } = props;
  return (
    <Container component="footer" maxWidth="lg" className={classes.root}>
      <Typography variant="h6" className={classes.title}>
                  Travel With&nbsp;
        <Typography variant="inherit" color="primary">Booking</Typography>
      </Typography>
      <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
      </Typography>
    </Container>
  );
}

export default withStyles(footerStyles)(Footer);
