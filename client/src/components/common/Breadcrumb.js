import React from 'react';
import styled from 'styled-components';

const BreadcrumbBlock = styled.ol`
  list-style: none;
  display: flex;
  width: 80%;
  align-items: center;
  margin: 0 auto;
  padding-top: 30px;
  font-size: 14px;
  color: #666666;
  li {
    padding: 15px;
    :last-child {
      font-weight: 600;
    }
  }
  ${({ theme }) => theme.Tablet`
      display: none;
  `}
`;

const Breadcrumb = props => {
  const BreadcrumbItem = ({ children, ...props }) => (
    <li className='breadcrumb-item'>{children}</li>
  );
  let children = React.Children.toArray(props.children);

  children = children.map((child, index) => (
    <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
  ));

  const lastIndex = children.length - 1;

  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(child, '/');
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  return (
    <>
      <BreadcrumbBlock>{children}</BreadcrumbBlock>
    </>
  );
};

export default Breadcrumb;
