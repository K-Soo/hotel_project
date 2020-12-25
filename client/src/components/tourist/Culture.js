import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from 'components/common/Breadcrumb';
import styled from 'styled-components';
import HeadLine from 'components/common/HeadLine';
import { culture } from 'components/tourist/TouristData';
import Select from 'react-select';
import {
  SelectBox,
  TouristLink,
  StyledMain,
  ContentList,
  Container,
} from 'components/tourist/Main';

const Links = styled(TouristLink)`
  a:first-child {
    margin-right: 15px;
    background: #fff;
    color: #000;
    :hover {
      background: #666;
      color: #fff;
    }
  }
  a:last-child {
    background: #666;
    color: #fff;
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
  { to: '/tourist/history', label: '주변관광지 / 문화 주요명소' },
];
const options = [
  { value: 'experience', label: '체험' },
  { value: 'shopping', label: '쇼핑' },
  { value: 'performance', label: '공연' },
];

const Culture = () => {
  const [category, setCategory] = useState('experience');
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
      <Links>
        <Link to='/tourist/history'>역사&nbsp;주요명소</Link>
        <Link to='/tourist/culture'>문화&nbsp;주요명소</Link>
      </Links>

      <StyledMain>
        <ContentList number={number}>
          <li className='experience' number='1' onClick={onClick}>
            체험
          </li>
          <li className='shopping' number='2' onClick={onClick}>
            쇼핑
          </li>
          <li className='performance' number='3' onClick={onClick}>
            공연
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
        {category === 'experience' && (
          <Container>
            {culture.experience.map(({ id, img_src, title, time_required, desc, link }) => (
              <article key={id}>
                <ImageItem>
                  <img src={require(`lib/images/${img_src}`)} alt={title} />
                </ImageItem>
                <div className='description'>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <div>
                    <span>이동 소요시간&nbsp;:&nbsp;{time_required}</span>
                  </div>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    홈페이지 바로가기
                  </a>
                </div>
              </article>
            ))}
          </Container>
        )}

        {category === 'shopping' && (
          <Container>
            {culture.shopping.map(({ id, img_src, title, time_required, desc, link }) => (
              <article key={id}>
                <ImageItem>
                  <img src={require(`lib/images/${img_src}`)} alt={title} />
                </ImageItem>
                <div className='description'>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <div>
                    <span>이동 소요시간&nbsp;:&nbsp;{time_required}</span>
                  </div>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    홈페이지 바로가기
                  </a>
                </div>
              </article>
            ))}
          </Container>
        )}

        {category === 'performance' && (
          <Container>
            <section>
              {culture.performance.map(({ id, img_src, title, time_required, desc, link }) => (
                <article key={id}>
                  <ImageItem>
                    <img src={require(`lib/images/${img_src}`)} alt={title} />
                  </ImageItem>
                  <div className='description'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <div>
                      <span>이동 소요시간&nbsp;:&nbsp;{time_required}</span>
                    </div>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                      홈페이지 바로가기
                    </a>
                  </div>
                </article>
              ))}
            </section>
          </Container>
        )}
      </StyledMain>
    </div>
  );
};

export default Culture;
