const hotelsListStyles = (theme) => ({
  container: {
    flexGrow: 1,
    display: 'flex',
    overflow: 'hidden',
  },
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  notFoundMessage: {
    padding: theme.spacing(4),
  },
});

export default hotelsListStyles;
