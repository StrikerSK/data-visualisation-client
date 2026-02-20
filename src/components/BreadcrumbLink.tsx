import React from 'react';

interface BreadcrumbItem {
  name: string;
  link: string;
}

interface BreadcrumbLinkProps {
  name: string;
  itemList: BreadcrumbItem[];
}

const BreadcrumbLink: React.FC<BreadcrumbLinkProps> = ({ name, itemList }) => {
  return (
    <div className="breadcrumb-link-container">
      <span>{name}</span>
      <ul className="breadcrumb">
        {itemList.map(({ name, link }, index) => {
          return (
            <li key={index}>
              <a className="breadcrumb-link" color="inherit" href={link}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BreadcrumbLink;
