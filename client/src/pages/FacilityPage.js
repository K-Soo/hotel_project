import React from 'react';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Main from 'components/facility/Main';
import Cafe from 'components/facility/Cafe';
import Fitness from 'components/facility/Fitness';
import Restaurant from 'components/facility/Restaurant';
import Sauna from 'components/facility/Sauna';
import { Helmet } from 'react-helmet-async';

const textBox = {
  main: '부대시설',
  restaurant: '레스토랑',
  cafe: '카페',
  fitness: '피트니스',
  sauna: '사우나',
};

const FacilityPage = ({ match }) => {
  const { facility_type } = match.params;
  const text = textBox[facility_type];

  return (
    <>
      {facility_type === 'main' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{text}</title>
          </Helmet>
          <Header />
          <Main />
          <Footer />
        </>
      )}
      {facility_type === 'restaurant' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{text}</title>
          </Helmet>
          <Header />
          <Restaurant />
          <Footer />
        </>
      )}
      {facility_type === 'cafe' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{text}</title>
          </Helmet>
          <Header />
          <Cafe />
          <Footer />
        </>
      )}
      {facility_type === 'fitness' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{text}</title>
          </Helmet>
          <Header />
          <Fitness />
          <Footer />
        </>
      )}
      {facility_type === 'sauna' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{text}</title>
          </Helmet>
          <Header />
          <Sauna />
          <Footer />
        </>
      )}
    </>
  );
};

export default FacilityPage;
