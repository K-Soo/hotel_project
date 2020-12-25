import React from 'react';
import styled, { css } from 'styled-components';
import { BsChevronDoubleRight } from 'react-icons/bs';

const StepBlock = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  border-bottom: 1px solid #666;
  font-size: 20px;
  color: #666;
  margin: 30px auto;
  white-space: nowrap;
  ul {
    display: flex;
    padding-bottom: 5px;
    max-width: 1024px;
    margin-left: 20px;
  }
  li {
    line-height: 20px;
    display: flex;
    align-items: center;
    :last-child {
      .arrow {
        display: none;
      }
    }
    ${({ data }) =>
      data === 1 &&
      css`
        :nth-child(1) {
          color: #000;
        }
      `}

    ${({ data }) =>
      data === 2 &&
      css`
        :nth-child(2) {
          color: #000;
        }
      `}
      ${({ data }) =>
      data === 3 &&
      css`
        :nth-child(3) {
          color: #000;
        }
      `}
  }
  .arrow {
    margin: 0 15px;
  }
  ${({ theme }) => theme.Tablet`
      font-size:16px;
      `}
  ${({ theme }) => theme.Mobile`
      font-size:13px;

    `}
`;
const items = [{ label: '객실선택' }, { label: '고객정보입력' }, { label: '예약완료' }];

const StepBar = ({ num }) => {
  return (
    <StepBlock data={num}>
      <ul>
        {items.map(v => (
          <li key={v.label}>
            <span>{v.label}</span>
            <BsChevronDoubleRight className='arrow' />
          </li>
        ))}
      </ul>
    </StepBlock>
  );
};

export default StepBar;
