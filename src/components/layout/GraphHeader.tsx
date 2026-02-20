import React from 'react';
import GeneralHeader from './GeneralHeader';
import LinkMenuBox from '../LinkMenuBox';

const GraphHeader: React.FC = () => {
  return (
    <GeneralHeader>
      <h1>Predajnosť lístkov PID</h1>
      <LinkMenuBox />
    </GeneralHeader>
  );
};

export default GraphHeader;
