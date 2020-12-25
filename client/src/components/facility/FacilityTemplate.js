import React from 'react';
import styled, { css } from 'styled-components';
import { BsDot } from 'react-icons/bs';
import ImageSlider from 'components/common/ImageSlider';

const FacilityTemplateBlock = styled.div`
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
  h3,
  strong {
    color: #333;
  }
`;
const HeadLineBlock = styled.div`
  margin: 50px auto;
  text-align: center;
`;

const Description = styled.div`
  padding: 50px 0;
  p {
    width: 80%;
    margin: 0 auto;
  }
`;

const CommonFlex = css`
  display: flex;
  flex-wrap: wrap;
`;

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

const Questions = styled.div`
  margin: 50px auto;
  padding: 30px 0;
  border: 1px solid #e7e7e7;
  background: #f5f5f5;
  .QuestionsInner {
    display: flex;
    flex-wrap: wrap;
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
      }
    }
  }
`;

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

const FacilityTemplate = ({ contents, images }) => {
  return (
    <FacilityTemplateBlock>
      <HeadLineBlock>
        <div>
          <span>{contents.floor}&nbsp;/&nbsp;</span>
          <span>{contents.info}</span>
        </div>
        <div className='title'>
          <h1>{contents.name}</h1>
        </div>
      </HeadLineBlock>
      <ImageSlider images={images} />
      <Description>
        <div>
          <div>
            <p>{contents.desc}</p>
          </div>
        </div>
      </Description>

      <InformationBlock>
        <InformationInner>
          <h2>시설 개요</h2>
          <section>
            <article>
              <ul>
                <li>위치</li>
                <li>{contents.floor}</li>
              </ul>
              <ul>
                <li>타입</li>
                <li>{contents.Type}</li>
              </ul>
            </article>

            <article>
              <ul>
                <li>분류</li>
                <li>{contents.info}</li>
              </ul>
              <ul>
                <li>이용시간</li>
                <li>{contents.open}</li>
              </ul>
            </article>
          </section>
        </InformationInner>
      </InformationBlock>

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
                  부대시설내 별도로 결제 이용 바랍니다.
                </li>
                <li>
                  <BsDot />
                  코로나 관련 생활안전 수칙 지켜주시기바랍니다.
                </li>
              </ul>
            </article>
          </section>
        </OtherInformationInner>
      </OtherInformationBlock>

      <Questions>
        <div className='QuestionsInner'>
          <h2>문의사항</h2>
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
    </FacilityTemplateBlock>
  );
};

export default FacilityTemplate;
