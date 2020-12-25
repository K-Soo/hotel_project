import React from 'react';
import styled, { css } from 'styled-components';
import { BsDot } from 'react-icons/bs';
import ImageSlider from 'components/common/ImageSlider';

const RoomTemplateBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  color: #666;
  h1 {
    color: #222;
    font-size: 45px;
    font-weight: 500;
  }
  h2 {
    font-size: 30px;
    color: #333;
    padding-bottom: 15px;
    flex-basis: 20%;
    padding-left: 20px;
    white-space: nowrap;
  }
  strong {
    color: #333;
  }
  ${({ theme }) => theme.Laptop`
    width: 95%;
    h1 {
    font-size: 30px;
  }
  `}
  ${({ theme }) => theme.Tablet`
    h1 {
    font-size: 25px;
  }
  h2 {
    font-size: 20px;
    padding-bottom: 15px;
  }
  li{
    font-size: 14px;
  }
  `}
`;
const CommonFlex = css`
  display: flex;
  flex-wrap: wrap;
`;

// styled headLine
const HeadLineBlock = styled.div`
  margin: 50px auto;
  text-align: center;
`;
// styled description
const Description = styled.div`
  padding: 50px 0;
  p {
    width: 80%;
    margin: 0 auto;
  }
  ${({ theme }) => theme.Tablet`
    padding: 20px 0;
    font-size: 14px;
  `}
`;
// styled service
const ServiceBlock = styled.div`
  border-top: 1px solid #d6d6d6;
  padding: 50px 0;
`;
const ServiceInner = styled.div`
  ${CommonFlex}
  section {
    flex-grow: 1;
    margin-left: 20px;
  }
  li {
    margin-bottom: 10px;
  }
`;
// styled amenities
const AmenitiesBlock = styled.div`
  border-top: 1px solid #d6d6d6;
  padding: 50px 0;
`;
const AmenitiesInner = styled.div`
  ${CommonFlex}
  section {
    ${CommonFlex}
    flex-grow: 1;
    margin-left: 20px;
  }
  article {
    padding-right: 100px;
    margin-left: 20px;
    h3 {
      padding: 10px 0;
    }
    ul li {
      padding-bottom: 5px;
    }
  }
`;
// styled otherInformation
const OtherInformationBlock = styled.div`
  border-top: 1px solid #d6d6d6;
  padding: 50px 0;
`;

const OtherInformationInner = styled.div`
  ${CommonFlex}
  section {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    margin-left: 20px;
  }
  li {
    padding-bottom: 10px;
  }
`;

//styled questions
const Questions = styled.div`
  margin: 50px auto;
  padding: 25px 0;
  border: 1px solid #e7e7e7;
  background: #f5f5f5;
  .QuestionsInner {
    ${CommonFlex}
    align-items: center;
    strong {
      padding-right: 15px;
    }
    section {
      display: flex;
      flex-grow: 1;
      padding-left: 20px;
      article :first-child {
        padding-bottom: 10px;
        ${({ theme }) => theme.Tablet`
        padding-bottom: 0px;
        `}
      }
    }
  }
  ${({ theme }) => theme.Tablet`
    width: 90%;
    margin: 20px auto;
    padding: 10px 0;
  `}
`;

// styled information
const InformationBlock = styled.div`
  border-top: 1px solid #d6d6d6;
  padding: 50px 0;
`;
const InformationInner = styled.div`
  ${CommonFlex}
  section {
    ${CommonFlex}
    font-size: 30px;
    flex-wrap: wrap;
    margin-left: 20px;
  }
  article {
    flex-grow: 1;
    margin-left: 20px;
    ul {
      font-size: 18px;
      display: flex;
      margin-bottom: 15px;
    }

    ul li {
      padding-right: 20px;
      flex-grow: 1;
      width: 130px;
      white-space: nowrap;
    }
  }
