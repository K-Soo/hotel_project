import React from 'react';
import styled from 'styled-components';
import Button from 'lib/styles/Button';
import { withRouter } from 'react-router-dom';
// import GlobalStyle from '../../styles/CreateGlobalStyle';

const NotFoundBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.4rem;
  line-height: 1.8;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

const Main = styled.div`
  background: #f9f9f9;
  padding: 150px 100px;
  text-align: center;
  margin-top: 50px;
  span {
    color: #a7a461;
  }
`;

const NotFound = ({ history }) => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <NotFoundBlock>
        <Main>
          <h3>CORINTHIA HOTEL</h3>
          <h1>요청하신 페이지를 찾을수 없습니다.</h1>
          <p>방문하시려는 페이지의 주소가 잘못 입력되었거나,</p>
          <p>페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.</p>
          <p>
            <span>다른 페이지로 이동</span>하시거나 <span>주소를 다시 확인</span>해 주시기바랍니다.
          </p>
          <hr />
          <p>고객센터로 연락해 주시면 친절히 안내해 드리겠습니다.</p>
          <Button NotFound onClick={() => history.push('/')}>
            메인으로 이동
          </Button>
        </Main>
      </NotFoundBlock>
    </>
  );
};

export default withRouter(NotFound);
