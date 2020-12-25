import React from 'react';
import styled from 'styled-components';
import ImageSlider from 'components/common/ImageSlider';
import CalendarContainer from 'containers/reservation/CalendarContainer';
import RoomContent from 'components/main/RoomContent';
import Location from 'components/main/Location';

const StyledMain = styled.div`
  width: 80%;
  margin: 0 auto;
  ${({ theme }) => theme.Tablet`
  width: 95%;
  `}
`;

const ImageBlock = styled.div`
  position: relative;
  margin: 0 auto;
  max-height: 800px;
`;

const Wap = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  position: absolute;
  left: 0;
  right: 0;
  display: inline-block;
  bottom: 0;
  width: 60%;
  ${({ theme }) => theme.Tablet`
  width: 100%;
  margin-bottom: 0;
  position:static;
  `}
`;

const images = [
  { src: 'main/main_1.jpg', alt: 'mainImage1' },
  { src: 'main/main_2.jpg', alt: 'mainImage2' },
  { src: 'main/main_3.jpg', alt: 'mainImage3' },
  { src: 'main/main_4.jpg', alt: 'mainImage4' },
];
const Main = () => {
  return (
    <StyledMain>
      <ImageBlock>
        <ImageSlider images={images} />
        <Wap>
          <CalendarContainer />
        </Wap>
      </ImageBlock>
      <RoomContent />
      <Location />
    </StyledMain>
  );
};

export default Main;
