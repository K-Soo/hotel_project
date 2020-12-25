import React, { useState, useCallback, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import DropRoom from 'components/reservation/DropRoom';
import { roomType } from 'modules/reservation';
import usePromise from 'containers/reservation/usePromise';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const DropRoomContainer = ({ history }) => {
  const [Category, setCategory] = useState();
  const [loading, resolved, error] = usePromise(() => {
    return axios.get('/api/reservation/list');
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (resolved) {
      const arr = resolved.map(({ reName }) => {
        return { [reName]: false };
      });
      const NewObj = Object.assign({}, ...arr);
      setCategory(NewObj);
    }
  }, [resolved]);

  const handleClick = useCallback(
    id => {
      dispatch(roomType(resolved[id]));
    },
    [resolved, dispatch]
  );

  const nameHandler = useCallback(
    e => {
      const { className } = e.target;
      setCategory({ ...Category, [className]: !Category[className] });
    },
    [Category]
  );

  return (
    <DropRoom
      nameHandler={nameHandler}
      Category={Category}
      resolved={resolved}
      loading={loading}
      error={error}
      handleClick={handleClick}
      history={history}
    />
  );
};

export default withRouter(DropRoomContainer);
