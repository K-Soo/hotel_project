import React from 'react';
import LoginModalContainer from 'containers/auth/LoginModalContainer';
import RegisterModalContainer from 'containers/auth/RegisterModalContainer';
import MyReserveModalContainer from 'containers/auth/MyReserveModalContainer';
import styled from 'styled-components';
import Button from 'lib/styles/Button';
import { Link } from 'react-router-dom';
const AuthNavBlock = styled.div`
  text-align: right;
  padding: 20px 0;
  cursor: pointer;
  width: 80%;
  margin: 0 auto;
  span {
  }
  .navBtn {
    ::after {
      content: '|';
      color: #666;
      padding: 0px 10px;
    }
    :last-child:after {
      content: '';
      display: none;
    }
  }
  ${({ theme }) => theme.Tablet`
      span {
       padding-right: 10px;
     }
     position: absolute;
     bottom: -41px;
     left: -15px;
     padding:10px 0; 
     width: 100%;
     font-size: 16px;
     background: #fff;
  `}
`;

const AuthNav = ({ isOpen, btnName, loginUser, onLogout }) => {
  return (
    <AuthNavBlock>
      {btnName === 'loginBtn' && <LoginModalContainer isOpen={isOpen} />}
      {btnName === 'registerBtn' && <RegisterModalContainer isOpen={isOpen} />}
      {btnName === 'myReserve' && <MyReserveModalContainer isOpen={isOpen} />}
      {loginUser ? (
        <>
          <Button className='navBtn' Nav>
            {loginUser}님
          </Button>
          <Button className='navBtn' Nav name='myReserve'>
            <Link to='/reservation/check-reserve'>예약 조회</Link>
          </Button>
          <Button className='navBtn' Nav onClick={onLogout}>
            로그아웃
          </Button>
        </>
      ) : (
        <>
          <Button Nav onClick={isOpen} className='navBtn' name='loginBtn'>
            로그인
          </Button>
          <Button Nav onClick={isOpen} className='navBtn' name='registerBtn'>
            회원가입
          </Button>
          <Button Nav onClick={isOpen} className='navBtn' name='myReserve'>
            예약 조회
          </Button>
        </>
      )}
    </AuthNavBlock>
  );
};

export default AuthNav;
