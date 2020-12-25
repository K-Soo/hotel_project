import React, { useState, useCallback, useEffect } from 'react';
import AuthNav from 'components/navigation/AuthNav';
import { useSelector, useDispatch } from 'react-redux';
import { initializeForm } from 'modules/auth';
import { initializeCheckForm } from 'modules/checkReserve';
import { logout } from 'modules/user';
import DropdownMenu from 'components/common/DropdownMenu';

const AuthNavContainer = () => {
  const [btnName, setBtnName] = useState('');
  const [loginUser, setLoginUser] = useState();
  const { user } = useSelector(({ auth, user }) => ({
    user: user.user,
  }));
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(initializeCheckForm('userReserve'));
    dispatch(logout());
  }, [dispatch]);

  const isOpen = useCallback(
    e => {
      setBtnName(e.target.name);
      // click event form Init
      dispatch(initializeForm('login'));
      dispatch(initializeForm('register'));
      dispatch(initializeCheckForm('nonMember_reserve'));
      dispatch(initializeCheckForm('nonMember'));
      dispatch(initializeCheckForm('nonMember_reserveError'));
    },
    [dispatch, setBtnName]
  );

  useEffect(() => {
    if (user) {
      setBtnName('');
      const { userId } = user;
      setLoginUser(userId);
    }
  }, [user]);

  return (
    <>
      <AuthNav isOpen={isOpen} btnName={btnName} loginUser={loginUser} onLogout={onLogout} />
      <DropdownMenu isOpen={isOpen} />
    </>
  );
};

export default AuthNavContainer;
