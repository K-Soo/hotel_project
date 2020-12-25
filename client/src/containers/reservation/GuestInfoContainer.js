import React, { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import GuestInfo from 'components/reservation/GuestInfo';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm, reserve } from 'modules/reservation';

const GuestInfoContainer = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState({ buyerMsg: '', guestMsg: '' });
  const [disabled, setDisabled] = useState(false);
  const [userData, setUseData] = useState('');
  const [TotalPrice, setTotalPrice] = useState('');
  const [child, setChild] = useState(null);
  const [InfoCheck, setInfoChecked] = useState({
    thirdInfo: false,
    colInfo: false,
  });
  const { roomType, detail, auth, booking, user } = useSelector(({ reservation, auth, user }) => ({
    roomType: reservation.roomType,
    detail: reservation.detail,
    auth: auth.auth,
    booking: reservation.booking,
    user: user.user,
  }));
  // Sum Amount
  useEffect(() => {
    const sumPrice = roomType.price.replace(/,/g, '') * detail.stay;
    const newString = sumPrice.toLocaleString();
    setTotalPrice(newString);
  }, [detail.stay, roomType.price]);

  // date init
  if (detail) {
    var In = detail.checkIn.slice(0, -1);
    var Out = detail.checkOut.slice(0, -1);
  }
  // Form init
  useEffect(() => {
    dispatch(initializeForm('booking'));
  }, [dispatch]);

  // Child selected init
  useEffect(() => {
    if (detail.children) {
      setChild(detail.children);
    }
  }, [detail.children]);

  // logged in init
  useEffect(() => {
    if (auth) {
      setUseData(auth);
      const { name, email, phone } = userData;
      const JoinData = [{ buyerName: name }, { buyerPhon: phone }, { buyerEmail: email }];
      JoinData.forEach(el => {
        const newName = Object.keys(el).join();
        const newValue = Object.values(el).join();
        dispatch(
          changeField({
            form: 'buyer',
            name: newName,
            value: newValue,
          })
        );
      });
    }
  }, [userData, dispatch, auth]);

  //Personal info checkbox handler
  const InfoBoxHandle = useCallback(
    e => {
      const { name, checked } = e.target;
      setInfoChecked({ ...InfoCheck, [name]: checked });
    },
    [InfoCheck]
  );

  //input value change handler
  const ChangeHandler = useCallback(
    e => {
      const { value, name, className } = e.target;
      const NewClassName = ['buyer', 'guest', 'desc'];
      NewClassName.forEach(targetName => {
        if (className === targetName) {
          dispatch(
            changeField({
              form: targetName,
              name,
              value,
            })
          );
        }
      });
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      // verify
      const { buyer, guest } = booking;
      if ([guest.guestName, guest.guestPhon, guest.guestEmail].includes('')) {
        return setError({ guestMsg: '투숙자정보를 모두 입력해주세요' });
      } else if ([buyer.buyerName, buyer.buyerPhon, buyer.buyerEmail].includes('')) {
        return setError({ buyerMsg: '구매자정보를 모두 입력해주세요' });
      } else {
        setError({ guestMsg: '', buyerMsg: '' });
      }
      if ([InfoCheck.colInfo, InfoCheck.thirdInfo].includes(false)) {
        return alert('개인정보 수집동의 바랍니다.');
      }
      setDisabled(true);
      const bookingID = Math.floor(Math.random() * 900000) + 100000;
      dispatch(reserve({ detail, roomType, booking, user, bookingID, TotalPrice }));
      setTimeout(() => {
        setDisabled(false);
        dispatch(initializeForm('booking'));
        history.push('/reservation/reserve-completed');
      }, 1500);
    },
    [InfoCheck, booking, dispatch, detail, roomType, user, history, TotalPrice]
  );

  // Refresh button
  const goBack = () => {
    dispatch(initializeForm('booking'));
    history.push('/reservation/main');
  };

  return (
    <GuestInfo
      onChange={ChangeHandler}
      In={In}
      Out={Out}
      child={child}
      roomType={roomType}
      detail={detail}
      userData={userData}
      InfoBoxHandle={InfoBoxHandle}
      onSubmit={onSubmit}
      goBack={goBack}
      error={error}
      TotalPrice={TotalPrice}
      disabled={disabled}
    />
  );
};

export default withRouter(GuestInfoContainer);
