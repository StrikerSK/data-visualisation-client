import React, { ReactNode } from 'react';
import ModalWindow from '../modal/ModalWindow';
import LinkMenuBox from '../LinkMenuBox';
import GeneralHeader from './GeneralHeader';

interface DashboardLayoutProps {
  children: [ReactNode, ReactNode, ReactNode, ReactNode];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-component">
      <GeneralHeader>
        <h1>Predajnosť lístkov PID</h1>
        <ModalWindow />
        <LinkMenuBox />
      </GeneralHeader>

      <div className="dashboard-container">
        <div className="dashboard-element">{children[0]}</div>
        <div className="dashboard-element">{children[1]}</div>
        <div className="dashboard-element">{children[2]}</div>
        <div className="dashboard-element">{children[3]}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
