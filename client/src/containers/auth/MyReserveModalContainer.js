import React, { useCallback, useState, useEffect } from 'react';
import MyReserveModal from 'components/auth/MyReserveModal';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from 'modules/checkReserve';
import { nonMemReserve } from 'modules/checkReserve';
import { withRouter } from 'react-router-dom';

const MyReserveModalContainer = ({ isOpen, history }) => {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const { form, nonMemberError, nonMemberReserve } = useSelector(({ checkReserve }) => ({
    form: checkReserve.nonMember,
    nonMemberReserve: checkReserve.nonMember_reserve,
    nonMemberError: checkReserve.nonMember_reserveError,
  }));

  useEffect(() => {
    if (nonMemberReserve) {
      history.push('/reservation/check-nonMem-reserve');
    }
  }, [nonMemberReserve, history, dispatch]);

  useEffect(() => {
    setError('');
    if (nonMemberError) {
      setError(nonMemberError.data);
    }
    // dispatch(initializeForm('nonMember_reserveError'));
  }, [nonMemberError, dispatch]);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const { buyerName, buyerPhon, buyerEmail } = form;
      if ([buyerName, buyerPhon, buyerEmail].includes('')) {
        setError('빈 칸을 모두 입력해주세요');
        return;
      }
      dispatch(nonMemReserve({ buyerName, buyerPhon, buyerEmail }));
    },
    [form, dispatch]
  );

  const onChange = useCallback(
    e => {
      const { value, name } = e.target;
      dispatch(
        changeField({
          form: 'nonMember',
          name,
          value,
        })
      );
    },
    [dispatch]
  );

  return <MyReserveModal isOpen={isOpen} onSubmit={onSubmit} onChange={onChange} error={error} />;
};

export default withRouter(MyReserveModalContainer);
