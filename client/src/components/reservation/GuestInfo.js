import React, { useRef, useCallback } from 'react';
import Breadcrumb from 'components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import HeadLine from 'components/common/HeadLine';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { changeField, initializeBooking } from 'modules/reservation';
import { thirdPartyInfo, InfoCollection } from 'components/reservation/personalInfoData';
import Button from 'lib/styles/Button';
import LoadingOverlay from 'react-loading-overlay';
import StepBar from 'components/reservation/StepBar';

const StyledInfo = styled.div`
  display: flex;
  max-width: 1024px;
  margin: 0 auto 20px;
  h2 {
    padding: 15px 0;
    color: #333;
  }
  ${({ theme }) => theme.Tablet`
  flex-wrap: wrap;
  width: 95%;
  `}
`;

const InfoBox = styled.div`
  padding: 0 10px 10px 10px;
  white-space: nowrap;
  flex: 1 1;
  .dateTime {
    padding: 2px 0;
    strong {
      color: #222;
    }
  }
  ul {
    width: 100%;
    white-space: pre-wrap;
  }
  li {
    font-size: 14px;
    color: #828282;
    padding-bottom: 5px;
    ::before {
      content: '-';
    }
  }
  table {
    text-align: center;
    width: 100%;
    color: #333;
    border-collapse: collapse;
    padding: 15px;
    th {
      border: 1px solid #d9d9d9;
      padding: 3px;
      background: #f5f5f5;
    }
    td {
      border: 1px solid #d9d9d9;
      padding: 3px;
    }
  }
`;

const InputBox = styled.div`
  background: #f5f5f5;
  flex: 1 1 40%;
  padding: 30px;
  .inputInner {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    input {
      padding: 6px 12px;
      margin: 5px;
      flex: 1 1 30%;
      :focus {
        outline: none;
      }
      ${({ theme }) => theme.Laptop`
        width: 100%;
        margin: 5px;
      `}
    }
    ${({ theme }) => theme.Laptop`
     flex-direction: column;
     padding: 10px 0;
   `}
  }
  .info {
    color: #666;
    font-size: 14px;
  }
  .errorMsg {
    color: red;
  }
  textarea {
    width: 100%;
    resize: none;
    line-height: 1.1rem;
    font-size: 16px;
    padding: 10px;
    :focus {
      outline: none;
    }
  }
  ${({ theme }) => theme.Laptop`
    padding: 10px;
    `}
`;

const Payment = styled.div`
  h4 {
    color: #666;
  }
  span {
    font-weight: 600;
  }
  .amount {
    color: red;
    font-size: 18px;
  }
  .contain {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
`;

const StyledCheckBox = styled.div`
  text-align: right;
  margin-top: 5px;
  label {
    padding-left: 10px;
    cursor: pointer;
  }
  input[type='checkbox'] {
    cursor: pointer;
    position: relative;
    top: 2px;
    height: 18px;
    width: 18px;
  }
`;

