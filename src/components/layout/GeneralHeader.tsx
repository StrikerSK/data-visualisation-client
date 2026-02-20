import React, { ReactNode } from 'react';

interface GeneralHeaderProps {
  children?: ReactNode;
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({ children }) => {
  return <div className="dashboard-header">{children}</div>;
};

export default GeneralHeader;
