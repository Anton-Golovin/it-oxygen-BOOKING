// Core
import React from 'react';
import * as PropTypes from 'prop-types';
// UI
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const AutocompleteField = (props) => {
  const {
    input, options, id, label, color, fullWidth, meta,
  } = props;
  const { touched, error } = meta;
  return (
    <Autocomplete
      id={id}
      options={options}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <FormControl error={Boolean(touched && error)} fullWidth={fullWidth}>
          <TextField {...params} {...input} label={label} color={color} fullWidth={fullWidth} />
          {touched && error && <FormHelperText id={id}>{error}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};


AutocompleteField.propTypes = {
  fullWidth: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  label: PropTypes.string,
  input: PropTypes.shape({}),
  id: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'secondary', 'primary']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

AutocompleteField.defaultProps = {
  options: {},
  input: {},
  meta: {
    touched: false,
    error: '',
  },
  color: 'default',
  label: '',
  fullWidth: true,
};

export default AutocompleteField;
