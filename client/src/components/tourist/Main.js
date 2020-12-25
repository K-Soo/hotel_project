import React, { useState } from 'react';
import Breadcrumb from 'components/common/Breadcrumb';
import { Link } from 'react-router-dom';
import HeadLine from 'components/common/HeadLine';
import styled, { css } from 'styled-components';
import { history } from 'components/tourist/TouristData';
import Select from 'react-select';

// Styled Main content
export const StyledMain = styled.main`
  width: 60%;
  margin: 0 auto;
  text-align: center;
  margin: 50px auto;
  ${({ theme }) => theme.LaptopL`
      width: 80%;
  `}
  ${({ theme }) => theme.Laptop`
      width: 90%;
  `}
  ${({ theme }) => theme.Mobile`
      width: 100%;
  `}
`;

// styled Content Nav
export const SelectBox = styled.nav`
  display: none;
  padding-bottom: 10px;
  ${({ theme }) => theme.Tablet`
      display: block;
      width: 90%;
      margin: 0 auto;
  `}
`;

export const ContentList = styled.ul`
  ${({ theme }) => theme.Tablet`
      display: none;
  `}
  display: flex;
  padding: 10px;
  li {
    font-size: 16px;
    color: #333;
    height: 40px;
    line-height: 40px;
    font-weight: 400;
    flex-grow: 1;
    cursor: pointer;
  }
  ${({ number }) =>
    number === '1' &&
    css`
      li:nth-child(1) {
        border-top: 1px solid #000;
        border-right: 1px solid #000;
        border-left: 1px solid #000;
      }
      li:nth-child(2) {
        border-top: 1px solid #e6e6e6;
        border-right: 1px solid #e6e6e6;
        border-bottom: 1px solid #000;
      }
      li:nth-child(3) {
        border-top: 1px solid #e6e6e6;
        border-right: 1px solid #e6e6e6;
        border-bottom: 1px solid #000;
      }
    `}
  ${({ number }) =>
    number === '2' &&
    css`
      li:nth-child(1) {
        border-top: 1px solid #e6e6e6;
        border-right: 1px solid #000;
        border-left: 1px solid #e6e6e6;
        border-bottom: 1px solid #000;
      }
      li:nth-child(2) {
        border-top: 1px solid #000;
        border-right: 1px solid #000;
      }
      li:nth-child(3) {
        border-top: 1px solid #e6e6e6;
        border-right: 1px solid #e6e6e6;
        border-bottom: 1px solid #000;
      }
    `}
    ${({ number }) =>
    number === '3' &&
    css`
      li:nth-child(1) {
        border-top: 1px solid #e6e6e6;
        border-right: 1px solid #e6e6e6;
        border-left: 1px solid #e6e6e6;
        border-bottom: 1px solid #000;
      }
      li:nth-child(2) {
        border-top: 1px solid #e6e6e6;
        border-left: 1px solid #e6e6e6;
        border-bottom: 1px solid #000;
      }
      li:nth-child(3) {
        border-top: 1px solid #000;
        border-right: 1px solid #000;
        border-left: 1px solid #000;
      }
    `}
`;

export const TouristLink = styled.nav`
  margin: 50px auto;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 60%;
  a {
    background: #fff;
    color: #000;
    font-size: 20px;
    border: 1px solid #bbb;
    font-weight: 600;
    flex: 1 1;
    height: 60px;
    line-height: 55px;
    &:hover {
      background: #666;
      color: #fff;
    }
  }
  a:first-child {
    margin-right: 15px;
    background: #666;
    color: #fff;
  }
  ${({ theme }) => theme.LaptopL`
      width: 80%;
  `}
  ${({ theme }) => theme.Mobile`
      width: 90%;
      margin: 0 auto;
      a{
        font-size: 14px;
         height: 40px;
         line-height: 40px;
      }
  `}
`;
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  article {
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #19191919;
    ${({ theme }) => theme.Laptop`
          flex-wrap: wrap;
      `}
    .description {
      display: flex;
      flex-direction: column;
      margin: 0 20px;
      justify-content: space-around;
      text-align: left;
      color: #666;
      width: 40%;
      h2 {
        color: #333;
        font-size: 30px;
        ${({ theme }) => theme.Mobile`
           font-size: 20px;
        `}
      }
      p {
        padding: 20px 0;
        font-size: 18px;
        width: auto;
        word-spacing: 1px;
        line-height: 130%;
        ${({ theme }) => theme.Mobile`
           font-size: 14px;
           padding: 5px 0;
           letter-spacing: 0;
        `}
      }
      a {
        padding-top: 15px;
        color: #1b65b3;
        cursor: pointer;
      }
      ${({ theme }) => theme.Laptop`
       width: 100%;
      `}
    }
  }
