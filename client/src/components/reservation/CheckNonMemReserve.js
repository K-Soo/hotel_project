import React from 'react';
import { useSelector } from 'react-redux';
import HeadLine from 'components/common/HeadLine';
import Breadcrumb from 'components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Table = styled.div`
  margin: 0 auto 600px;
  width: 1024px;
  table {
    margin: 0 auto;
    width: 100%;
    border: 2px solid #666;
    border-collapse: collapse;
    text-align: center;
  }
  caption {
    text-align: left;
    padding-left: 20px;
    margin: 10px 0;
  }
  th {
    border: 1px solid #999;
    background: #f4f4f4;
    padding: 5px;
    color: #222;
  }
  td {
    border: 1px solid #999;
    padding: 5px;
    color: #333;
  }
  .bookingID {
    color: green;
    text-decoration: underline;
  }
  .price {
    color: crimson;
  }
  .completed {
    color: green;
    font-weight: 600;
  }
  ${({ theme }) => theme.Laptop`
     width: 95%;
  `}
`;

const items = [
  { to: '/', span: '홈' },
  { to: '/reservation/check-nonMem-reserve', span: '비회원 예약조회' },
];

const CheckNonMemReserve = () => {
  const { nonMemReserve } = useSelector(({ checkReserve }) => ({
    nonMemReserve: checkReserve.nonMember_reserve,
  }));

  return (
    <>
      <Breadcrumb>
        {items.map(({ to, span }) => (
          <Link key={to} to={to}>
            {span}
          </Link>
        ))}
      </Breadcrumb>
      <HeadLine>
        <h1>예약내역</h1>
      </HeadLine>
      <Table>
        <table>
          <caption>예약번호를 클릭하시면 상세내역을 확인하실수있습니다.</caption>
          <thead>
            <tr>
              <th rowSpan='2'>NO</th>
              <th>예약번호</th>
              <th>체크인</th>
              <th rowSpan='2'>객실명</th>
              <th>예약상태</th>
            </tr>
            <tr>
              <th>예약일</th>
              <th>체크아웃</th>
              <th>결제금액</th>
            </tr>
          </thead>
          {nonMemReserve &&
            nonMemReserve.map(
              ({ bookingID, register_date, detail, roomType, TotalPrice }, index) => (
                <tbody key={bookingID}>
                  <tr>
                    <td rowSpan='2'>{index + 1}</td>
                    <td className='bookingID'>
                      <Link to={`/reservation/check-nonMem-reserve/${bookingID}/${index}`}>
                        {bookingID}
                      </Link>
                    </td>
                    <td>{detail.checkIn}</td>
                    <td rowSpan='2'>{roomType.name}</td>
                    <td className='completed'>예약완료</td>
                  </tr>
                  <tr>
                    <td>{register_date}</td>
                    <td>{detail.checkOut}</td>
                    <td className='price'>{TotalPrice || roomType.Price}</td>
                  </tr>
                </tbody>
              )
            )}
        </table>
        {!nonMemReserve && <div>예약내역이없습니다.</div>}
      </Table>
    </>
  );
};

export default CheckNonMemReserve;
