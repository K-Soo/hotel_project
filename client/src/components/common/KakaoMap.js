import React, { useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const KakaoMapBlock = styled.div`
  height: 500px;
  margin: 20px auto;
`;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.561621, 126.994037),
      level: 7,
    };
    // 지도를 생성한다
    let map = new kakao.maps.Map(container, options);
    // 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
    map.setZoomable(false);
    // 지도에 확대 축소 컨트롤을 생성한다
    let zoomControl = new kakao.maps.ZoomControl();
    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    let markerPosition = new kakao.maps.LatLng(37.561621, 126.994037);
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return <KakaoMapBlock id='myMap' />;
};

export default KakaoMap;
