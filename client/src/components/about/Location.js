import React, { useState, useRef } from 'react';
import Breadcrumb from 'components/common/Breadcrumb';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import KakaoMap from 'components/common/KakaoMap';
import { CSSTransition } from 'react-transition-group';
const Head = styled.div`
  margin: 30px 0;
`;
const items = [
  { to: '/', label: '홈' },
  { to: '/about/introduction', label: '호텔소개' },
  { to: '/about/location', label: '호텔위치' },
];

const StyledLocation = styled.div`
  width: 80%;
  margin: 0 auto;
  ${({ theme }) => theme.Mobile`
      width: 95%;
  `}
`;

const Address = styled.div`
  margin: 50px 0;
  padding: 25px 0;
  border: 1px solid #e7e7e7;
  background: #f5f5f5;
  display: flex;
  h2 {
    padding: 0 30px;
  }
  li:last-child {
    padding-top: 5px;
  }
`;

const CommonDiv = css`
  color: #333;
  padding: 15px;
  cursor: pointer;
  height: auto;
  border: solid #ccc;
  border-width: 0 0 1px 0;
  position: relative;
`;
const CommonAfter = css`
  content: '';
  transition: all 0.3s;
  border: solid #000;
  position: absolute;
  right: 20px;
  top: 25px;
  border-width: 0 1px 1px 0;
  margin-right: 6px;
  padding: 10px;
  transform: rotate(-135deg);
`;

const DropButton = styled.div`
  margin: 50px 0;
  border-top: 1px solid #666;
  ${({ theme }) => theme.Mobile`
      h2{
        font-size: 16px;
      }
  `}
  #car {
    ${CommonDiv}
    &:after {
      ${CommonAfter}
      ${({ val }) =>
        val.checkCar &&
        css`
          margin-top: 1px;
          transform: rotate(45deg);
        `}
    }
  }
  #train {
    ${CommonDiv}
    &:after {
      ${CommonAfter}
      ${({ val }) =>
        val.checkTrain &&
        css`
          margin-top: 1px;
          transform: rotate(45deg);
        `}
    }
  }
`;
const Toggle = styled.div`
  div {
    padding: 30px;
  }
  dl {
    padding-bottom: 15px;
  }
  dt {
    padding-bottom: 5px;
    color: #000;
    font-weight: 600;
    ${({ theme }) => theme.Mobile`
        font-size: 14px;
  `}
  }
  dd {
    ${({ theme }) => theme.Mobile`
        font-size: 13px;
  `}
  }
  dd::before {
    content: '-';
  }
  &.fade-enter {
    height: 0;
    opacity: 0;
  }
  &.fade-enter-active {
    height: ${props => props.menuHeight};
    opacity: 1;
  }
  &.fade-exit {
    height: ${props => props.menuHeight};
    opacity: 1;
    transition: all 0.3s linear;
  }
  &.fade-exit-active {
    height: 0;
    opacity: 0;
  }
`;
const Location = () => {
  const [menuHeight, setMenuHeight] = useState(null);
  const [val, setVal] = useState({
    checkTrain: false,
    checkCar: false,
  });
  const nav = useRef();

  const calcHeight = () => {
    const height = nav.current ? `${nav.current.offsetHeight}px` : menuHeight;
    setMenuHeight(height);
  };

  const nameHandler = e => {
    const { className } = e.target;
    setVal({ ...val, [className]: !val[className] });
  };

  return (
    <>
      <Breadcrumb>
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcrumb>
      <StyledLocation>
        <Head>
          <h1>LOCATION</h1>
          <address>서울특별시 중구</address>
        </Head>
        <KakaoMap />
        <Address>
          <h2>My호텔 서울</h2>
          <ul>
            <li>
              <strong>TEL:</strong>
              <span>00-000-000</span>
            </li>
            <li>
              <strong>TEL:</strong>
              <span>00-000-000</span>
            </li>
          </ul>
        </Address>
        <DropButton val={val}>
          <div className='checkTrain' id='train' onClick={nameHandler}>
            <h2 className='checkTrain'>지하철로 오시는길</h2>
            <CSSTransition
              in={val.checkTrain}
              classNames='fade'
              timeout={300}
              unmountOnExit
              onEnter={calcHeight}
            >
              <Toggle menuHeight={menuHeight}>
                <div ref={nav}>
                  <dl>
                    <dt>1호선 시청역</dt>
                    <dd>지하철출구: 10번 출구</dd>
                    <dd>도보 10분</dd>
                  </dl>
                  <dl>
                    <dt>2호선 을지로 입구역</dt>
                    <dd>지하철출구:8번출구</dd>
                    <dd>도보 1분</dd>
                  </dl>
                </div>
              </Toggle>
            </CSSTransition>
          </div>

          <div className='checkCar' id='car' onClick={nameHandler}>
            <h2 className='checkCar'>자동차</h2>
            <CSSTransition
              in={val.checkCar}
              classNames='fade'
              timeout={300}
              onEnter={calcHeight}
              unmountOnExit
            >
              <Toggle menuHeight={menuHeight}>
                <div ref={nav}>
                  <dl>
                    <dt>광화문 방면</dt>
                    <dd>
                      시청 앞 사거리를 지나 남대문 앞에서 U턴 → 시청 방향으로 다시 오다가
                      한화손해보험 빌딩 전에서 북창동길로 우회전 → 호텔로진입
                    </dd>
                  </dl>
                  <dl>
                    <dt>을지로 2가</dt>
                    <dd>을지로 입구 사거리에서 한국은행 방면으로 좌회전 → 호텔로진입</dd>
                  </dl>
                </div>
              </Toggle>
            </CSSTransition>
          </div>
        </DropButton>
      </StyledLocation>
    </>
  );
};

export default Location;
