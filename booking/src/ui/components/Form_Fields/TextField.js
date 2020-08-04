// Core
import React from 'react';
import * as PropTypes from 'prop-types';
// UI
import { TextField as Input } from '@material-ui/core';


const TextField = (props) => {
  const {
    fullWidth, label, color, id, input, type, className, variant,
  } = props;

  return (
    <Input
      fullWidth={fullWidth}
      id={id}
      type={type}
      label={label}
      color={color}
      variant={variant}
      className={className}
      {...input}
    />
  );
};


TextField.propTypes = {
  fullWidth: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.oneOf(['default', 'secondary', 'primary']),
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  type: PropTypes.string,
};

TextField.defaultProps = {
  color: 'default',
  label: '',
  className: '',
  type: 'text',
  fullWidth: true,
  variant: 'standard',
};

export default TextField;
