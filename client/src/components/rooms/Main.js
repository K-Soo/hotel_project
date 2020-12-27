import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'lib/styles/Button';
import { VscZoomIn } from 'react-icons/vsc';
import Breadcrumb from 'components/common/Breadcrumb';
import HeadLine from 'components/common/HeadLine';
import CategoryImageSlider from 'components/common/CategoryImageSlider';
import { RoomData } from 'components/rooms/RoomData';

const MainBlock = styled.div`
  margin: 0 auto;
  width: 60%;
  ${({ theme }) => theme.Desktop`
      width: 80%;
  `}
  ${({ theme }) => theme.Tablet`
      width: 95%;
  `}
  h1 {
    font-size: 2rem;
    text-align: center;
    margin: 50px;
  }
`;

const ImgSlider = styled.div`
  width: 100%;
  position: relative;
  height: 400px;
  ${({ theme }) => theme.LaptopL`
       height: 350px;
  `}
  ${({ theme }) => theme.Laptop`
       height: 300px;
  `}
  ${({ theme }) => theme.Mobile`
  height: 250px;
  `}
`;

const RoomInside = styled.div`
  padding: 1rem 0;
  span {
    padding-right: 0.5rem;
  }
  .roomType::after {
    content: '';
    border-right: 1px solid #adb5bd;
    padding: 0 0.1rem;
  }
`;

const RoomPrice = styled.div`
  padding: 0.7rem 0;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #20202020;
  border-top: 1px solid #20202020;
  .price {
    flex: 1 60%;
  }
  span {
    font-weight: 600;
  }
  strong {
    font-size: 1.7rem;
  }
`;
const PriceButton = styled(Button)`
  height: 40px;
  flex-grow: 1;
`;
const RoomInfo = styled.div`
  position: relative;
  margin-top: 1rem;
  white-space: nowrap;
  span {
    margin: 0 7px;
  }
  .infoItem {
    display: flex;
    margin-bottom: 0.3rem;
  }
  .infoItem span::after {
    content: '';
    border-right: 1px solid #adb5bd;
    padding-right: 0.7rem;
  }
  .infoItem .last span:after {
    content: '';
    border-right: none;
  }
`;

const StyledLink = styled.nav`
  position: absolute;
  bottom: 0;
  right: 0;
  color: #3f6299;
  font-size: 1.1rem;
  .roomLink {
    margin-right: 0.2rem;
  }
  .ZoomIcon {
    height: 1rem;
  }
`;

// room styled
const RoomList = styled.ul`
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  flex-wrap: wrap;
  flex: 1 1 50%;
  padding: 0 30px;
  ${({ theme }) => theme.Tablet`
    padding: 0 5px;
  `}
  ${({ roomType, check }) =>
    check[roomType] ||
    css`
      display: none;
    `}
`;
// option styled
const CheckBox = styled.div`
  padding: 15px 10px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  strong {
    padding: 0 10px;
    ${({ theme }) => theme.Tablet`
    padding-left: 5px;
    font-size:14px;
  `}
  }
  div {
    padding: 0 20px;
    ${({ theme }) => theme.Tablet`
    padding: 0 5px;
    font-size:14px;
  `}
  }
  label {
    padding-left: 5px;
  }
`;

const items = [
  { to: '/', label: '홈' },
  { to: '/rooms/main', label: '객실' },
];

const Main = () => {
  const [check, setCheck] = useState({
    스탠다드: true,
    부티크: true,
    디럭스: true,
    스위트: true,
  });
  const CheckData = ['스탠다드', '부티크', '디럭스', '스위트'];

  const onChange = e => {
    const { checked, id } = e.target;
    setCheck({ ...check, [id]: checked });
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

      <HeadLine>
        <h1>객실</h1>
        <p>
          서울의 역사와 비즈니스의 중심 서울에 위치한 이 호텔은 150실 규모를 갖춘 한국 최고의 럭셔리
          호텔입니다. 서울 다운타운의 중심에서 남산과 명동, 스카이라인을 감상할 수 있는 서울은
          세계적인 인테리어 회사들이 참가하여 설계한 객실들로 구성되어있습니다.
        </p>
      </HeadLine>
      <MainBlock>
        <CheckBox>
          <strong>객실타입</strong>
          {CheckData.map(data => (
            <div key={data}>
              <input type='checkbox' onChange={onChange} id={data} checked={check[`${data}`]} />
              <label htmlFor={data}>{data}</label>
            </div>
          ))}
        </CheckBox>

        <RoomList>
          {RoomData.map(
            ({
              id,
              floor,
              roomType,
              name,
              bedType,
              people,
              roomSize,
              roomImage,
              view,
              price,
              link,
            }) => (
              <ListItem key={id} roomType={roomType} check={check}>
                <ImgSlider>
                  <CategoryImageSlider roomImage={roomImage} />
                </ImgSlider>
                <RoomInside>
                  <div>
                    <span className='roomType'>{floor}</span>
                    <span>{roomType}</span>
                    <h2>
                      <Link to={`/rooms/${link}`}>{name}</Link>
                    </h2>
                  </div>
                  <RoomInfo>
                    <div className='infoItem'>
                      <div>
                        <strong>침대타입</strong>
                        <span>{bedType}</span>
                      </div>
                      <div>
                        <strong>전망</strong>
                        <span>{view}</span>
                      </div>
                      <div className='last'>
                        <strong>투숙인원</strong>
                        <span>{people}</span>
                      </div>
                    </div>
                    <div>
                      <strong>객실면적</strong>
                      <span>{roomSize}</span>
                    </div>
                    <StyledLink>
                      <Link to={`/rooms/${link}`} className='roomLink'>
                        자세히 보기
                      </Link>
                      <VscZoomIn className='ZoomIcon' />
                    </StyledLink>
                  </RoomInfo>
                </RoomInside>

                <RoomPrice>
                  <div className='price'>
                    <span>KRW</span>
                    <strong>&nbsp;{price}&nbsp;~</strong>
                  </div>
                  <PriceButton>요금 조회</PriceButton>
                </RoomPrice>
              </ListItem>
            )
          )}
        </RoomList>
      </MainBlock>
    </>
  );
};

export default Main;