const DarkBackground = styled.div`
  ${({ disabled }) =>
    disabled &&
    css`
      position: fixed;
      z-index: 999999;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.6);
    `}
  .loading {
    position: fixed;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const items = [
  { to: '/', label: '홈' },
  { to: '/reservation/main', label: '예약하기' },
  { to: '/reservation/guest-info', label: '정보입력' },
];
const GuestInfo = ({
  onChange,
  In,
  Out,
  child,
  roomType,
  detail,
  userData,
  InfoBoxHandle,
  onSubmit,
  goBack,
  error,
  TotalPrice,
  disabled,
}) => {
  const dispatch = useDispatch();
  // CheckBoxHandle Ref
  const buyerNameRef = useRef();
  const buyerPhonRef = useRef();
  const buyerEmailRef = useRef();
  const guestNameRef = useRef();
  const guestPhonRef = useRef();
  const guestEmailRef = useRef();

  const CheckBoxHandler = useCallback(
    e => {
      const { checked } = e.target;
      if (checked) {
        guestNameRef.current.value = buyerNameRef.current.value;
        guestPhonRef.current.value = buyerPhonRef.current.value;
        guestEmailRef.current.value = buyerEmailRef.current.value;
        const JoinData = [
          { guestName: guestNameRef.current.value },
          { guestPhon: guestPhonRef.current.value },
          { guestEmail: guestEmailRef.current.value },
        ];
        JoinData.forEach(el => {
          let newKey = Object.keys(el).join();
          const newValue = Object.values(el).join();
          dispatch(
            changeField({
              form: 'guest',
              name: newKey,
              value: newValue,
            })
          );
        });
      } else {
        dispatch(initializeBooking('guest'));
        guestNameRef.current.value = '';
        guestEmailRef.current.value = '';
        guestPhonRef.current.value = '';
      }
    },
    [dispatch]
  );

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
        <h1>RESERVATION</h1>
      </HeadLine>
      <DarkBackground disabled={disabled}>
        <LoadingOverlay className='loading' active={disabled} spinner={true} text='Loading' />
      </DarkBackground>
      <StepBar num={2} />

      <StyledInfo>
        <InfoBox>
          <article>
            <img src={require(`lib/images/${roomType.roomImage}`)} alt='bookingRoom' width='100%' />
          </article>
          <article>
            <h2>예약정보</h2>
            <div className='dateTime'>
              <span>객실명&nbsp;:&nbsp;</span>
              <strong>{roomType.name}</strong>
            </div>
            <div className='dateTime'>
              <span>체크인&nbsp;:&nbsp;</span>
              <strong>{In}</strong>
            </div>
            <div className='dateTime'>
              <span>체크아웃&nbsp;:&nbsp;</span>
              <strong>{Out}</strong>
            </div>
            <div className='dateTime'>
              <span>숙박일&nbsp;:&nbsp;</span>
              <strong>{detail.stay}</strong>
            </div>
            <div className='dateTime'>
              <span>투숙인원&nbsp;:&nbsp;</span>
              {child ? (
                <strong>
                  성인{detail.adult}&nbsp;/&nbsp;아동{child}
                </strong>
              ) : (
                <strong>성인&nbsp;{detail.adult}</strong>
              )}
            </div>
          </article>
          <article>
            <h2>취소규정</h2>
            <table>
              <tbody>
                <tr>
                  <th>취소일기준</th>
                  <th>취소가능여부</th>
                  <th>수수료율</th>
                </tr>
                <tr>
                  <td>{In}</td>
                  <td>취소불가능</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article>
            <h2>안내사항</h2>
            <ul>
              <li>영유아 수영장 입장시 구명조끼 필수이며 미지참시 입장이 불가합니다.</li>
              <li>모든 객실 금연실입니다.</li>
              <li>객실 천장 및 벽에 풍선부착불가합니다. 훼손시, 손해배상청구될 수 있습니다.</li>
              <li>실시간 예약 특성상 중복예약이 발생할 수 있으며 예약이 취소될 수 있습니다.</li>
              <li>고객 연락처 오기재로 인해 연락이 불가할 경우, 예약이 자동취소 될 수 있습니다.</li>
            </ul>
          </article>
        </InfoBox>

        <InputBox>
          <form onSubmit={onSubmit}>
            <h2>구매자 정보</h2>
            {error.buyerMsg && (
              <>
                <span className='errorMsg'>{error.buyerMsg}</span>
              </>
            )}
            <section className='inputInner'>
              <input
                type='text'
                name='buyerName'
                onChange={onChange}
                placeholder='구매자 이름'
                ref={buyerNameRef}
                className='buyer'
                defaultValue={userData.name || ''}
              />
              <input
                type='text'
                name='buyerPhon'
                onChange={onChange}
                placeholder='구매자 연락처'
                ref={buyerPhonRef}
                className='buyer'
                defaultValue={userData.phone || ''}
              />
              <input
                type='text'
                name='buyerEmail'
                onChange={onChange}
                placeholder='구매자 이메일'
                ref={buyerEmailRef}
                className='buyer'
                defaultValue={userData.email || ''}
              />
            </section>
            <StyledCheckBox>
              <input type='checkbox' name='checked' id='copy' onClick={CheckBoxHandler} />
              <label htmlFor='copy'>구매자와 동일</label>
            </StyledCheckBox>
            <h2>투숙자 정보</h2>
            {error.guestMsg && (
              <>
                <span className='errorMsg'>{error.guestMsg}</span>
              </>
            )}
            <section className='inputInner'>
              <input
                type='text'
                ref={guestNameRef}
                placeholder='투숙자 이름'
                name='guestName'
                onChange={onChange}
                className='guest'
              />
              <input
                type='text'
                placeholder='투숙자 연락처'
                name='guestPhon'
                ref={guestPhonRef}
                onChange={onChange}
                className='guest'
              />
              <input
                type='text'
                placeholder='투숙자 이메일'
                name='guestEmail'
                ref={guestEmailRef}
                onChange={onChange}
                className='guest'
              />
            </section>

            <section>
              <h2>고객요청사항</h2>
              <textarea className='desc' name='requested' cols='5' rows='8' onChange={onChange} />
              <h2>개인정보 수집 이용 동의</h2>
              <textarea className='info' rows='5' readOnly value={InfoCollection} />
              <StyledCheckBox>
                <input type='checkbox' name='colInfo' id='col' onChange={InfoBoxHandle} />
                <label htmlFor='col'>동의합니다.</label>
              </StyledCheckBox>
              <h2>제 3자에 대한 개인정보 제공</h2>
              <textarea className='info' rows='5' readOnly value={thirdPartyInfo} />
              <StyledCheckBox>
                <input type='checkbox' name='thirdInfo' id='third' onChange={InfoBoxHandle} />
                <label htmlFor='third'>동의합니다.</label>
              </StyledCheckBox>
            </section>
            <Payment>
              <h2>총 결제 금액</h2>
              <hr />
              <div>
                <div className='contain'>
                  <h4>결제방식</h4>
                  <span>현장결제</span>
                </div>
                <div className='contain'>
                  <h4>객실요금</h4>
                  <span>{TotalPrice}</span>
                </div>
                <div className='contain'>
                  <h4>결제금액(VAT)</h4>
                  <span className='amount'>₩ {TotalPrice}</span>
                </div>
              </div>
            </Payment>
            <Button submit disabled={disabled}>
              예약하기
            </Button>
          </form>
          <Button refresh onClick={goBack}>
            다시선택
          </Button>
        </InputBox>
      </StyledInfo>
    </>
  );
};

export default GuestInfo;
