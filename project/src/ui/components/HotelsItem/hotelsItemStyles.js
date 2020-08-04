const hotelsItemStyles = (theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  name: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: 14,
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
    },
  },
  placeWrapper: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  content: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(1),
  },
  websiteLink: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    textDecoration: 'none',
  },
  place: {
    fontSize: 12,
    [theme.breakpoints.up('sm')]: {
      fontSize: 16,
    },
  },
  images: {
    display: 'inline-flex',
    width: 100,
    height: 100,
    [theme.breakpoints.up('sm')]: {
      width: 150,
      height: 150,
    },
    '@global img': {
      height: '100%',
      width: 'auto',
    },
  },
});

export default hotelsItemStyles;
