import React from 'react';
import { ResponsiveCirclePacking } from '@nivo/circle-packing';

interface NivoBubbleComponentProps {
  data: any;
  color: string;
}

const NivoBubbleComponent: React.FC<NivoBubbleComponentProps> = ({ data, color }) => {
  return (
    <ResponsiveCirclePacking
      data={data || { name: 'root', children: [] }}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      id="name"
      value="value"
      colors={{ scheme: color as any }}
      padding={6}
      labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
      borderWidth={2}
      borderColor={{ from: 'color' }}
      animate={true}
    />
  );
};

export default NivoBubbleComponent;
