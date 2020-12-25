import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoBlock = styled.section`
  background: #fff;
  border-top: 1px solid #ccc;
  position: relative;
  article {
    display: flex;
    position: relative;
    i {
      margin: 10px 20px;
    }
    .dimontonate {
      background: url(${require('lib/images/sprites.png')}) -249px -5px;
      width: 258px;
      height: 57px;
    }
    .face {
      background: url(${require('lib/images/sprites.png')})-138px -157px;
      width: 109px;
      height: 57px;
    }
    .hermes {
      background: url(${require('lib/images/sprites.png')}) -172px -5px;
      width: 67px;
      height: 41px;
    }
    ${({ theme }) => theme.Tablet`
      display:none;
    `}
  }
  .icon {
    background: url(${require('lib/images/sprites.png')}) -249px -72px;
    width: 167px;
    height: 43px;
    right: 10px;
    top: 10px;
    text-align: right;
    position: absolute;
    cursor: pointer;
    ${({ theme }) => theme.Tablet`
    position: sticky;
    margin: 0 auto;
    display: block;
    `}
  }
`;

const Container = styled.section`
  background: #0f0f0f;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  flex-wrap: wrap;
  .inner {
    /* margin: 0 auto; */
  }
  .hotel {
    background: url(${require('lib/images/sprites.png')}) -5px -157px;
    width: 123px;
    height: 60px;
    margin: 0 15px;
  }
  .address {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 0 5px 0;
    address {
      padding-right: 20px;
    }
    span {
      padding-right: 20px;
      &:last-child {
        padding: 0;
      }
    }
  }
  .licenses {
    display: flex;
    flex-wrap: wrap;
    span {
      padding-right: 15px;
    }
  }
  .info {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    color: #fff;
    justify-content: space-between;
    a {
      padding: 0 5px;
    }
  }
  .copy {
    color: #666;
  }
  ${({ theme }) => theme.Tablet`
      padding: 15px;
    `}
`;

const Footer = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <>
      <LogoBlock>
        <article>
          <i className='dimontonate' />
          <i className='face' />
          <i className='hermes' />
        </article>
        <i className='icon' />
      </LogoBlock>
      <Container>
        <i className='hotel' />
        <div className='inner'>
          <article className='address'>
            <address>서울시 강남구 테헤란로 100</address>
            <span>대표이사 홍길동</span>
            <span>TEL. 000-000-1234</span>
          </article>
          <article className='licenses'>
            <span>사업자등록번호 000-000-0000</span>
            <span>통신판매신고번호 00000호</span>
          </article>
          <article className='info'>
            <Link to='#'>고객센터</Link>
            <Link to='#'>이용약관</Link>
            <Link to='#'>이메일무단수집금지</Link>
          </article>
          <p className='copy'>
            Copyright &copy; <span>{thisYear()}</span> HOTEL Co. All rights reserved.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
