import React from 'react';
import Footer from 'components/common/Footer';
import MainContainer from 'containers/reservation/MainContainer';
import { Helmet } from 'react-helmet-async';
import Header from 'components/common/Header';
import GuestInfoContainer from 'containers/reservation/GuestInfoContainer';
import CompletedContainer from 'containers/reservation/CompletedContainer';
import CheckReserveContainer from 'containers/reservation/CheckReserveContainer';
import CheckNonMemReserveContainer from 'containers/reservation/CheckNonMemReserveContainer';
const ReservationPage = ({ match }) => {
  const { booking } = match.params;
  return (
    <>
      {booking === 'main' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;예약</title>
          </Helmet>
          <Header />
          <MainContainer />
          <Footer />
        </>
      )}
      {booking === 'guest-info' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;예약</title>
          </Helmet>
          <Header />
          <GuestInfoContainer />
          <Footer />
        </>
      )}
      {booking === 'reserve-completed' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;예약</title>
          </Helmet>
          <Header />
          <CompletedContainer />
          <Footer />
        </>
      )}
      {booking === 'check-reserve' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;예약</title>
          </Helmet>
          <Header />
          <CheckReserveContainer />
          <Footer />
        </>
      )}
      {booking === 'check-nonMem-reserve' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;예약</title>
          </Helmet>
          <Header />
          <CheckNonMemReserveContainer />
          <Footer />
        </>
      )}
    </>
  );
};

export default ReservationPage;
