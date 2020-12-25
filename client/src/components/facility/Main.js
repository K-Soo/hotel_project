import React from 'react';
import Breadcrumb from 'components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import HeadLine from 'components/common/HeadLine';
import styled from 'styled-components';
import CategoryImageSlider from 'components/common/CategoryImageSlider';
import { VscZoomIn } from 'react-icons/vsc';

const MainBlock = styled.div`
  margin: 0 auto;
  width: 80%;
  h1 {
    font-size: 2rem;
    text-align: center;
    margin: 50px;
  }
  ${({ theme }) => theme.Desktop`
      width: 80%;
  `}
  ${({ theme }) => theme.LaptopL`
      width: 100%;
  `}
`;

// room styled
const Container = styled.ul`
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

const Inside = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #adb5bd;
  span {
    padding-right: 0.5rem;
  }
`;

const Info = styled.div`
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

const StyledLink = styled.div`
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
export const Category = [
  {
    id: 0,
    floor: '5F',
    info: '사우나 & 피트니스',
    name: '사우나 센터',
    Type: '사우나',
    images: [
      { src: 'facility/sauna/image1.jpg', alt: '카페3' },
      { src: 'facility/sauna/image2.jpg', alt: '카페3' },
      { src: 'facility/sauna/image3.jpg', alt: '카페3' },
      { src: 'facility/sauna/image4.jpg', alt: '카페3' },
      { src: 'facility/sauna/image5.jpg', alt: '카페3' },
    ],
    link: 'sauna',
    desc:
      '저희 호텔 스파의 건식, 습식사우나는 향화석에서 방출되는 음이온으로 혈액순환과 신진대사에 도움을 주며, 특히 사우나 후 상승한 몸의 온도를 회복시켜 주는 `Ice Fountain`은 면역체계 활성화와 피부미용에도 효과적입니다. 또한 몸의 노폐물과 땀을 빠르게 배출시켜서 신진대사를 활성화시켜주고 몸의 피로감을 줄여주며 개운해지고 다이어트 효과를 극대화해줍니다.',
  },
  {
    id: 1,
    info: '사우나 & 피트니스',
    name: '피트니스 센터',
    floor: '5F',
    Type: '피트니스',
    open: '07시/22시',
    images: [
      { src: 'facility/fitness/image1.jpg', alt: '피트니스1' },
      { src: 'facility/fitness/image2.jpg', alt: '피트니스2' },
      { src: 'facility/fitness/image3.jpg', alt: '피트니스3' },
      { src: 'facility/fitness/image4.jpg', alt: '피트니스4' },
    ],
    link: 'fitness',
    desc:
      ' 60여대의 최첨단 기구로 구성된 피트니스센터는 최고급 프리미엄 브랜드 테크노짐의 ARTIST 장비로 트레이닝에 즐거움을 더해 드립니다. Cardio Zone, Strength Zone, Free Weight Zone, Stretching Zone 등의 공간이 최적의 편리함을 제공하며, 또한 전문강사들의 퍼스널 트레이닝, 필라테스 강습 프로그램을 통하여 고객의 다양한 스타일을 충족시켜 드립니다.',
  },

  {
    id: 2,
    info: '서비스',
    name: '호텔 카페',
    floor: '1F',
    Type: 'Cafe',
    open: '09시/22시',
    images: [
      { src: 'facility/cafe/image1.jpg', alt: '카페1' },
      { src: 'facility/cafe/image2.jpg', alt: '카페2' },
      { src: 'facility/cafe/image3.jpg', alt: '카페3' },
    ],
    link: 'cafe',
    desc:
      '저의 호텔 1층에 위치한 카페는 고급스러운 스타일로 클래식한 분위기를 더해주며, 특별하고 소중한 날의 만족이 있는 곳입니다. 또한 카페 직원들의 매너와 친절은 또 하나의 감동을 선사해드립니다.',
  },
  {
    id: 3,
    info: '서비스',
    name: '호텔 레스토랑',
    floor: '10F',
    Type: '레스토랑',
    open: '07시/22시',
    images: [
      { src: 'facility/restaurant/image1.jpg', alt: '레스토랑1' },
      { src: 'facility/restaurant/image2.jpg', alt: '레스토랑2' },
      { src: 'facility/restaurant/image3.jpg', alt: '레스토랑3' },
      { src: 'facility/restaurant/image4.jpg', alt: '레스토랑4' },
    ],
    link: 'restaurant',
    desc:
      '호텔의 메인 다이닝인 레스토랑은 상쾌한 야외 사이드를 겸비한 레스토랑입니다. 아침에는 세미 조식 뷔페를, 저녁에는 각종 모임 및 연회를 고려한 디너 뷔페를 즐길 수 있습니다.',
  },
];

const Main = () => {
  const items = [
    { to: '/', label: '홈' },
    { to: '/facility/main', label: '부대시설' },
  ];
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
        <h1>부대시설</h1>
        <p>
          고객의 라이프 스타일과 1:1 맞춤 카운셀링 결과를 토대로, 각 개인에 적합한 프로그램 및
          트리트먼트를 제공합니다.
        </p>
      </HeadLine>
      <MainBlock>
        <Container>
          {Category.map(({ id, floor, info, name, Type, images, link }) => (
            <ListItem key={id} roomType={info}>
              <ImgSlider>
                <CategoryImageSlider roomImage={images} />
              </ImgSlider>
              <Inside>
                <div>
                  <span>{info}</span>
                  <h2>
                    <Link to={`/facility/${link}`}>{name}</Link>
                  </h2>
                </div>
                <Info>
                  <div className='infoItem'>
                    <div>
                      <strong>위치</strong>
                      <span>{floor}</span>
                    </div>
                    <div className='last'>
                      <strong>타입</strong>
                      <span>{Type}</span>
                    </div>
                  </div>
                  <StyledLink>
                    <Link to={`/facility/${link}`} className='roomLink'>
                      자세히 보기
                    </Link>
                    <VscZoomIn className='ZoomIcon' />
                  </StyledLink>
                </Info>
              </Inside>
            </ListItem>
          ))}
        </Container>
      </MainBlock>
    </>
  );
};

export default Main;
