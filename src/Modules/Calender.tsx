import React, { useState, useEffect } from 'react';
import { useStyles } from './Calender.Styles';
import NextBackButtons from './Buttons/NextBackButtons';
import MonthAndYear from './MonthAndYear/MonthAndYear';
import SelectedDate from './SelectedDate/SelectedDate';
import Datestable from './Table/Datestable';
import moment from 'moment';

export interface IDates {
  year: number;
  month: number;
  date: number;
}

export default function Calender() {
  const { datesGenerator } = require('dates-generator');
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(moment());
  const [dates, setDates] = useState([] as any);
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

  const getDatesInMonthDisplay = (month: number, year: number) => {
    const totalDaysInMonth = getDaysInMonth(month, year);
    const firstWeekday = getFirstWeekdayOfMonth(month, year);
    console.log(firstWeekday,"firstWeekday");
    
    for (let i = 1; i <= totalDaysInMonth; i++) {
      allDates.push(moment({ year: year, month: month, date: i }).toObject());
    }
    return setAllDates(allDates);
  };

  while (allDates.length > 0) arrOfArrays.push(allDates.splice(0, 7));
  console.log(arrOfArrays, 'arrOfArrays');

  useEffect(() => {
    getDatesInMonthDisplay(calendar.currentMonth, calendar.currentYear);
    setArrOfArrays([...arrOfArrays]);
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(calendar);

    setDates([...dates]);

    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
    console.log(dates, 'dates');
    console.log(calendar, 'calendar');
  }, []);

  const onSelectDate = (date: IDates) => {
    setSelectedDate(moment({ year: date.year, month: date.month, date: date.date }));
    console.log(selectedDate);
  };

  const onClickNext = () => {
    getDatesInMonthDisplay(calendar.nextMonth, calendar.currentYear);
    arrOfArrays.splice(0, arrOfArrays.length);
    setArrOfArrays([...arrOfArrays]);
    const next = { month: calendar.nextMonth, year: calendar.nextYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(next);

    setDates([...dates]);

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
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(previous);

    setDates([...dates]);
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
      <Datestable arrOfArrays={arrOfArrays} onSelectDate={onSelectDate} />
    </div>
  );
}
