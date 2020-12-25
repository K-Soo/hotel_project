import React from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { VscChevronRight, VscChevronLeft } from 'react-icons/vsc';

const CardItem = styled.div`
  position: relative;
  img {
    max-height: 700px;
    width: 100%;
    object-fit: cover;
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
  line-height: 90px;
  width: 60px;
  vertical-align: middle;
  transform: translateY(-50%);
  color: #fff;
  z-index: 3;
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

const ImageSliderBlock = styled.div`
  margin: 0 auto;
`;

const ImageSlider = ({ images }) => {
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
    <ImageSliderBlock>
      <Slider {...settings}>
        {images.map(img => (
          <CardItem key={img.src}>
            <img src={require(`lib/images/${img.src}`)} alt={`${img.alt}`} />
          </CardItem>
        ))}
      </Slider>
    </ImageSliderBlock>
  );
};

export default ImageSlider;
