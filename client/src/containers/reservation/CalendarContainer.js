import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'components/reservation/Calendar';
import { increase, decrease, checkIn, checkout, stay } from 'modules/reservation';

const CalendarContainer = () => {
  const [open, setOpen] = useState(false);
  const [endDate, setEndDate] = useState(new Date().setDate(new Date().getDate() + 1));
  const [night, setNight] = useState(1);
  const dispatch = useDispatch();
  const isOpen = e => {
    setOpen(!open);
  };
  // check in,out
  const [startCheckIn, setStartCheckIn] = useState();
  const [startCheckOut, setStartCheckOut] = useState();
  // in
  const [inMonth, setInMonth] = useState();
  const [inDate, setInDate] = useState();
  // out
  const [outMonth, setOutMonth] = useState();
  const [outDate, setOutDate] = useState();
  const { form, dateTime } = useSelector(({ reservation }) => ({
    form: reservation.detail,
    dateTime: reservation.detail,
  }));

  useEffect(() => {
    // dispatch(checkIn(new Date()));
  }, [dispatch]);

  useEffect(() => {
    const { checkIn, checkOut } = dateTime;
    setStartCheckIn(new Date(checkIn));
    setStartCheckOut(new Date(checkOut));
    // inDate
    setInMonth(new Date(checkIn).getMonth() + 1);
    setInDate(new Date(checkIn).getDate());
    // outDate
    setOutMonth(new Date(checkOut).getMonth() + 1);
    setOutDate(new Date(checkOut).getDate());
  }, [dateTime]);

  const onChange = dates => {
    const [start, end] = dates;
    setStartCheckIn(start);
    setEndDate(end);
    dispatch(checkIn(start.toLocaleDateString()));
    if (end > 1) {
      const value = start - end;
      const revalue = Math.abs(Math.floor(value / (1000 * 60 * 60 * 24)));
      setNight(revalue);
      setOpen(!open);
      dispatch(checkout(end.toLocaleDateString()));
      dispatch(stay(revalue));
    }
  };

  const { adult, children, roomQuantity } = form;
  const onSubmit = useCallback(e => {
    e.preventDefault();
  }, []);

  const onIncrease = useCallback(
    e => {
      const { name } = e.target;
      dispatch(increase(name));
    },
    [dispatch]
  );
  const onDecrease = useCallback(
    e => {
      const { name } = e.target;
      if (children > 0 || adult > 1 || roomQuantity > 1) dispatch(decrease(name));
    },
    [dispatch, adult, children, roomQuantity]
  );

  return (
    <>
      <Calendar
        adult={adult}
        roomQuantity={roomQuantity}
        children={children}
        open={open}
        onSubmit={onSubmit}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        isOpen={isOpen}
        //check in
        inMonth={inMonth}
        inDate={inDate}
        //check out
        outDate={outDate}
        outMonth={outMonth}
        // start Date
        startCheckIn={startCheckIn}
        startCheckOut={startCheckOut}
        night={night}
        onChange={onChange}
        endDate={endDate}
      />
    </>
  );
};

export default CalendarContainer;
