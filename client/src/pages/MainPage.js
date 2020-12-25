import React from 'react';
import Main from 'components/main/Main';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import { Helmet } from 'react-helmet-async';

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Corinthia&nbsp;메인</title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
export default MainPage;
