import React from 'react';
import Breadcrumb from 'components/common/Breadcrumb';
import HeadLine from 'components/common/HeadLine';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Category } from 'components/about/AboutData';

const StyledIntroduction = styled.div`
  width: 80%;
  margin: 0 auto;
  ${({ theme }) => theme.Tablet`
   width: 95%;
  `}
`;
const LobbyImage = styled.div`
  img {
    max-height: 500px;
    width: 100%;
    object-fit: cover;
  }
`;
const Intro = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  article {
    flex: 1 1 40%;
    .inner {
      display: flex;
      dl {
        padding-right: 50px;
        dd {
          font-size: 30px;
          font-weight: 500;
          padding-bottom: 10px;
        }
        dt {
          color: #333;
        }
      }
    }
  }
  em {
    font-size: 30px;
    white-space: nowrap;
    ${({ theme }) => theme.Tablet`
       font-size: 20px;
  `}
  }
  p {
    margin: 10px 0 10px 0;
    font-size: 18px;
    line-height: 1.8;
    font-weight: 400;
    ${({ theme }) => theme.Tablet`
       font-size: 14px;
  `}
  }
`;

const CategoryList = styled.div`
  display: flex;
  margin: 50px 0;
  flex-wrap: wrap;
  color: #333;
  a {
    color: #1a65b3;
    float: right;
    padding: 0 15px 15px 0;
    font-weight: 500;
    &:hover {
      transition: all 0.3s ease;
      transform: scale(1.1);
    }
  }
  h2 {
    padding: 10px 15px;
    color: #000;
  }
  p {
    font-weight: 600;
    font-size: 16px;
    padding: 0 0 3px 15px;
    border-bottom: 1px solid #e8e8e8;
  }
  li {
    color: #666;
    padding: 5px 15px;

    &:before {
      content: '-';
      padding-right: 2px;
    }
  }
  .item {
    flex: 1 1 45%;
    margin: 40px 10px;
    border-bottom: 1px solid #e8e8e8;
    ${({ theme }) => theme.Tablet`
      flex: 1 1 60%;
  `}
    .subImage {
      img {
        width: 100%;
      }
    }
  }
`;

const Introduction = () => {
  const items = [
    { to: '/', label: '홈' },
    { to: '/about/introduction', label: '호텔소개' },
  ];

  return (
    <>
      <Breadcrumb>
        {items.map(({ to, label }) => (
          <Link key={to} to={to}>
            {label}
          </Link>
        ))}
      </Breadcrumb>
      <StyledIntroduction>
        <HeadLine>
          <h1>호텔소개</h1>
          <p>
            CORINTHIA은 한국의 아름다움을 현대적인 감각으로 풀어낸 객실(150실)에서 서울의 파노라믹한
            스카이라인과 환상적인 야경을 조망할 수 있으며 일몰과 일출을 한 자리에서 감상할 수 있는
            국내 유일의 호텔입니다.
          </p>
        </HeadLine>
        <LobbyImage>
          <img src={require('lib/images/main/lobby.jpg')} alt='lobbyImage' />
        </LobbyImage>
        <Intro>
          <article>
            <em>
              QUALITY MOMENTS,
              <br />
              MEMORABLE PLEASURE
            </em>
          </article>
          <article>
            <p>
              CORINTHIA은 5성급 호텔입니다. 로비에 들어서면 화이트 톤 인테리어가 절제된 세련미를
              전하고 객실로 드는 순간 드넓게 펼쳐진 바다가 신선한 휴식을 제공합니다. 중식당, 뷔페
              레스토랑, 라운지 & 바가 전하는 특색 있는 다이닝으로 미식의 즐거움을 더하고, 수영장과
              사우나 등 다양한 휴식 공간에서 진정한 삶의 여유를 만끽할 수 있습니다.
            </p>
            <div className='inner'>
              <dl>
                <dd>2020.20.20</dd>
                <dt>설립일</dt>
              </dl>
              <dl>
                <dd>150</dd>
                <dt>객실수</dt>
              </dl>
            </div>
          </article>
        </Intro>
        <CategoryList>
          {Category.map(({ title, sub_title, image, link, desc }) => (
            <div className='item' key={sub_title}>
              <div className='subImage'>
                <img src={require(`lib/images/${image.src}`)} alt={image.alt} />
              </div>
              <div>
                <h2>{title}</h2>
                <p>{sub_title}</p>
                <ul>
                  {desc.map((data, i) => (
                    <li key={i}>{data}</li>
                  ))}
                </ul>
                <Link to={`/${link}`}>자세히보기</Link>
              </div>
            </div>
          ))}
        </CategoryList>
      </StyledIntroduction>
    </>
  );
};

export default Introduction;
