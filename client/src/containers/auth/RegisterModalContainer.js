import React, { useState, useCallback, useEffect } from 'react';
import RegisterModal from 'components/auth/RegisterModal';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm, register } from 'modules/auth';
import { withRouter } from 'react-router-dom';
import { check } from 'modules/user';

const RegisterModalContainer = ({ isOpen, history }) => {
  const [error, setError] = useState(null);
  const { auth, form, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
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
          form: 'register',
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
      const { userId, password, passwordConfirm, name, email, phone } = form;
      if ([userId, password, passwordConfirm, name, email, phone].includes('')) {
        setError('빈 칸을 모두 입력해주세요');
        return;
      }
      if (password !== passwordConfirm) {
        setError('비밀번호가 일치하지않음');
        dispatch(changeField({ form: 'register', name: 'password', value: '' }));
        dispatch(changeField({ form: 'register', name: 'passwordConfirm', value: '' }));
        return;
      }
      dispatch(register({ userId, password, name, email, phone }));
    },
    [dispatch, form]
  );

  //회원가입 성공/실패 처리
  useEffect(() => {
    if (authError) {
      if (authError.status === 400) {
        setError(authError.data.msg);
        return;
      }
      setError(authError.data.msg);
      dispatch(initializeForm('register'));
    }
  }, [authError, dispatch]);

  //초기화
  useEffect(() => {
    if (auth) {
      dispatch(check());
    }
    if (user) {
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage error', e);
      }
    }
  }, [history, auth, user, dispatch]);

  return <RegisterModal isOpen={isOpen} onSubmit={onSubmit} onChange={onChange} error={error} />;
};

export default withRouter(RegisterModalContainer);