`;

const RoomTemplate = ({ contents, images }) => {
  return (
    <RoomTemplateBlock>
      <HeadLineBlock>
        <div>
          <span>{contents.floor}&nbsp;/&nbsp;</span>
          <span>{contents.roomType}</span>
        </div>
        <div className='title'>
          <h1>{contents.name}</h1>
        </div>
      </HeadLineBlock>
      <ImageSlider images={images} />
      <Description>
        <div>
          <p>{contents.desc}</p>
        </div>
      </Description>

      <InformationBlock>
        <InformationInner>
          <h2>객실개요</h2>
          <section>
            <article>
              <ul>
                <li>객실 층수</li>
                <li>{contents.floor}</li>
              </ul>
              <ul>
                <li>투숙인원</li>
                <li>{contents.people}</li>
              </ul>
            </article>

            <article>
              <ul>
                <li>전망</li>
                <li>{contents.view}</li>
              </ul>
              <ul>
                <li>객실면적</li>
                <li>{contents.roomSize}</li>
              </ul>
            </article>

            <article>
              <ul>
                <li>체크인/체크아웃</li>
                <li>{contents.checkInOutTime}</li>
              </ul>
              <ul>
                <li>침대타입</li>
                <li>{contents.bedType}</li>
              </ul>
            </article>
          </section>
        </InformationInner>
      </InformationBlock>

      <ServiceBlock>
        <ServiceInner>
          <h2>특별서비스</h2>
          <section>
            <article>
              <ul>
                <li>
                  <BsDot />
                  맞춤형 베개 제공
                </li>
                <li>
                  <BsDot />전 객실 초고속 무료 인터넷 (유선, 와이파이)
                </li>
                <li>
                  <BsDot />
                  해온베딩 시스템: 최상의 숙면을 위한 침대 및 침구류
                </li>
              </ul>
            </article>
          </section>
        </ServiceInner>
      </ServiceBlock>

      <AmenitiesBlock>
        <AmenitiesInner>
          <h2>어미니티</h2>
          <section>
            <article>
              <h3>일반</h3>
              <ul>
                <li>37"LCD TV</li>
                <li>손전등</li>
                <li>슬리퍼</li>
                <li>객실전화기</li>
                <li>금고</li>
                <li>구두주걱</li>
                <li>구두클리너</li>
              </ul>
            </article>

            <article>
              <h3>욕실</h3>
              <ul>
                <li>1회용 칫솔 및 치약</li>
                <li>면도기</li>
                <li>목욕가운</li>
                <li>전자식 비데</li>
                <li>헤어드라이기</li>
                <li>욕실용품</li>
              </ul>
            </article>

            <article>
              <h3>식음료</h3>
              <ul>
                <li>커피/티 메이커</li>
                <li>즉석온수</li>
                <li>미니바/무료</li>
                <li>생수/무료</li>
                <li>티포트</li>
              </ul>
            </article>
          </section>
        </AmenitiesInner>
      </AmenitiesBlock>

      <OtherInformationBlock>
        <OtherInformationInner>
          <h2>기타 정보</h2>
          <section>
            <article>
              <ul>
                <li>
                  <BsDot />
                  모든 요금에는 부가가치세와 봉사료가 포함되어 있습니다.
                </li>
                <li>
                  <BsDot />
                  모든 시설은 전부 금연이오니, 이용에 착오 없으시기 바랍니다.
                </li>
                <li>
                  <BsDot />
                  호객실은 고객 투숙용이므로 원칙적으로 파티가 허용되지 않습니다.
                </li>
                <li>
                  <BsDot />
                  반려 동물과는 입실 하실 수 없습니다.
                </li>
              </ul>
            </article>
          </section>
        </OtherInformationInner>
      </OtherInformationBlock>

      <Questions>
        <div className='QuestionsInner'>
          <h2>객실 예약문의</h2>
          <section>
            <article>
              <ul>
                <strong>TEL</strong>
                <span>02-000-0000</span>
              </ul>
              <ul>
                <strong>FAX</strong>
                <span>02-000-0000</span>
              </ul>
            </article>
          </section>
        </div>
      </Questions>
    </RoomTemplateBlock>
  );
};

export default RoomTemplate;
