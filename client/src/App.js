import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from 'components/common/NotFound';
import MainPage from 'pages/MainPage';
import RoomsPage from 'pages/RoomsPage';
import FacilityPage from 'pages/FacilityPage';
import ReservationPage from 'pages/ReservationPage';
import checkReservePage from 'pages/checkReservePage';
import AboutPage from 'pages/AboutPage';
import TouristPage from 'pages/TouristPage';
import checkNonMemReservePage from 'pages/checkNonMemReservePage';
const App = () => {
  return (
    <>
      <Switch>
        <Route exact component={MainPage} path='/' />
        <Route exact component={AboutPage} path='/about/:category' />
        <Route exact component={RoomsPage} path='/rooms/:room_type' />
        <Route exact component={FacilityPage} path='/facility/:facility_type' />
        <Route exact component={TouristPage} path='/tourist/:category' />
        <Route exact component={checkReservePage} path='/reservation/check-reserve/:id/:index' />
        <Route
          component={checkNonMemReservePage}
          exact
          path='/reservation/check-nonMem-reserve/:id/:index'
        />
        <Route exact component={ReservationPage} path='/reservation/:booking' />
        <Route component={NotFound} path='/' />
      </Switch>
    </>
  );
};

export default App;
