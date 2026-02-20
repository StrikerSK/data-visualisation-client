import React from 'react';
import { render, screen } from '@testing-library/react';
import SpinnerComponent from '../SpinnerComponent';

// Mock the ClipLoader to avoid issues with emotion and jest
jest.mock('react-spinners/ClipLoader', () => {
  return function MockClipLoader() {
    return <div data-testid="clip-loader">Loading...</div>;
  };
});

describe('SpinnerComponent', () => {
  it('should render children when isDataLoaded is true', () => {
    render(
      <SpinnerComponent isDataLoaded={true}>
        <div data-testid="child-content">Content Loaded</div>
      </SpinnerComponent>
    );

    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText('Content Loaded')).toBeInTheDocument();
    expect(screen.queryByTestId('clip-loader')).not.toBeInTheDocument();
  });

  it('should render the spinner when isDataLoaded is false', () => {
    render(
      <SpinnerComponent isDataLoaded={false}>
        <div data-testid="child-content">Content Loaded</div>
      </SpinnerComponent>
    );

    expect(screen.queryByTestId('child-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('clip-loader')).toBeInTheDocument();
  });
});
