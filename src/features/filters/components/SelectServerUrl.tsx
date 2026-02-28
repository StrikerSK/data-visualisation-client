import React from 'react';
import { useSelector } from 'react-redux';
import { updateServerUrl } from '../generalSlice';
import SelectTemplate from './SelectTemplate';
import { RootState } from '../../../shared/types';

const SelectServerUrl: React.FC = () => {
  const serverUrl = useSelector((state: RootState) => state.generalReducer.serverUrl);

  const name = 'Server URL';
  const options = [
    { value: 'http://localhost:8080', name: 'Local (8080)' },
    { value: 'http://localhost:8081', name: 'Local (8081)' },
    { value: 'https://pid-data-server.herokuapp.com', name: 'Production (Heroku)' },
  ];

  return (
    <SelectTemplate
      propValue={serverUrl}
      selectName={name}
      selectOptions={options}
      dispatchCallback={updateServerUrl}
    />
  );
};

export default SelectServerUrl;
