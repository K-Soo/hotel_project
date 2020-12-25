import React from 'react';
import KakaoMap from 'components/common/KakaoMap';
import styled from 'styled-components';

const StyledLocation = styled.div`
  border-top: 1px solid #e3e3e3;
  padding: 50px 0;
`;
const Location = () => {
  return (
    <StyledLocation>
      <h1>LOCATION</h1>
      <address>서울특별시 중구</address>
      <KakaoMap />
    </StyledLocation>
  );
};

export default Location;
