import React, { useState, useEffect } from 'react';
import { useStyles } from './Calender.Styles';
import NextBackButtons from './Buttons/NextBackButtons';
import MonthAndYear from './MonthAndYear/MonthAndYear';
import SelectedDate from './SelectedDate/SelectedDate';
import MonthlyView from './Table/MonthlyView';
import moment from 'moment';

export interface IDates {
  [x: string]: number;
  year: number;
  month: number;
  date: number;
}

export default function Calender() {
  const { datesGenerator } = require('dates-generator');
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(moment());
  const [allDates, setAllDates] = useState([] as any);
  const [arrOfArrays, setArrOfArrays] = useState([] as any);
  const [calendar, setCalendar] = useState({
    currentMonth: selectedDate.month(),
    currentYear: selectedDate.year(),
    nextMonth: selectedDate.month() + 1,
    nextYear: selectedDate.year() + 1,
    previousMonth: selectedDate.month() - 1,
    previousYear: selectedDate.year() - 1
  });

  const getDaysInMonth = (month: number, year: number) => {
    return moment({ month: month, year: year }).daysInMonth();
  };

  const getFirstWeekdayOfMonth = (month: number, year: number) => {
    return moment({ month: month, year: year })
      .startOf('month')
      .weekday();
  };
  const getPrevMonthYear = (month: number, year: number) => {
    if (month === 0) {
      return {
        month: 11,
        year: year - 1
      };
    }
    return {
      month: month - 1,
      year
    };
  };

  const getNextMonthYear = (month: number, year: number) => {
    if (month === 0 || month < 11) {
      return {
        month: month + 1,
        year
      };
    }
    return {
      month: 0,
      year: year + 1
    };
  };

  const getDatesInMonthDisplay = (month: number, year: number) => {
    const totalDaysInMonth = getDaysInMonth(month, year);
    console.log(totalDaysInMonth, 'totalDaysInMonth');

    const firstWeekday = getFirstWeekdayOfMonth(month, year);
    console.log('firstWeekday:', firstWeekday, 'currentMonth:', month);

    const prev = getPrevMonthYear(month, year);
    console.log(prev, 'prevMonthYear');
    const prevDaysInMonth = getDaysInMonth(prev.month, prev.year);
    console.log(prevDaysInMonth, 'prevDaysInMonth');

    const next = getNextMonthYear(month, year);
    console.log(next, 'nextMonthYear');

    for (let j = firstWeekday - 1; j >= 0; j--) {
      allDates.push(moment({ year: prev.year, month: prev.month, date: prevDaysInMonth - j }).toObject());
    }

    for (let i = 1; i <= totalDaysInMonth; i++) {
      allDates.push(moment({ year: year, month: month, date: i }).toObject());
    }
    console.log(allDates.length, 'allDates length');

    if (allDates.length < 35) {
      const daysToAdd = 35 - allDates.length;

      for (let k = 1; k <= daysToAdd; k++) {
        allDates.push(moment({ year: next.year, month: next.month, date: k }).toObject());
      }
    }
    return setAllDates(allDates);
  };

  while (allDates.length > 0) arrOfArrays.push(allDates.splice(0, 7));
  console.log(arrOfArrays, 'arrOfArrays');

  useEffect(() => {
    getDatesInMonthDisplay(calendar.currentMonth, calendar.currentYear);
    setArrOfArrays([...arrOfArrays]);
    const { nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(calendar);

    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });

    console.log(calendar, 'calendar');
  }, []);

  const onSelectDate = (date: IDates) => {
    setSelectedDate(moment(date));
    console.log(selectedDate);
  };

  const onClickNext = () => {
    getDatesInMonthDisplay(calendar.nextMonth, calendar.nextYear);
    arrOfArrays.splice(0, arrOfArrays.length);
    setArrOfArrays([...arrOfArrays]);
    const next = { month: calendar.nextMonth, year: calendar.nextYear };
    const { nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(next);

    setCalendar({
      ...calendar,
      currentMonth: calendar.nextMonth,
      currentYear: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  };

  const onClickBack = () => {
    getDatesInMonthDisplay(calendar.previousMonth, calendar.previousYear);
    arrOfArrays.splice(0, arrOfArrays.length);
    setArrOfArrays([...arrOfArrays]);
    const previous = { month: calendar.previousMonth, year: calendar.previousYear };
    const { nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(previous);

    setCalendar({
      ...calendar,
      currentMonth: calendar.previousMonth,
      currentYear: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  };

  return (
    <div className={classes.root}>
      <NextBackButtons onClickNext={onClickNext} onClickBack={onClickBack} />
      <SelectedDate selectedDate={selectedDate} />
      <MonthAndYear calendar={calendar} />
      <MonthlyView
        arrOfArrays={arrOfArrays}
        onSelectDate={onSelectDate}
        calendar={calendar}
        selectedDate={selectedDate}
      />
    </div>
  );
}
