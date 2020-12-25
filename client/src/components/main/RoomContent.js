import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RoomContentBlock = styled.div`
  margin: 50px auto;
  border-top: 1px solid #e3e3e3;
  padding-top: 50px;
`;

const CardItem = styled.div`
  img {
    width: 100%;
    object-fit: cover;
    padding: 0 15px;
  }
`;
const Title = styled.div`
  h1 {
    text-align: center;
  }
`;

const StyledLink = styled.nav`
  color: #3f6299;
  font-size: 1.1rem;
  padding: 10px 0;
  text-align: right;
  .icon {
    height: 15px;
  }
  &:hover {
    color: #1a65b8;
  }
`;

const roomImage = [
  { src: 'rooms/standard/superiorTwin/room1.jpg', alt: '슈페리어더트윈1' },
  { src: 'rooms/boutique/boutiqueTwin/room1.jpg', alt: '부티크트윈1' },
  { src: 'rooms/boutique/boutiqueFamily/room1.jpg', alt: '부티크패밀리트윈1' },
  { src: 'rooms/deluxe/deluxeTwin/room1.jpg', alt: '디럭스트윈1' },
  { src: 'rooms/deluxe/deluxeSuite/room1.jpg', alt: '디럭스스위트1' },
  { src: 'rooms/suite/suitePremier/room1.jpg', alt: '스위트프리미어1' },
  { src: 'rooms/suite/royalSuite/room1.jpg', alt: '로얄스위트1' },
];
const RoomContent = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <RoomContentBlock>
      <Title>
        <h1>주요 객실</h1>
      </Title>
      <StyledLink>
        <Link to='rooms/main'>자세히 보기</Link>
        <BsChevronDoubleRight className='icon' />
      </StyledLink>
      <Slider {...settings}>
        {roomImage.map(img => (
          <CardItem key={img.src}>
            <img src={require(`lib/images/${img.src}`)} alt={`${img.alt}`} />
          </CardItem>
        ))}
      </Slider>
    </RoomContentBlock>
  );
};

export default RoomContent;
