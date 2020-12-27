import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CalendarContainer from 'containers/reservation/CalendarContainer';
import DropRoomContainer from 'containers/reservation/DropRoomContainer';
import HeadLine from 'components/common/HeadLine';
import Breadcrumb from 'components/common/Breadcrumb';
import StepBar from 'components/reservation/StepBar';

const Wrap = styled.div`
  width: 1024px;
  margin: 0 auto;
  ${({ theme }) => theme.Laptop`
  width: 95%;
  `}
`;
const Block = styled.div`
  margin-bottom: 350px;
`;
const items = [
  { to: '/', label: '홈' },
  { to: '/reservation/main', label: '예약하기' },
  { to: '/reservation/main', label: '객실선택' },
];

const Main = () => {
  return (
    <Block>
      <Breadcrumb>
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcrumb>
      <HeadLine>
        <h1>RESERVATION</h1>
      </HeadLine>
      <Wrap>
        <CalendarContainer />
      </Wrap>
      <StepBar num={1} />
      <DropRoomContainer />
    </Block>
  );
};

export default Main;
