import React from 'react';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import MainContainer from 'containers/tourist/MainContainer';
import Culture from 'components/tourist/Culture';
import { Helmet } from 'react-helmet-async';

const TouristPage = ({ match }) => {
  const { category } = match.params;
  return (
    <>
      {category === 'culture' ? (
        <>
          <Helmet>
            <title>Corinthia&nbsp;문화주요명소</title>
          </Helmet>
          <Header />
          <Culture />
          <Footer />
        </>
      ) : (
        <>
          <Helmet>
            <title>Corinthia&nbsp;역사주요명소</title>
          </Helmet>
          <Header />
          <MainContainer />
          <Footer />
        </>
      )}
    </>
  );
};

export default TouristPage;
