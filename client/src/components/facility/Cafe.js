import React from 'react';
import Breadcrumb from 'components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import FacilityTemplate from 'components/facility/FacilityTemplate';
import { Category } from 'components/facility/Main';

const items = [
  { to: '/', label: '홈' },
  { to: '/facility/main', label: '부대시설' },
  { to: '/facility/cafe', label: '호텔 카페' },
];
const Cafe = () => {
  const contents = Category[2];
  return (
    <>
      <Breadcrumb>
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcrumb>
      <FacilityTemplate contents={contents} images={contents.images} />
    </>
  );
};

export default Cafe;
