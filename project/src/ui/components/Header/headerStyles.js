const headerStyles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logoTitle: {
    flexGrow: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      fontSize: 36,
    },
  },
  logoIcon: {
    borderRadius: '50%',
    width: 50,
    height: 50,
    backgroundColor: theme.palette.primary.main,
    marginRight: 10,
  },
  button: {
    marginLeft: 4,
  },
});

export default headerStyles;
