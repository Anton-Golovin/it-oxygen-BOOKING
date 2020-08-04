// Core
import React from 'react';
import * as PropTypes from 'prop-types';
// UI
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const DatePickerField = (props) => {
  const {
    fullWidth, label, color, format, id
  } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth={fullWidth}
        color={color}
        format={format}
        id={id}
        label={label}
      />
    </MuiPickersUtilsProvider>
  );
};


DatePickerField.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  format: PropTypes.string,
  id: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'secondary', 'primary']),
};

DatePickerField.defaultProps = {
  color: 'default',
  label: '',
  format: 'MM.dd.yyyy',
  fullWidth: true,
};

export default DatePickerField;
