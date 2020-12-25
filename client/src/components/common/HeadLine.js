import React from 'react';
import styled from 'styled-components';

const StyledHeadLine = styled.div`
  margin: 0 auto;
  width: 60%;
  padding: 0 10px;
  text-align: center;
  padding-bottom: 50px;
  color: #666;
  h1 {
    font-size: 2.5rem;
    padding-bottom: 1.5rem;
    padding-top: 20px;
    color: #333;
  }
  p {
    font-size: 18px;
    letter-spacing: 1px;
    word-spacing: 3px;
  }
  ${({ theme }) => theme.Desktop`
      width: 80%;
  `}
  ${({ theme }) => theme.LaptopL`
     padding-bottom: 20px;
     h1 {
        font-size: 1.5rem;
        padding-bottom: 0.5rem;
          }
    p {
         font-size: 14px;
        }
    `}
    ${({ theme }) => theme.Tablet`
     width: 100%;
  `}
`;

const HeadLine = ({ children, ...rest }) => {
  return <StyledHeadLine>{children}</StyledHeadLine>;
};

export default HeadLine;
