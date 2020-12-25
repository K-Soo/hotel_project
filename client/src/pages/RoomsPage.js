import React from 'react';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import MainContainer from 'containers/rooms/MainContainer';
import SuperiorDouble from 'components/rooms/standard/SuperiorDouble';
import SuperiorTwin from 'components/rooms/standard/SuperiorTwin';
import BoutiqueFamily from 'components/rooms/boutique/BoutiqueFamily';
import BoutiqueTwin from 'components/rooms/boutique/BoutiqueTwin';
import DeluxeTwin from 'components/rooms/deluxe/DeluxeTwin';
import DeluxeSuite from 'components/rooms/deluxe/DeluxeSuite';
import RoyalSuite from 'components/rooms/suite/RoyalSuite';
import SuitePremier from 'components/rooms/suite/SuitePremier';
import { Helmet } from 'react-helmet-async';

const RoomsPage = ({ match }) => {
  const { room_type } = match.params;
  return (
    <>
      {room_type === 'main' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;객실</title>
          </Helmet>
          <Header />
          <MainContainer />
          <Footer />
        </>
      )}
      {room_type === 'superior-double' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{room_type}</title>
          </Helmet>
          <Header />
          <SuperiorDouble />
          <Footer />
        </>
      )}
      {room_type === 'superior-twin' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{room_type}</title>
          </Helmet>
          <Header />
          <SuperiorTwin />
          <Footer />
        </>
      )}
      {room_type === 'boutique-twin' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{room_type}</title>
          </Helmet>
          <Header />
          <BoutiqueTwin />
          <Footer />
        </>
      )}
      {room_type === 'boutique-family' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{room_type}</title>
          </Helmet>
          <Header />
          <BoutiqueFamily />
          <Footer />
        </>
      )}
      {room_type === 'deluxe-twin' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{room_type}</title>
          </Helmet>
          <Header />
          <DeluxeTwin />
          <Footer />
        </>
      )}
      {room_type === 'deluxe-suite' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{room_type}</title>
          </Helmet>
          <Header />
          <DeluxeSuite />
          <Footer />
        </>
      )}
      {room_type === 'suite-premier' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{room_type}</title>
          </Helmet>
          <Header />
          <SuitePremier />
          <Footer />
        </>
      )}
      {room_type === 'royal-suite' && (
        <>
          <Helmet>
            <title>Corinthia&nbsp;{room_type}</title>
          </Helmet>
          <Header />
          <RoyalSuite />
          <Footer />
        </>
      )}
    </>
  );
};

export default RoomsPage;
