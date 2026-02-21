import React, { useState, ChangeEvent } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
import { adaptToWidth } from '../../../shared/utils/Functions';

interface CheckItem {
  itemName: string;
  isChecked: boolean;
}

interface CheckboxTemplateProps {
  checkItems: CheckItem[];
  context: string;
  dispatchFunction: (payload: string) => any;
  filterHeader: string;
}

const CheckboxTemplate: React.FC<CheckboxTemplateProps> = ({
  checkItems: checkedItems,
  context,
  dispatchFunction,
  filterHeader,
}) => {
  const dispatch = useDispatch();
  const [itemObjects, setItemObjects] = useState<CheckItem[]>(checkedItems);

  const checkboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const outputArrayOne = itemObjects.map((item) => {
      if (item.itemName === name) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    setItemObjects(outputArrayOne);
    generateRequest(outputArrayOne);
  };

  const generateRequest = (inputObject: CheckItem[]) => {
    const outputArrayTwo = inputObject
      .filter((item) => item.isChecked)
      .map(({ itemName }) => context + '=' + itemName.replace(' ', '%20'))
      .join('&');

    dispatch(dispatchFunction(outputArrayTwo));
  };

  const findIfChecked = (name: string): boolean => {
    const item = itemObjects.find(({ itemName }) => {
      return itemName === name;
    });
    return item ? item.isChecked : false;
  };

  const getCheckbox = (itemName: string) => {
    const isChecked = findIfChecked(itemName);
    return <Checkbox name={itemName} checked={isChecked} onChange={checkboxHandler} />;
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

export default CheckboxTemplate;
