import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
import { adaptToWidth } from '../../../lib/Functions';
import PropTypes from 'prop-types';

const CheckboxTemplate = ({
  checkItems: checkedItems,
  context,
  dispatchFunction,
  filterHeader,
}) => {
  const dispatch = useDispatch();
  const [itemObjects, setItemObjects] = useState(checkedItems);

  const checkboxHandler = ({ target }) => {
    const { name } = target;
    const outputArrayOne = itemObjects.map((item) => {
      if (item.itemName === name) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    setItemObjects(outputArrayOne);
    generateRequest(outputArrayOne);
  };

  const generateRequest = (inputObject) => {
    const outputArrayTwo = inputObject
      .filter((item) => item.isChecked)
      .map(({ itemName }) => context + '=' + itemName.replace(' ', '%20'))
      .join('&');

    dispatch(dispatchFunction(outputArrayTwo));
  };

  const findIfChecked = (name) => {
    return itemObjects.find(({ itemName }) => {
      return itemName === name;
    }).isChecked;
  };

  const getCheckbox = (month) => {
    const isChecked = findIfChecked(month);
    return <Checkbox name={month} checked={isChecked} onChange={checkboxHandler} />;
  };

  return (
    <FormControl
      component={'fieldset'}
      sx={{
        m: '0.5rem',
        width: '95%',
      }}
    >
      <FormLabel component="legend">{filterHeader}</FormLabel>
      <FormGroup row>
        {checkedItems.map(({ itemName }) => {
          return (
            <FormControlLabel
              key={itemName}
              control={getCheckbox(itemName)}
              label={itemName}
              sx={{
                width: adaptToWidth('30%', '45%'),
              }}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

CheckboxTemplate.propTypes = {
  checkItems: PropTypes.arrayOf(
    PropTypes.shape({
      itemName: PropTypes.string.isRequired,
      isChecked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  context: PropTypes.string.isRequired,
  dispatchFunction: PropTypes.func.isRequired,
  filterHeader: PropTypes.string.isRequired,
};

export default CheckboxTemplate;
