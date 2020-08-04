const filterStyles = (theme) => ({
  drawer: {
    height: '100%',
  },
  name: {
    marginBottom: 20,
  },
  container: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  },
  paperMobile: {
    width: 250,
  },
  checkBox: {
    display: 'none',
  },
  ratingWrapper: {
    display: 'flex',
  },
  paperDesktop: {
    position: 'static',
  },
});

export default filterStyles;
