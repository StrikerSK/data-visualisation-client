import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';

interface SelectOption {
  name: string;
  value: any;
}

interface SelectTemplateProps {
  propValue: any;
  selectName: string;
  selectOptions: SelectOption[];
  dispatchCallback: (value: any) => any;
}

const SelectTemplate: React.FC<SelectTemplateProps> = ({
  propValue,
  selectName,
  selectOptions,
  dispatchCallback,
}) => {
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent<any>) => {
    const { value } = event.target;
    dispatch(dispatchCallback(value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: '30%' }}>
      <InputLabel id="color-selector-label">{selectName}</InputLabel>
      <Select
        labelId="color-selector-label"
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

export default SelectTemplate;