`;

const ImageItem = styled.div`
  margin: 0 20px;
  width: 50%;
  img {
    max-width: 100%;
  }
  ${({ theme }) => theme.Laptop`
    width: 100%;
  `}
`;

const items = [
  { to: '/', label: '홈' },
  { to: '/tourist/culture', label: '주변관광지 / 역사 주요명소' },
];
const options = [
  { value: 'village', label: '한옥마을' },
  { value: 'ancient', label: '고궁' },
  { value: 'museum', label: '박물관' },
];

const Main = () => {
  const [category, setCategory] = useState('village');
  const [number, setNumber] = useState('1');

  const onClick = e => {
    const { className } = e.target;
    var number = e.target.getAttribute('number');
    setNumber(number);
    setCategory(className);
  };

  const onChange = ({ value }) => {
    setCategory(value);
  };

  return (
    <div>
      <Breadcrumb>
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcrumb>

      <HeadLine>
        <h1>주요명소</h1>
      </HeadLine>
      <TouristLink>
        <Link to='/tourist/history'>역사&nbsp;주요명소</Link>
        <Link to='/tourist/culture'>문화&nbsp;주요명소</Link>
      </TouristLink>

      <StyledMain>
        <ContentList number={number}>
          <li className='village' number='1' onClick={onClick}>
            한옥마을
          </li>
          <li className='ancient' number='2' onClick={onClick}>
            고궁
          </li>
          <li className='museum' number='3' onClick={onClick}>
            박물관
          </li>
        </ContentList>
        <SelectBox>
          <Select
            options={options}
            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#ccc',
                primary: '#666',
                primary50: '#ccc',
              },
            })}
            defaultValue={options[0]}
            onChange={onChange}
          />
        </SelectBox>
        {category === 'village' && (
          <Container>
            {history.village.map(({ id, img_src, title, time_required, desc, link }) => (
              <article key={id}>
                <ImageItem>
                  <img src={require(`lib/images/${img_src}`)} alt={title} />
                </ImageItem>
                <div className='description'>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <div>
                    <strong>이동 소요시간&nbsp;:&nbsp;</strong>
                    <span>{time_required}</span>
                  </div>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    홈페이지 바로가기
                  </a>
                </div>
              </article>
            ))}
          </Container>
        )}

        {category === 'museum' && (
          <Container>
            {history.museum.map(({ id, img_src, title, time_required, desc, link }) => (
              <article key={id}>
                <ImageItem>
                  <img src={require(`lib/images/${img_src}`)} alt={title} />
                </ImageItem>
                <div className='description'>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <div>
                    <strong>이동 소요시간&nbsp;:&nbsp;</strong>
                    <span>{time_required}</span>
                  </div>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    홈페이지 바로가기
                  </a>
                </div>
              </article>
            ))}
          </Container>
        )}

        {category === 'ancient' && (
          <Container>
            {history.ancient.map(({ id, img_src, title, time_required, desc, link }) => (
              <article key={id}>
                <ImageItem>
                  <img src={require(`lib/images/${img_src}`)} alt={title} />
                </ImageItem>
                <div className='description'>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <div>
                    <strong>이동 소요시간&nbsp;:&nbsp;</strong>
                    <span>{time_required}</span>
                  </div>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    홈페이지 바로가기
                  </a>
                </div>
              </article>
            ))}
          </Container>
        )}
      </StyledMain>
    </div>
  );
};

export default Main;
