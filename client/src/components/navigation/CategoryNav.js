import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const NavbarBlock = styled.nav`
  color: #333;
  text-align: center;
  cursor: pointer;
  .mainLogo {
    margin: 0 auto;
    display: block;
    background: url(${require('lib/images/sprites.png')}) -5px -157px;
    width: 123px;
    height: 60px;
  }
`;

const ContentBox = styled.div`
  border-bottom: 1px solid #666;
  background: #fff;
  position: fixed;
  height: 0;
  left: 0;
  right: 0;
  opacity: 0;
  display: none;
  text-align: left;
  padding-bottom: 10px;
  h2 {
    padding: 20px 0;
    width: 1024px;
    margin: 0 auto;
    text-align: left;
    ${({ theme }) => theme.Laptop`
      width: 100%;
      text-align: center;
    `}
  }
  section {
    display: flex;
    justify-content: space-between;
    width: 1024px;
    margin: 0 auto;
    padding: 5px;
    padding: 0 30px;
    text-align: left;
    article {
      h3 {
        padding-bottom: 15px;
        font-size: 20px;
        font-weight: 700;
      }
      li {
        padding-bottom: 5px;
        :hover {
          text-decoration: underline;
        }
      }
      a {
        margin: 0;
        padding: 0;
      }
      .mainNav {
        display: flex;
        justify-content: space-around;
        li {
          margin: 20px;
          font-size: 18px;
        }
      }
    }
    ${({ theme }) => theme.Laptop`
      width: 100%;
    `}
  }
`;

const ContentBlock = styled.div`
  position: relative;
  padding: 10px 0;
  .reserveButton {
    position: absolute;
    top: 5px;
    border: 1px solid #e5e5e5;
    background: #af9a6c;
    padding: 3px 0;
    a {
      color: #fff;
      :hover {
        color: #fff;
      }
    }
    :hover {
      background: #7e6c40;
      color: #fff;
    }
  }
  &:hover {
    ${ContentBox} {
      top: 161px;
      opacity: 1;
      height: auto;
      display: block;
    }
  }
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  width: 80%;
  a {
    letter-spacing: 0.1rem;
    font-weight: 500;
    padding: 0 2rem;
    white-space: nowrap;
    &:hover {
      color: #000;
    }
  }
  ${({ theme }) => theme.Tablet`
    display: none;
  `}
`;

const NavImage = styled.div`
  img {
    width: 350px;
    height: 200px;
    object-fit: cover;
  }
`;

const CategoryNav = ({ history, open }) => {
  return (
    <NavbarBlock>
      <i className='mainLogo' onClick={() => history.push('/')} />
      <Container open={open}>
        <ContentBlock>
          <Link to='/about/introduction'>호텔&nbsp;소개</Link>
          <ContentBox>
            <h2>Corinthia&nbsp;소개</h2>
            <section>
              <article>
                <ul className='mainNav'>
                  <li>
                    <Link to='/about/introduction'>소개</Link>
                  </li>
                  <li>
                    <Link to='/about/location'>위치</Link>
                  </li>
                </ul>
              </article>
              <NavImage>
                <img src={require('lib/images/main/lobby2.jpg')} alt='lobbyImage' />
              </NavImage>
            </section>
          </ContentBox>
        </ContentBlock>

        <ContentBlock>
          <Link to='/rooms/main'>객실</Link>
          <ContentBox>
            <h2>객실</h2>
            <section>
              <article>
                <h3>Standard</h3>
                <ul>
                  <li>
                    <Link to='/rooms/superior-double'>슈페리어&nbsp;더블</Link>
                  </li>
                  <li>
                    <Link to='/rooms/superior-twin'>슈페리어&nbsp;트윈</Link>
                  </li>
                </ul>
              </article>
              <article>
                <h3>Boutique</h3>
                <ul>
                  <li>
                    <Link to='/rooms/boutique-twin'>부티크&nbsp;트윈</Link>
                  </li>
                  <li>
                    <Link to='/rooms/boutique-family'>부티크&nbsp;패밀리</Link>
                  </li>
                </ul>
              </article>
              <article>
                <h3>Deluxe</h3>
                <ul>
                  <li>
                    <Link to='/rooms/deluxe-suite'>디럭스&nbsp;스위트</Link>
                  </li>
                  <li>
                    <Link to='/rooms/deluxe-suite'>디럭스&nbsp;트윈</Link>
                  </li>
                </ul>
              </article>
              <article>
                <h3>Suite</h3>
                <ul>
                  <li>
                    <Link to='/rooms/royal-suite'>로얄&nbsp;스위트</Link>
                  </li>
                  <li>
                    <Link to='/rooms/suite-premier'>스위트&nbsp;프리미어</Link>
                  </li>
                </ul>
              </article>
              <NavImage>
                <img
                  src={require('lib/images/rooms/suite/suitePremier/room1.jpg')}
                  alt='roomMain'
                />
              </NavImage>
            </section>
          </ContentBox>
        </ContentBlock>

        <ContentBlock>
          <Link to='/facility/main'>부대시설</Link>
          <ContentBox>
            <h2>부대시설</h2>
            <section>
              <article>
                <h3>사우나&nbsp;&&nbsp;피트니스</h3>
                <ul>
                  <li>
                    <Link to='/facility/sauna'>사우나&nbsp;센터</Link>
                  </li>
                  <li>
                    <Link to='/facility/fitness'>피트니스&nbsp;센터</Link>
                  </li>
                </ul>
              </article>
              <article>
                <h3>서비스</h3>
                <ul>
                  <li>
                    <Link to='/facility/cafe'>CORINTHIA&nbsp;카페</Link>
                  </li>
                  <li>
                    <Link to='/facility/restaurant'>CORINTHIA&nbsp;레스토랑</Link>
                  </li>
                </ul>
              </article>
              <NavImage>
                <img src={require('lib/images/facility/fitness/image4.jpg')} alt='fitnessMain' />
              </NavImage>
            </section>
          </ContentBox>
        </ContentBlock>

        <ContentBlock>
          <Link to='/tourist/history'>주변&nbsp;관광지</Link>
          <ContentBox>
            <h2>주변&nbsp;관광지</h2>
            <section>
              <article>
                <h3>
                  <Link to='/tourist/history'>역사&nbsp;주요명소</Link>
                </h3>
                <ul>
                  <li>
                    <Link to='/tourist/history'>한옥마을</Link>
                  </li>
                  <li>
                    <Link to='/tourist/history'>고궁</Link>
                  </li>
                  <li>
                    <Link to='/tourist/history'>박물관</Link>
                  </li>
                </ul>
              </article>
              <article>
                <h3>
                  <Link to='/tourist/culture'>문화&nbsp;주요명소</Link>
                </h3>
                <ul>
                  <li>
                    <Link to='/tourist/culture'>체험</Link>
                  </li>
                  <li>
                    <Link to='/tourist/culture'>쇼핑</Link>
                  </li>
                  <li>
                    <Link to='/tourist/culture'>공연</Link>
                  </li>
                </ul>
              </article>
              <NavImage>
                <img
                  src={require('lib/images/tourist/culture/experience/Cheonggyecheon.jpg')}
                  alt='CheonggyecheonImage'
                />
              </NavImage>
            </section>
          </ContentBox>
        </ContentBlock>
        <ContentBlock>
          <div className='reserveButton'>
            <Link to='/reservation/main'>예약하기</Link>
          </div>
        </ContentBlock>
      </Container>
    </NavbarBlock>
  );
};

export default withRouter(CategoryNav);
