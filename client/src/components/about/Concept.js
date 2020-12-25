import React from 'react';
import Breadcrumb from 'components/common/Breadcrumb';
import HeadLine from 'components/common/HeadLine';
import { Link } from 'react-router-dom';

const items = [
  { to: '/', label: '홈' },
  { to: '/about/introduction', label: '호텔소개' },
  { to: '/about/concept', label: '호텔컨셉' },
];

const Concept = () => {
  return (
    <>
      <Breadcrumb>
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcrumb>
      <HeadLine>
        <h1>호텔 컨셉</h1>
      </HeadLine>
    </>
  );
};

export default Concept;
