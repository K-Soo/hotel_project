import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiMoonClearFill, RiCloseLine } from 'react-icons/ri';
import { VscCalendar } from 'react-icons/vsc';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
registerLocale('ko', ko);

//Styled Calendar Component
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid #aaaaaa;
  padding: 5px;
  overflow: hidden;
  strong {
    color: #bbbbbb;
    display: block;
  }
  ${({ theme }) => theme.Mobile`
    strong{
      font-size:14px;
    }
    span{
      font-size: 12px;
    }
  `}
`;
// Styled Search Date
const SearchDate = styled.div`
  display: flex;
  flex: 1 1 40%;
  justify-content: space-around;
  ${({ theme }) => theme.Mobile`
  border-bottom: 1px solid #ccc;
  `}
`;

const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  white-space: nowrap;
`;
const DateInner = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: #bbbbbb;
  strong:first-child {
    font-size: 2rem;
    color: #000;
    font-weight: 400;
    margin: 0;
  }
`;
// Styled Search Quantity
const Quantity = styled.div`
  display: flex;
  text-align: center;
  margin: 0.1rem;
  justify-content: space-between;
  padding: 0.1rem;
  flex-grow: 1;
  span {
    font-size: 2rem;
    color: #000;
    font-weight: 400;
    margin: 0 2rem;
  }
`;

// Styled QuantityBox
const QuantityBox = styled.div`
  background: #fff;
  width: 350px;
  height: 238px;
  border: 1px solid #666;
  margin-bottom: 2px;
  border-radius: 5px;
  .container {
    height: 100%;
    flex-direction: column;
    display: flex;
    text-align: center;
    .reactIcons {
      text-align: right;
      .closeIcon {
        font-size: 1.7rem;
        vertical-align: middle;
        :hover {
          transform: scale(1.2);
          transition: transform 0.3s ease;
        }
      }
    }

    .person {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      text-align: center;
      margin: 0 5px;
      .personInner {
        display: flex;
        flex-grow: 1;
        align-items: center;
      }
      button {
        all: unset;
        flex: 1 30%;
        height: 60%;
        border: none;
        cursor: pointer;
        font-size: 16px;
        color: #fff;
        background: #1a65b3;
        &:hover {
          transition: all 0.3s ease-in-out;
          background: #0f3d6b;
        }
      }
      span {
        font-size: 16px;
        flex: 1 50%;
        height: 60%;
        line-height: 35px;
        color: #333;
        border: 1px solid #333;
        font-weight: 600;
      }
    }
  }
`;

const ReButton = styled.div`
  flex-grow: 1;
  a {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background: #1a65b3;
    letter-spacing: 0.1rem;
    text-align: center;
    display: block;
    min-width: 80px;
    height: 3.5rem;
    line-height: 3.5rem;
    &:hover {
      transition: all 0.3s ease-in-out;
      background: #0e4377;
    }
  }
`;
const ReactCalendarStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const Calendar = ({
  roomQuantity,
  children,
  adult,
  onSubmit,
  onIncrease,
  onDecrease,
  isOpen,
  open,
  night,
  onChange,
  endDate,
  // date time
  inMonth,
  inDate,
  outMonth,
  outDate,
  // start date
  startCheckIn,
  startCheckOut,
}) => {
  const [boxOpen, setBoxOpen] = useState(false);

  return (
    <>
      <ReactCalendarStyled>
        {open && (
          <DatePicker
            inline
            monthsShown={1}
            selectsRange
            selectsStart
            strictParsing
            onChange={onChange}
            selected={startCheckIn}
            startDate={startCheckIn}
            endDate={endDate}
            minDate={new Date()}
            locale='ko'
            shouldCloseOnSelect={true}
          />
        )}
        {boxOpen && (
          <QuantityBox>
            <div className='container'>
              <div className='reactIcons'>
                <RiCloseLine onClick={() => setBoxOpen(!boxOpen)} className='closeIcon' />
              </div>
              <strong>객실 - 투숙인원</strong>
              <section className='person'>
                <div className='personInner'>
                  <button name='roomQuantity' onClick={onDecrease}>
                    -
                  </button>
                  <span>객실수&nbsp;{roomQuantity}</span>
                  <button name='roomQuantity' onClick={onIncrease}>
                    +
                  </button>
                </div>
                <div className='personInner'>
                  <button name='adult' onClick={onDecrease}>
                    -
                  </button>
                  <span>성인&nbsp;{adult}</span>
                  <button name='adult' onClick={onIncrease}>
                    +
                  </button>
                </div>

                <div className='personInner'>
                  <button name='children' onClick={onDecrease}>
                    -
                  </button>
                  <span>어린이&nbsp;{children}</span>
                  <button name='children' onClick={onIncrease}>
                    +
                  </button>
                </div>
              </section>
            </div>
          </QuantityBox>
        )}
      </ReactCalendarStyled>

      <form onSubmit={onSubmit}>
        <Container>
          <SearchDate>
            <DateBox className='checkIn' onClick={isOpen}>
              <strong>
                체크인&nbsp;
                <VscCalendar />
              </strong>

              <DateInner>
                <strong>{inDate}</strong>
                <span>
                  <span>{inMonth}월</span>
                  <br />
                  <span>{inDate}일</span>
                </span>
              </DateInner>
            </DateBox>

            <DateBox>
              <strong>
                Night&nbsp;
                <RiMoonClearFill />
              </strong>
              <DateInner>
                <strong>{night}</strong>
              </DateInner>
            </DateBox>

            <DateBox onClick={isOpen}>
              <strong>
                체크아웃&nbsp;
                <VscCalendar />
              </strong>
              <DateInner>
                <strong>{outDate}</strong>
                <span>
                  <span>{outMonth}월</span>
                  <br />
                  <span>{outDate}일</span>
                </span>
              </DateInner>
            </DateBox>
          </SearchDate>

          <Quantity onClick={() => setBoxOpen(!boxOpen)}>
            <div>
              <strong>객실수</strong>
              <span>{roomQuantity}</span>
            </div>
            <div>
              <strong>성인</strong>
              <span>{adult}</span>
            </div>
            <div>
              <strong>어린이</strong>
              <span>{children}</span>
            </div>
          </Quantity>

          <ReButton>
            <Link to='/reservation/main'>검색</Link>
          </ReButton>
        </Container>
      </form>
    </>
  );
};

export default Calendar;
