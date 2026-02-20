import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const SelectTemplate = ({ propValue, selectName, selectOptions, dispatchCallback }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(dispatchCallback(value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: '30%' }}>
      <InputLabel id="color-selector">{selectName}</InputLabel>
      <Select
        labelId="color-selector"
        id="color-selector"
        value={propValue}
        onChange={handleChange}
        autoWidth
        label={selectName}
      >
        {selectOptions.map((item, index) => {
          return (
            <MenuItem key={index} value={item.value}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

SelectTemplate.propTypes = {
  propValue: PropTypes.any,
  selectName: PropTypes.string.isRequired,
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
  dispatchCallback: PropTypes.func.isRequired,
};

export default SelectTemplate;
