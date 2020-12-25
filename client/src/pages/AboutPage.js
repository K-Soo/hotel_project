import React from 'react';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Introduction from 'components/about/Introduction';
import Concept from 'components/about/Concept';
import Location from 'components/about/Location';
import { Helmet } from 'react-helmet-async';

const textBox = {
  introduction: '소개',
  concept: '컨셉 디자인',
  service: '서비스',
  location: '찾아오시는길',
};
const AboutPage = ({ match }) => {
  const { category } = match.params;
  const text = textBox[category];
  return (
    <>
      {category === 'introduction' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{text}</title>
          </Helmet>
          <Header />
          <Introduction />
          <Footer />
        </>
      )}
      {category === 'concept' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{text}</title>
          </Helmet>
          <Header />
          <Concept />
          <Footer />
        </>
      )}

      {category === 'location' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{text}</title>
          </Helmet>
          <Header />
          <Location />
          <Footer />
        </>
      )}
    </>
  );
};

export default AboutPage;
