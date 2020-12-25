import React from 'react';
import Footer from 'components/common/Footer';
import { Helmet } from 'react-helmet-async';
import Header from 'components/common/Header';
import ReserveDetail from 'components/reservation/ReserveDetail';

const checkReservePage = ({ match, history }) => {
  return (
    <>
      <Helmet>
        <title>Corinthia&nbsp;예약</title>
      </Helmet>
      <Header />
      <ReserveDetail match={match} history={history} />
      <Footer />
    </>
  );
};

export default checkReservePage;
