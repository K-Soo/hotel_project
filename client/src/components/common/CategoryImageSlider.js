import React from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';

const CategoryImageSliderBlock = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
`;

const CardItem = styled.div`
  position: relative;
  img {
    height: auto;
    width: 100%;
    height: 400px;
    object-fit: cover;
    overflow: hidden;
    ${({ theme }) => theme.LaptopL`
       height: 350px;
  `}
    ${({ theme }) => theme.Laptop`
       height: 300px;
  `}
      ${({ theme }) => theme.Mobile`
       height: 250px;
  `}
  }
`;

const Arrow = styled.div`
  ${props =>
    props.prev &&
    css`
      position: absolute;
      left: 30px;
      top: 50%;
    `}
  ${props =>
    props.next &&
    css`
      position: absolute;
      top: 50%;
      right: 30px;
    `}
  font-size: 60px;
  height: 80px;
  border-radius: 5px;
  cursor: pointer;
  line-height: 90px;
  width: 60px;
  vertical-align: middle;
  transform: translateY(-50%);
  color: #fff;
  z-index: 2;
  :hover {
    background: rgba(21, 13, 12, 0.6);
  }
  ${({ theme }) => theme.Laptop`
    display:none;
  `}
`;

const NextArrow = props => {
  const { onClick } = props;
  return (
    <Arrow next onClick={onClick}>
      <VscChevronRight />
    </Arrow>
  );
};

const PrevArrow = props => {
  const { onClick } = props;
  return (
    <Arrow prev onClick={onClick}>
      <VscChevronLeft />
    </Arrow>
  );
};

const CategoryImageSlider = ({ roomImage }) => {
  const settings = {
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: 'linear',
  };
  return (
    <CategoryImageSliderBlock>
      <Slider {...settings}>
        {roomImage.map(val => (
          <CardItem key={val.src}>
            <img src={require(`lib/images/${val.src}`)} alt={`${val.alt}`} />
          </CardItem>
        ))}
      </Slider>
    </CategoryImageSliderBlock>
  );
};

export default CategoryImageSlider;
