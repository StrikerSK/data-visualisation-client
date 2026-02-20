import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import PropTypes from 'prop-types';

const override = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: 'red',
};

const SpinnerComponent = ({ children, isDataLoaded }) => {
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

SpinnerComponent.propTypes = {
  children: PropTypes.node,
  isDataLoaded: PropTypes.bool.isRequired,
};

export default SpinnerComponent;
