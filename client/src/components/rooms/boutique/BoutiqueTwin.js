import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'components/common/Breadcrumb';
import RoomTemplate from 'components/rooms/RoomTemplate';
import { RoomData } from 'components/rooms/RoomData';

const items = [
  { to: '/', label: '홈' },
  { to: '/rooms/main', label: '객실' },
  { to: '/rooms/superior-twin', label: '슈페리어 트윈' },
];

const BoutiqueTwin = () => {
  return (
    <>
      <Breadcrumb>
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcrumb>
      <RoomTemplate contents={RoomData[2]} images={RoomData[2].roomImage} />
    </>
  );
};

export default BoutiqueTwin;
