import React, { useEffect } from 'react';
import CheckReserve from 'components/reservation/CheckReserve';
import { useSelector, useDispatch } from 'react-redux';
import { userReserve } from 'modules/checkReserve';

const CheckReserveContainer = () => {
  const { user, checkReserve } = useSelector(({ user, checkReserve }) => ({
    user: user.user,
    checkReserve: checkReserve.userReserve,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      const { _id } = user;
      dispatch(userReserve({ _id }));
    }
  }, [dispatch, user]);

  return <CheckReserve checkReserve={checkReserve} />;
};

export default CheckReserveContainer;
