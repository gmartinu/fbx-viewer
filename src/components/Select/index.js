import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select, Tooltip } from '@mui/material';

const DefaultSelect = (props) => {
  const {
    onChange,
    label,
    options,
    value,
    name,
    disabled,
    optVar,
    optVal,
    conditional,
  } = props;
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        disabled={disabled}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
        }}
        value={value}
        onChange={onChange}
        inputProps={{ name: name }}
        label={label}
      >
        {options.map((option, index) =>
          option ? (
            option.tooltip ? (
              conditional ? (
                conditional(option) ? (
                  <MenuItem
                    value={option[optVal ? optVal : 'value']}
                    key={index}
                  >
                    <Tooltip title={option.tooltip} arrow>
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {option[optVar ? optVar : 'label']}{' '}
                      </div>
                    </Tooltip>
                  </MenuItem>
                ) : null
              ) : (
                <MenuItem value={option[optVal ? optVal : 'value']} key={index}>
                  <Tooltip title={option.tooltip} arrow>
                    <div
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {option[optVar ? optVar : 'label']}{' '}
                    </div>
                  </Tooltip>
                </MenuItem>
              )
            ) : conditional ? (
              conditional(option) ? (
                <MenuItem value={option[optVal ? optVal : 'value']} key={index}>
                  {option[optVar ? optVar : 'label']}
                </MenuItem>
              ) : null
            ) : (
              <MenuItem value={option[optVal ? optVal : 'value']} key={index}>
                {option[optVar ? optVar : 'label']}
              </MenuItem>
            )
          ) : null
        )}
      </Select>
    </FormControl>
  );
};

DefaultSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

export default DefaultSelect;
