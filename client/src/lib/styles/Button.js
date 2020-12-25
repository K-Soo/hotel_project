import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  color: white;
  padding: 10px;
  border-radius: 1px;
  border: none;
  vertical-align: middle;
  letter-spacing: 0.1rem;
  font-weight: bold;
  outline: none;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  background: #1a65b3;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #0e4377;
  }
  ${props =>
    props.disabled &&
    css`
      background: #0e4377;
      cursor: default;
      &:hover {
        background: #0e4377;
      }
    `}

  ${props =>
    props.tourist &&
    css`
      padding: 0;
      margin: 0;
      flex-grow: 1;
      border-radius: 0;
      background: #555;
      border: 1px solid #666;
      &:hover {
        transition: all 0.3s ease-in-out;
        background: #000;
      }
    `}

  ${props =>
    props.Register &&
    css`
      background: #af9a6c;
      &:hover {
        background: #574d35;
      }
    `}

  ${props =>
    props.submit &&
    css`
      width: 100%;
      margin-top: 10px;
    `}

  ${props =>
    props.print &&
    css`
      width: 100px;
      background: #4caf50;
      &:hover {
        background: #087f23;
      }
    `}

    ${props =>
    props.complete &&
    css`
      width: 100px;
    `}

  ${props =>
    props.refresh &&
    css`
      width: 100%;
      background: crimson;
      margin-top: 10px;
      &:hover {
        background: darkred;
      }
    `}

    ${props =>
    props.checkButton &&
    css`
      background: #555;
      font-size: 12px;
      padding: 10px 20px;
      &:hover {
        background: #333;
      }
    `}

    ${props =>
    props.bookingButton &&
    css`
      font-size: 12px;
      padding: 10px 20px;
    `}

  ${props =>
    props.NotFound &&
    css`
      background: #000;
      margin-top: 1rem;
      padding: 1rem 2rem;
    `}

    ${props =>
    props.logOut &&
    css`
      all: unset;
      font-weight: 500;
      background: crimson;
      border: 1px solid #666;
      color: #fff;
      padding: 5px;
      & + & {
        margin-left: 1rem;
      }
      &:hover {
        transition: all 0.1s ease-in-out;
        color: #000;
        transform: scale(1.1);
        background: none;
      }
    `}

    ${props =>
    props.Nav &&
    css`
      all: unset;
      color: #333;
      font-weight: 500;
      &:hover {
        transition: all 0.1s ease-in-out;
        color: #666;
        background: none;
      }
    `}
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
