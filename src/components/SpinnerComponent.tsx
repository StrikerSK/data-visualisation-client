import React, { ReactNode } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface SpinnerProps {
  children?: ReactNode;
  isDataLoaded: boolean;
}

const override: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: 'red',
};

const SpinnerComponent: React.FC<SpinnerProps> = ({ children, isDataLoaded }) => {
  return (
    <div className="spinner-container">
      {isDataLoaded ? (
        children
      ) : (
        <ClipLoader css={override} sizeUnit={'px'} size={150} color={'#123abc'} />
      )}
    </div>
  );
};

export default SpinnerComponent;
