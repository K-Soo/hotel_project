import React from 'react';
import { createGlobalStyle } from 'styled-components';

const CreateGlobalStyle = createGlobalStyle`
body{
  padding-top:0;
  }`;

const GlobalStyle = () => {
  return <CreateGlobalStyle />;
};

export default GlobalStyle;
