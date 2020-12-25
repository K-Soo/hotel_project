import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'components/common/Breadcrumb';
import RoomTemplate from 'components/rooms/RoomTemplate';
import { RoomData } from 'components/rooms/RoomData';

const items = [
  { to: '/', label: '홈' },
  { to: '/rooms/main', label: '객실' },
  { to: '/rooms/royal-suite', label: '로얄 스위트 룸' },
];

const RoyalSuite = () => {
  return (
    <>
      <Breadcrumb>
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcrumb>
      <RoomTemplate contents={RoomData[7]} images={RoomData[7].roomImage} />
    </>
  );
};

export default RoyalSuite;
