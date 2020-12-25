import React, { useRef } from 'react';
import HeadLine from 'components/common/HeadLine';
import Breadcrumb from 'components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'lib/styles/Button';
import { useReactToPrint } from 'react-to-print';
import { useSelector } from 'react-redux';

const StyledCompleted = styled.div`
  width: 1024px;
  border: 1px solid #000;
  margin: 0 auto 50px;
  padding: 10px;
  header {
    text-align: right;
    margin: 10px;
  }
  div {
    white-space: nowrap;
  }
  .ko {
    display: block;
  }
  ${({ theme }) => theme.Laptop`
     width: 95%;
  `}
  ${({ theme }) => theme.Tablet`
      font-size:12px;
   `}
`;

const Detail = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
    input {
      border: 1px solid #999;
      flex-basis: 40%;
      text-align: center;
    }
  }
  .ReserveDetail {
    padding: 5px 15px;
    flex-grow: 1;
  }
  .roomDetail {
    background: #f5f5f5;
    padding: 5px 15px;
    flex-grow: 1;
  }
`;

const Payment = styled.section`
  margin-top: 15px;
  border: 1px solid #999;
  padding: 10px;
  .subTitle {
    margin: 5px;
    font-weight: 500;
    font-size: 16px;
  }
  .amountDetail {
    margin-top: 15px;
    background: #f5f5f5;
    padding: 5px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    .dateTime {
      margin: 5px;
      flex: 1 1 30%;
      display: flex;
      justify-content: space-between;
    }
    input {
      border: 1px solid #999;
      flex-basis: 40%;
      text-align: center;
    }
  }
`;

const Remarks = styled.section`
  margin: 15px 0;
  article {
    padding: 10px;
    border: 1px solid #999;
  }
  textarea {
    width: 100%;
    resize: none;
    padding: 10px;
    outline: none;
  }
  .RemarkTitle {
    margin-bottom: 10px;
  }
`;

const Instructions = styled.section`
  border: 1px solid #999;
  padding: 5px 10px;
  h4 {
    margin-bottom: 5px;
  }
  li {
    color: #828282;
    padding-bottom: 5px;
    ::before {
      content: '- ';
    }
  }
`;
const ButtonBlock = styled.div`
  margin-top: 20px;
  text-align: right;
  button:first-child {
    margin-right: 10px;
  }
  ${({ theme }) => theme.Mobile`
      display: flex;
      justify-content: center;
   `}
