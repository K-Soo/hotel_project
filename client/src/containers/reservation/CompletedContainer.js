import React, { useCallback } from 'react';
import Completed from 'components/reservation/Completed';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { initializeForm } from 'modules/reservation';

const CompletedContainer = ({ history, location }) => {
  const dispatch = useDispatch();
  const { book } = useSelector(({ reservation }) => ({
    book: reservation.book,
  }));
  const { booking, roomType, detail, bookingID, TotalPrice } = book;

  const onClick = useCallback(() => {
    dispatch(initializeForm('book'));
    dispatch(initializeForm('detail'));
    dispatch(initializeForm('roomType'));
    history.push('/');
    window.history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, [history, dispatch, location.href]);

  return (
    <Completed
      booking={booking}
      roomType={roomType}
      detail={detail}
      onClick={onClick}
      TotalPrice={TotalPrice}
      bookingID={bookingID}
    />
  );
};

export default withRouter(CompletedContainer);
