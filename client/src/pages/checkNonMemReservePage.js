import React from 'react';
import Footer from 'components/common/Footer';
import { Helmet } from 'react-helmet-async';
import Header from 'components/common/Header';
import NonMemReserveDetail from 'components/reservation/NonMemReserveDetail';

const checkNonMemReservePage = ({ match, history }) => {
  return (
    <>
      <Helmet>
        <title>Corinthia&nbsp;예약</title>
      </Helmet>
      <Header />
      <NonMemReserveDetail match={match} history={history} />
      <Footer />
    </>
  );
};

export default checkNonMemReservePage;
