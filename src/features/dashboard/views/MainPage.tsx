import React from 'react';
import { apexItems, nivoItems, rechartsItems } from '../../filters/components/LinkMenuBox';
import BreadcrumbLink from '../../../shared/components/BreadcrumbLink';

const MainPage: React.FC = () => {
  return (
    <div className="main-container">
      <div className="content-container">
        <h1>Aplikácia o grafoch</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet. Vitae aliquet nec
          ullamcorper sit. Sed risus pretium quam vulputate dignissim suspendisse in. Lobortis
          mattis aliquam faucibus purus in massa tempor nec. Lacus sed viverra tellus in hac
          habitasse platea dictumst vestibulum. Laoreet non curabitur gravida arcu ac tortor
          dignissim convallis aenean. Amet commodo nulla facilisi nullam vehicula. Ut pharetra sit
          amet aliquam id. Morbi blandit cursus risus at ultrices.
        </p>
      </div>
      <div className="breadcrumb-container">
        <BreadcrumbLink name="Nivo:" itemList={nivoItems} />
        <BreadcrumbLink name="Recharts:" itemList={rechartsItems} />
        <BreadcrumbLink name="Apex:" itemList={apexItems} />
      </div>
    </div>
  );
};

export default MainPage;
