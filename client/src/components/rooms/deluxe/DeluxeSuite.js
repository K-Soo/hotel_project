import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'components/common/Breadcrumb';
import RoomTemplate from 'components/rooms/RoomTemplate';
import { RoomData } from 'components/rooms/RoomData';

const items = [
  { to: '/', label: '홈' },
  { to: '/rooms/main', label: '객실' },
  { to: '/rooms/superior-double', label: '슈페리어 더블' },
];

const DeluxeSuite = () => {
  return (
    <>
      <Breadcrumb>
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcrumb>
      <RoomTemplate contents={RoomData[5]} images={RoomData[5].roomImage} />
    </>
  );
};

export default DeluxeSuite;
