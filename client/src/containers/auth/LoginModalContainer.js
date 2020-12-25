import React, { useState, useCallback, useEffect } from 'react';
import LoginModal from 'components/auth/LoginModal';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, login } from 'modules/auth';
import { withRouter } from 'react-router-dom';
import { check } from 'modules/user';

const LoginModalContainer = ({ isOpen, history }) => {
  const [error, setError] = useState(null);
  const { auth, form, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const dispatch = useDispatch();

  const onChange = useCallback(
    e => {
      const { value, name } = e.target;
      dispatch(
        changeField({
          form: 'login',
          name,
          value,
        })
      );
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const { userId, password } = form;
      dispatch(login({ userId, password }));
    },
    [dispatch, form]
  );

  // login error message
  useEffect(() => {
    if (authError) {
      setError(authError.data.msg);
      return;
    }
    if (auth) {
      dispatch(check());
    }
  }, [authError, dispatch, history, auth]);

  useEffect(() => {
    if (user) {
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage error', e);
      }
    }
  }, [history, user]);

  return (
    <>
      <LoginModal isOpen={isOpen} onSubmit={onSubmit} onChange={onChange} error={error} />
    </>
  );
};

export default withRouter(LoginModalContainer);