`;

const NonMemReserveDetail = ({ match, history }) => {
  const { index, id } = match.params;
  const items = [
    { to: '/', span: '홈' },
    { to: '/reservation/check-nonMem-reserve', span: '비회원 예약조회' },
    { to: `/reservation/check-nonMem-reserve/${id}/${index}`, span: '비회원 상세예약 내역' },
  ];
  const { nonMemberReserve } = useSelector(({ checkReserve }) => ({
    nonMemberReserve: checkReserve.nonMember_reserve[index],
  }));
  const PrintRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => PrintRef.current,
  });

  const onClick = () => {
    history.push('/reservation/check-nonMem-reserve');
  };

  const { booking, roomType, detail, bookingID, TotalPrice } = nonMemberReserve;

  return (
    <div>
      <Breadcrumb>
        {items.map(({ to, span }) => (
          <Link key={to} to={to}>
            {span}
          </Link>
        ))}
      </Breadcrumb>
      <HeadLine>
        <h1>RESERVATION</h1>
      </HeadLine>
      <StyledCompleted ref={PrintRef}>
        <header>
          <h1>Hotel Voucher</h1>
          <p>예약확정서를 프린트 또는, 캡쳐하신 후 호텔체크인시 제출하시기바랍니다.</p>
        </header>
        <Detail>
          <article className='ReserveDetail'>
            <ul>
              <li>
                <div>
                  <span>Booking ID :</span>
                  <span className='ko'>예약번호</span>
                </div>
                <input type='text' disabled value={bookingID} />
              </li>
              <li>
                <div>
                  <span>Guest name :</span>
                  <span className='ko'>고객성함</span>
                </div>
                <input type='text' disabled value={booking.guest.guestName} />
              </li>
              <li>
                <div>
                  <span>Guest Phone :</span>
                  <span className='ko'>핸드폰</span>
                </div>
                <input type='text' disabled value={booking.guest.guestName} />
              </li>
              <li>
                <div>
                  <span>Country of passport :</span>
                  <span className='ko'>여권 발행국가</span>
                </div>
                <input type='text' disabled value='South Korea' />
              </li>
              <li>
                <div>
                  <span>Hotel :</span>
                  <span className='ko'>호텔</span>
                </div>
                <input type='text' disabled value='CORINTHIA' />
              </li>
            </ul>
          </article>
          <article className='roomDetail'>
            <ul>
              <li>
                <div>
                  <span>Num of Rooms :</span>
                  <span className='ko'>방 개수</span>
                </div>
                <input type='text' disabled value={detail.roomQuantity} />
              </li>
              <li>
                <div>
                  <span>Num of Adults :</span>
                  <span className='ko'>어른</span>
                </div>
                <input type='text' disabled value={detail.adult} />
              </li>
              <li>
                <div>
                  <span>Num of Children :</span>
                  <span className='ko'>아동</span>
                </div>
                <input type='text' disabled value={detail.children} />
              </li>
              <li>
                <div>
                  <span>Breakfast :</span>
                  <span className='ko'>조식</span>
                </div>
                <input type='text' disabled value='현장문의' />
              </li>
              <li>
                <div>
                  <span>Room Type :</span>
                  <span className='ko'>방 타입</span>
                </div>
                <input type='text' disabled value={roomType.name} />
              </li>
            </ul>
          </article>
        </Detail>
        <Payment>
          <article>
            <ul>
              <li className='dateTime'>
                <div>
                  <span>Arrival :</span>
                  <span className='ko'>도착일</span>
                </div>
                <input type='text' disabled value={detail.checkIn} />
              </li>
              <li className='dateTime'>
                <div>
                  <span>Departure :</span>
                  <span className='ko'>출발일</span>
                </div>
                <input type='text' disabled value={detail.checkOut} />
              </li>
              <li className='dateTime'>
                <div>
                  <span>Night :</span>
                  <span className='ko'>숙박 일</span>
                </div>
                <input type='text' disabled value={detail.stay} />
              </li>
            </ul>
          </article>

          <article className='amountDetail'>
            <div className='subTitle'>
              <span>Payment Details</span>
              <span className='ko'>(지급 상세 내역)</span>
            </div>

            <ul>
              <li className='dateTime'>
                <div>
                  <span>Payment :</span>
                  <span className='ko'>결제방식</span>
                </div>
                <input type='text' disabled value='현장결제' />
              </li>
              <li className='dateTime'>
                <div>
                  <span>Amount :</span>
                  <span className='ko'>금액</span>
                </div>
                <input
                  type='text'
                  disabled
                  value={`₩ ${TotalPrice}`}
                  style={{
                    color: 'red',
                    fontSize: '16px',
                    textAlign: 'center',
                  }}
                />
              </li>
            </ul>
          </article>
        </Payment>
        <Remarks>
          <article>
            <div className='RemarkTitle'>
              <span>Remarks :</span>
              <span className='ko'>요청사항</span>
            </div>
            <textarea readOnly rows='5' value={booking.desc.requested || '없음'} />
          </article>
        </Remarks>
        <Instructions>
          <h4>주요사항</h4>
          <ul>
            <li>
              호텔 체크인 시,호텔 담당 직원에게 신분증 또는 여권을 제시해야 하며, 정보가
              일치해야합니다.
            </li>
            <li>
              해당 바우처는 순수 객실요금으로 조식및 기타 서비스는 투숙기간중 호텔측에 직접
              지불하셔야합니다.
            </li>
            <li>간이 침대 및 장애인용 휠체어,기타 문의사항은 호텔측과 직접 문의하셔야합니다.</li>
            <li>실시간 예약 특성상 중복예약이 발생할 수 있으며 예약이 취소될 수 있습니다.</li>
          </ul>
        </Instructions>
        <ButtonBlock>
          <Button complete onClick={onClick}>
            확인
          </Button>
          <Button print onClick={handlePrint}>
            프린트
          </Button>
        </ButtonBlock>
      </StyledCompleted>
    </div>
  );
};

export default NonMemReserveDetail;
